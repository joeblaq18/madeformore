#!/usr/bin/env python3
"""Generate favicon for MADEFORMORE brand."""

from PIL import Image, ImageDraw, ImageFont
import os

def create_favicon():
    # Create a new image with the brand colors
    size = (256, 256)
    background_color = "#080706"  # Dark black
    accent_color = "#c98a32"      # Gold
    
    # Create image
    img = Image.new("RGB", size, background_color)
    draw = ImageDraw.Draw(img)
    
    # Draw a circular border in gold
    border_width = 8
    border_box = [border_width, border_width, size[0] - border_width, size[1] - border_width]
    draw.ellipse(border_box, outline=accent_color, width=border_width)
    
    # Draw an inner circle for design
    inner_margin = 30
    inner_box = [inner_margin, inner_margin, size[0] - inner_margin, size[1] - inner_margin]
    draw.ellipse(inner_box, outline=accent_color, width=3)
    
    # Add a star-like design in the center
    center_x, center_y = size[0] // 2, size[1] // 2
    star_size = 40
    
    # Draw a simplified star shape using polygons
    points = []
    for i in range(10):
        angle = i * 36  # 360 / 10
        rad = (2 * 3.14159 * angle) / 360
        if i % 2 == 0:
            # Outer point
            x = center_x + int(star_size * 1.0 * ((i - 5) % 2 == 0 and 1 or -1) if i % 2 == 0 else 0)
            y = center_y + int(star_size * 1.0 * (i % 2 == 1 and 1 or -1))
        else:
            # Inner point
            x = center_x + int(star_size * 0.4 * ((i - 5) % 2 == 0 and 1 or -1) if i % 2 == 0 else 0)
            y = center_y + int(star_size * 0.4 * (i % 2 == 1 and 1 or -1))
    
    # Simpler star - draw 4 pointed star
    star_points = [
        (center_x, center_y - star_size),           # Top
        (center_x + star_size * 0.4, center_y - star_size * 0.4),
        (center_x + star_size, center_y),           # Right
        (center_x + star_size * 0.4, center_y + star_size * 0.4),
        (center_x, center_y + star_size),           # Bottom
        (center_x - star_size * 0.4, center_y + star_size * 0.4),
        (center_x - star_size, center_y),           # Left
        (center_x - star_size * 0.4, center_y - star_size * 0.4),
    ]
    
    draw.polygon(star_points, fill=accent_color, outline=accent_color)
    
    # Add "M" letter in the center (using simple rectangle approach)
    # For simplicity, we'll just use the star as the main element
    
    # Save as PNG first for better quality
    png_path = "public/favicon.png"
    os.makedirs("public", exist_ok=True)
    img.save(png_path, "PNG")
    
    # Convert to ICO format
    ico_path = "public/favicon.ico"
    
    # Create multiple sizes for ICO format (common sizes: 16, 32, 64, 256)
    sizes = [16, 32, 64]
    ico_images = []
    
    for size in sizes:
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        ico_images.append(resized)
    
    # Add the original 256 size
    ico_images.append(img)
    
    # Save as ICO
    ico_images[0].save(ico_path, format="ICO", sizes=[(s, s) for s in sizes] + [(256, 256)])
    
    print(f"✅ Favicon created successfully!")
    print(f"📁 PNG: {png_path}")
    print(f"📁 ICO: {ico_path}")
    print("\nAdd this to your HTML head:")
    print('<link rel="icon" type="image/x-icon" href="/favicon.ico">')
    print('<link rel="apple-touch-icon" href="/favicon.png">')

if __name__ == "__main__":
    create_favicon()
