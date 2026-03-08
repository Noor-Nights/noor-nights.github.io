import os
import shutil

src_dir = 'assets/icons/exported'
dest_dir = 'assets/icons/theme'

os.makedirs(dest_dir, exist_ok=True)

mapping = {
    'icon_0.png': 'moon.png',
    'icon_1.png': 'calendar.png',
    'icon_2.png': 'checklist.png',
    'icon_3.png': 'moon_circle.png',
    'icon_4.png': 'tasbih.png',
    'icon_5.png': 'checkmark.png',
    'icon_6.png': 'mosque.png',
    'icon_7.png': 'lantern.png',
    'icon_8.png': 'coin.png',
    'icon_9.png': 'gift.png',
    'icon_10.png': 'lightbulb.png',
    'icon_11.png': 'charity.png',
    'icon_12.png': 'heart.png',
    'icon_13.png': 'dua_hands.png',
    'icon_14.png': 'hijri_calendar.png'
}

for old, new in mapping.items():
    src_path = os.path.join(src_dir, old)
    dest_path = os.path.join(dest_dir, new)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
