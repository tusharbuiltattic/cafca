# CAFCA Website - Vercel Deployment Guide

This guide will help you deploy the CAFCA website to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup) (free tier is sufficient)
2. [Git](https://git-scm.com/) installed on your computer
3. The CAFCA website files (this repository)

## Deployment Methods

### Method 1: Deploy via Vercel CLI (Recommended)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate.

#### Step 3: Deploy
Navigate to your project directory and run:
```bash
cd d:\cafca2
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **What's your project's name?** → cafca-website (or your preferred name)
- **In which directory is your code located?** → ./ (root)

#### Step 4: Production Deployment
Once the preview deployment succeeds, deploy to production:
```bash
vercel --prod
```

Your website will be live at: `https://cafca-website.vercel.app`

---

### Method 2: Deploy via GitHub + Vercel Dashboard

#### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `cafca-website`)
3. **Don't** initialize with README (you already have one)

#### Step 2: Push Your Code to GitHub
```bash
cd d:\cafca2

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: CAFCA website"

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/yourusername/cafca-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Import to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: Leave empty
   - **Output Directory**: ./
6. Click **"Deploy"**

Your website will be live in ~30 seconds!

---

### Method 3: Deploy via Drag & Drop (Quickest)

#### Step 1: Prepare Files
1. Open File Explorer
2. Navigate to `d:\cafca2`
3. Select all files **EXCEPT**:
   - `generate-images.html`
   - `generate_images.py`
   - `.git` folder (if present)

#### Step 2: Deploy
1. Go to [Vercel Deploy](https://vercel.com/new)
2. Click **"Deploy"** under **"Deploy from a Git Repository"** or select **"Browse"**
3. Drag and drop your selected files
4. Click **"Deploy"**

Done! Your site will be live instantly.

---

## Custom Domain Setup

### Add a Custom Domain

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on **"Settings"** → **"Domains"**
3. Enter your domain (e.g., `cafca.studio` or `www.cafca.studio`)
4. Follow Vercel's DNS configuration instructions
5. Update your domain registrar's DNS settings:
   - **A Record**: Point to Vercel's IP
   - **CNAME**: Point `www` to `cname.vercel-dns.com`

### Recommended Domain Names
- `cafca.studio`
- `cafca.design`
- `cafca.works`
- `constructiveaf.design`

---

## Environment & Configuration

### Files Included for Vercel
- ✅ `vercel.json` - Vercel configuration with caching and routing
- ✅ `.vercelignore` - Files to exclude from deployment
- ✅ `package.json` - Project metadata

### Performance Optimizations
The website includes:
- **Optimized Caching**: Static assets cached for 1 year
- **HTML Revalidation**: Always serve fresh HTML
- **Image Optimization**: Vercel automatically optimizes images
- **Global CDN**: Served from 100+ edge locations worldwide
- **Automatic HTTPS**: Free SSL certificate included

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Website loads at Vercel URL
- [ ] All images display correctly
- [ ] Navigation works smoothly
- [ ] Project filtering functions
- [ ] Contact form validates (visual feedback works)
- [ ] Banter submission works
- [ ] Mobile responsive design works
- [ ] All sections scroll properly
- [ ] Custom cursor appears
- [ ] Animations trigger on scroll

---

## Updating Your Website

### Via Vercel CLI
```bash
cd d:\cafca2
# Make your changes
vercel --prod
```

### Via GitHub
```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push
```
Vercel will automatically deploy changes!

---

## Monitoring & Analytics

### Enable Vercel Analytics
1. Go to your project settings
2. Navigate to **"Analytics"** tab
3. Click **"Enable"**
4. Free tier includes:
   - Page views
   - Top pages
   - Top referrers
   - Devices & browsers

### Enable Web Vitals
Monitor performance metrics:
1. Go to **"Speed Insights"**
2. Click **"Enable"**
3. Track Core Web Vitals (LCP, FID, CLS)

---

## Troubleshooting

### Issue: Images not loading
**Solution**: Ensure all image paths are relative (not absolute)
- ✅ Correct: `src="logo.png"`
- ❌ Wrong: `src="/d:/cafca2/logo.png"`

### Issue: Custom cursor not working
**Solution**: Check browser compatibility. Custom cursor works on:
- Chrome/Edge (✅)
- Firefox (✅)
- Safari (✅)

### Issue: 404 on page refresh
**Solution**: Already handled by `vercel.json` rewrites configuration

### Issue: Slow loading
**Solution**: 
1. Enable Vercel Image Optimization
2. Check image file sizes (compress if >500KB)
3. Enable caching (already configured)

---

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Vercel Community](https://github.com/vercel/community)

---

## Cost

**Free Tier Includes:**
- ✅ 100GB bandwidth/month
- ✅ Unlimited projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Serverless functions (if needed later)

Your static CAFCA website will run **100% free** on Vercel!

---

## Security

Vercel provides:
- ✅ **Automatic DDoS protection**
- ✅ **Free SSL/TLS certificates**
- ✅ **Edge network security**
- ✅ **GDPR compliance**

---

**Your CAFCA website is now production-ready for Vercel! 🚀**

For questions, refer to the main README.md or contact the development team.
