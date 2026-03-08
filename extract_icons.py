import cv2
import numpy as np
import os
from PIL import Image

def extract_icons(image_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    
    img = cv2.imread(image_path)
    if img is None:
        print("Failed to load image")
        return
    
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # Background is white (255), so threshold to find non-white objects
    # Any pixel not extremely close to white will be considered an object
    _, thresh = cv2.threshold(gray, 250, 255, cv2.THRESH_BINARY_INV)

    # Clean up small noise
    kernel = np.ones((5,5), np.uint8)
    thresh = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)
    thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)
    
    # Find contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    
    # Extract
    boxes = [cv2.boundingRect(c) for c in contours]
    # Filter boxes that are too small (noise) or too large (the whole image somehow)
    min_area = 1000
    max_area = img.shape[0] * img.shape[1] * 0.9
    boxes = [b for b in boxes if min_area < b[2] * b[3] < max_area]
    
    if not boxes:
        print("No contours found.")
        return
        
    # Sort boxes roughly by rows and then columns
    avg_h = sum([b[3] for b in boxes]) / len(boxes)
    boxes.sort(key=lambda b: (b[1] // (avg_h * 0.5), b[0]))
    
    # Open PIL image for cropping
    pil_img = Image.open(image_path).convert("RGBA")
    
    for i, (x, y, w, h) in enumerate(boxes):
        # We also need to remove the white background to make it transparent
        # Add padding
        pad = max(10, int(max(w, h) * 0.1))
        
        # Make square
        max_dim = max(w, h)
        cx, cy = x + w/2, y + h/2
        
        new_w = max_dim + pad * 2
        new_h = max_dim + pad * 2
        
        left = int(max(0, cx - new_w / 2))
        top = int(max(0, cy - new_h / 2))
        right = int(min(pil_img.width, cx + new_w / 2))
        bottom = int(min(pil_img.height, cy + new_h / 2))
        
        cropped = pil_img.crop((left, top, right, bottom))
        
        # Convert white to transparent
        data = cropped.getdata()
        new_data = []
        for item in data:
            # item is (R, G, B, A)
            # if r, g, b are all high, make it transparent
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        cropped.putdata(new_data)
        
        out_path = os.path.join(output_dir, f'icon_{i}.png')
        cropped.save(out_path)
        print(f"Saved {out_path} (size: {right-left}x{bottom-top})")

extract_icons('assets/icons/Icons.png', 'assets/icons/exported')
