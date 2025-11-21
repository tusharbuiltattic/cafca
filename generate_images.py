from PIL import Image, ImageDraw, ImageFont
import os

# Earthy color palette
colors = {
    'terracotta': (166, 117, 108),
    'cream': (245, 241, 232),
    'dark_brown': (107, 78, 69),
    'sage': (156, 175, 136),
    'warm_sand': (212, 181, 160),
    'clay': (139, 94, 84)
}

def create_gradient_image(width, height, color1, color2):
    """Create a gradient image from color1 to color2"""
    image = Image.new('RGB', (width, height))
    draw = ImageDraw.Draw(image)
    
    for y in range(height):
        # Calculate interpolation factor
        factor = y / height
        
        # Interpolate between colors
        r = int(color1[0] * (1 - factor) + color2[0] * factor)
        g = int(color1[1] * (1 - factor) + color2[1] * factor)
        b = int(color1[2] * (1 - factor) + color2[2] * factor)
        
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    
    return image

def add_text_overlay(image, text):
    """Add text overlay to image"""
    draw = ImageDraw.Draw(image)
    width, height = image.size
    
    # Try to use a nice font, fall back to default if not available
    try:
        font = ImageFont.truetype("arial.ttf", 60)
    except:
        font = ImageFont.load_default()
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Calculate position (center)
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text with shadow
    shadow_offset = 3
    draw.text((x + shadow_offset, y + shadow_offset), text, fill=(0, 0, 0, 128), font=font)
    draw.text((x, y), text, fill=(255, 255, 255, 230), font=font)
    
    return image

# Image definitions
images_to_create = [
    ('project-8.jpg', 'Architectural\nPortraits', 'terracotta', 'dark_brown', 800, 1000),
    ('project-9.jpg', 'Future City\nPavilion', 'sage', 'clay', 800, 1000),
    ('project-10.jpg', 'Housing\nChallenge', 'warm_sand', 'terracotta', 800, 1000),
    ('project-11.jpg', 'Cultural\nCenter', 'dark_brown', 'terracotta', 800, 1000),
    ('project-12.jpg', 'Garden\nVilla', 'cream', 'sage', 800, 1000),
    ('team-principal.jpg', 'Principal\nArchitect', 'terracotta', 'clay', 600, 800),
    ('team-admin.jpg', 'Administrative\nHead', 'sage', 'warm_sand', 600, 800),
    ('team-associate.jpg', 'Associate\nArchitect', 'clay', 'dark_brown', 600, 800),
    ('blog-1.jpg', 'Natural\nMaterials', 'warm_sand', 'terracotta', 800, 500),
    ('blog-2.jpg', 'Collaborative\nDesign', 'sage', 'clay', 800, 500),
    ('blog-3.jpg', 'Sustainable\nFutures', 'terracotta', 'dark_brown', 800, 500),
    ('vlog-1.jpg', 'Material\nExplorations', 'clay', 'warm_sand', 800, 500),
    ('vlog-2.jpg', 'Urban\nVilla', 'dark_brown', 'terracotta', 800, 500),
    ('vlog-3.jpg', 'Furniture\nWorkshop', 'sage', 'cream', 800, 500),
]

# Create images
for filename, text, color1_name, color2_name, width, height in images_to_create:
    print(f"Creating {filename}...")
    
    color1 = colors[color1_name]
    color2 = colors[color2_name]
    
    # Create gradient
    image = create_gradient_image(width, height, color1, color2)
    
    # Add text
    image = add_text_overlay(image, text)
    
    # Save
    image.save(filename, 'JPEG', quality=90)
    print(f"Saved {filename}")

print("All images created successfully!")
