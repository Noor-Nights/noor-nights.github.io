import cv2
import numpy as np
import os

img = cv2.imread('assets/icons/Icons.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 250, 255, cv2.THRESH_BINARY_INV)
kernel = np.ones((5,5), np.uint8)
thresh = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)
thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, kernel)
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

boxes = [cv2.boundingRect(c) for c in contours]
min_area = 1000
max_area = img.shape[0] * img.shape[1] * 0.9
boxes = [b for b in boxes if min_area < b[2] * b[3] < max_area]

avg_h = sum([b[3] for b in boxes]) / len(boxes)
boxes.sort(key=lambda b: (b[1] // (avg_h * 0.5), b[0]))

for i, b in enumerate(boxes):
    print(f"Icon {i}: {b}")
