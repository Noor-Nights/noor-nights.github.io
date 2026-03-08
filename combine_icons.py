from PIL import Image

def combine():
    pil_img = Image.open('assets/icons/Icons.png').convert("RGBA")
    
    # Bounding box of 11, 12, 13
    x_min, y_min = 1452, 1566
    x_max, y_max = 1742, 1798
    w = x_max - x_min
    h = y_max - y_min
    
    pad = int(max(w, h) * 0.1)
    max_dim = max(w, h)
    cx, cy = x_min + w / 2, y_min + h / 2
    
    new_w = max_dim + pad * 2
    new_h = max_dim + pad * 2
    
    left = int(max(0, cx - new_w / 2))
    top = int(max(0, cy - new_h / 2))
    right = int(min(pil_img.width, cx + new_w / 2))
    bottom = int(min(pil_img.height, cy + new_h / 2))
    
    cropped = pil_img.crop((left, top, right, bottom))
    
    data = cropped.getdata()
    new_data = []
    for item in data:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    cropped.putdata(new_data)
    
    out_path = 'assets/icons/theme/charity.png'
    cropped.save(out_path)
    print(f"Combined charity icon saved as {out_path} (size {right-left}x{bottom-top})")

combine()
