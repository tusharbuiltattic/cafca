# CAFCA - Constructive AF Collaborative Architecture

A premium, interactive website for CAFCA architectural firm featuring earthy tones, smooth animations, and a comprehensive showcase of the firm's philosophy, projects, and team.

## Features

### 🎨 Design
- **Earthy Color Palette**: Terracotta (#A6756C), Cream (#F5F1E8), Sage (#9CAF88), Warm Sand (#D4B5A0)
- **Premium Typography**: Cormorant Garamond for headings, Inter for body text
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Custom Cursor**: Interactive cursor that responds to hover states
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices

### 📐 Sections

#### 1. **Hero Section**
- Full-screen introduction with animated title
- Smooth parallax effects
- Call-to-action button

#### 2. **About Section**
- Four philosophy cards covering:
  - **Ideology**: Sustainable, authentic design approach
  - **Process**: Collaborative, iterative methodology  
  - **Materiality**: Raw concrete, timber, natural stone
  - **Collaboration**: Team-based design philosophy

#### 3. **Projects Section**
- Interactive category filtering:
  - All Projects
  - Architecture
  - Sub Urban
  - Furniture
  - Custom Paintings
  - Competitions
- Dynamic project gallery with 12 projects
- Hover effects with project details overlay
- 3D tilt effect on project cards

#### 4. **Team Section**
- Three team member profiles:
  - Principal Architect
  - Administrative Head
  - Associate Architect
- Image overlays with personal philosophy quotes
- Detailed bios for each member

#### 5. **Updates Section**
- Tabbed interface for Blog and Vlog content
- Blog posts with dates and featured images
- Vlog videos with thumbnails and duration

#### 6. **Banter Section**
- Playful architecture jokes and moments
- Interactive submission form for community banter
- Real-time card addition with animations

#### 7. **Contact Section**
- Contact information cards (location, email, phone, social media)
- Query submission form with:
  - Name, email, phone fields
  - Project type selection
  - Message textarea
  - Success feedback on submission

#### 8. **Footer**
- Logo and tagline
- Copyright information

## Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup with proper SEO meta tags
- **CSS3**: 
  - CSS Variables for design system
  - Flexbox and Grid for layouts
  - Custom animations and transitions
  - Media queries for responsive design
- **Vanilla JavaScript**:
  - Custom cursor tracking
  - Scroll animations (Intersection Observer API)
  - Dynamic project filtering
  - Form handling
  - Tab switching
  - Smooth scrolling

### Interactive Features
1. **Custom Cursor**: Follows mouse movement with smooth delay
2. **Navbar**: Becomes sticky on scroll with background blur
3. **Project Filtering**: Click category buttons to filter projects
4. **Scroll Animations**: Elements fade in as you scroll
5. **Image Hover Effects**: Scale and overlay transitions
6. **3D Tilt**: Project cards tilt based on mouse position
7. **Form Submission**: Visual feedback on successful submission
8. **Mobile Menu**: Responsive hamburger navigation

## File Structure
```
cafca2/
├── index.html          # Main HTML structure
├── style.css           # All styles and responsive design
├── script.js           # Interactive functionality
├── logo.png            # CAFCA logo
├── project-1.jpg       # Urban Villa Residence
├── project-2.jpg       # Sustainable Office Complex
├── project-3.jpg       # Suburban Family Home
├── project-4.jpg       # Eco-Housing Development
├── project-5.jpg       # Handcrafted Dining Collection
├── project-6.jpg       # Minimalist Lounge Series
├── project-7.jpg       # Abstract Landscape Series
├── project-8.jpg       # Architectural Portraits
├── project-9.jpg       # Future City Pavilion
├── project-10.jpg      # Sustainable Housing Challenge
├── project-11.jpg      # Cultural Center
├── project-12.jpg      # Garden Villa
├── team-principal.jpg  # Principal Architect photo
├── team-admin.jpg      # Administrative Head photo
├── team-associate.jpg  # Associate Architect photo
├── blog-1.jpg          # Blog post image
├── blog-2.jpg          # Blog post image
├── blog-3.jpg          # Blog post image
├── vlog-1.jpg          # Vlog thumbnail
├── vlog-2.jpg          # Vlog thumbnail
└── vlog-3.jpg          # Vlog thumbnail
```

## How to Use

1. **Open the website**: Simply open `index.html` in a modern web browser
2. **Navigate**: Use the navigation menu or scroll through sections
3. **Filter Projects**: Click category buttons to view specific project types
4. **Submit Queries**: Fill out the contact form to send inquiries
5. **Share Banter**: Add your own architecture jokes in the Banter section

## Customization

### Update Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-terracotta: #A6756C;
    --primary-cream: #F5F1E8;
    /* ... more colors */
}
```

### Add Projects
Add new project objects to the `projectsData` array in `script.js`:
```javascript
{
    id: 13,
    title: 'New Project',
    category: 'architecture',
    description: 'Project description'
}
```

### Update Team Information
Edit the team member HTML in `index.html` (Team Section)

### Modify Content
All content can be edited directly in the HTML file - section headers, descriptions, contact details, etc.

## Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Modern mobile browsers

## Performance Optimizations
- Lazy loading for images
- Intersection Observer for scroll animations
- CSS transforms for smooth animations
- Efficient event listeners
- Optimized image sizes

## Future Enhancements
- Backend integration for form submissions
- CMS for dynamic content management
- Image gallery lightbox
- Project detail pages
- Blog with full articles
- Video embedding for vlogs
- Social media feed integration

## Deployment

### Deploy to Vercel (Recommended)

This website is **ready for Vercel** deployment! Three easy methods:

#### Option 1: Vercel CLI (Fastest)
```bash
npm install -g vercel
cd d:\cafca2
vercel
```

#### Option 2: GitHub + Vercel
1. Push to GitHub
2. Import to Vercel Dashboard
3. Auto-deploy on every push

#### Option 3: Drag & Drop
1. Visit [vercel.com/new](https://vercel.com/new)
2. Drag the `cafca2` folder
3. Click Deploy

**📖 Full Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions, custom domain setup, troubleshooting, and more.

### What's Included
- ✅ `vercel.json` - Optimized configuration
- ✅ `.vercelignore` - Deployment exclusions
- ✅ `package.json` - Project metadata
- ✅ `.gitignore` - Version control setup

**Free hosting** with global CDN, automatic HTTPS, and 100GB bandwidth!

## Credits
**Design & Development**: CAFCA Web Team  
**Typography**: Google Fonts (Cormorant Garamond, Inter)  
**Color Palette**: Inspired by CAFCA logo and natural materials

---

© 2025 CAFCA - Constructive AF Collaborative Architecture. All rights reserved.
