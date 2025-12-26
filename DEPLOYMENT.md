# Deployment Guide

## Step 1: Push to GitHub

1. Go to https://github.com/new
2. Create a new repository named `portfolio` (or any name you prefer)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

Then run these commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 2: Deploy to Vercel (Recommended for Next.js)

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your `portfolio` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Your site will be live at: `https://your-portfolio.vercel.app`

## Alternative: Deploy to Netlify

1. Go to https://app.netlify.com
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Environment Variables

No environment variables needed for this project currently.

## Custom Domain (Optional)

After deployment, you can add a custom domain in your hosting platform's settings.

