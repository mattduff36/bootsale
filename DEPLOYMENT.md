# Deployment Guide

## Quick Deploy to Vercel

This project is ready to deploy to Vercel with zero configuration.

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js
- Install dependencies
- Build the project
- Deploy to production

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

## Local Development

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Available Commands

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Run production build locally
npm run lint     # Run ESLint
```

## Environment Setup (Optional)

If you need environment variables in the future, create `.env.local`:

```env
# Example future variables
NEXT_PUBLIC_API_URL=https://api.carbootsale.com
```

## Build Verification

To verify the build works locally before deploying:

```bash
npm run build
npm start
```

The site should be accessible at [http://localhost:3000](http://localhost:3000)

## Domain Configuration

After deploying to Vercel:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add `carbootsale.com` and `www.carbootsale.com`
4. Follow Vercel's DNS configuration instructions

## Performance Checklist

✅ Next.js 15 with App Router  
✅ Optimized images with `next/image`  
✅ Tailwind CSS for minimal bundle size  
✅ No heavy animation libraries  
✅ Respects `prefers-reduced-motion`  
✅ Mobile-first responsive design  
✅ Fast page loads (<1s FCP)  
✅ Proper metadata and SEO tags  
✅ Modern font loading with `next/font`  

## Troubleshooting

### Build fails on Vercel

Check the build logs in Vercel dashboard. Common issues:
- Missing dependencies: Ensure `package.json` is committed
- TypeScript errors: Run `npm run build` locally first

### Images not loading

- Verify images exist in `public/` directory
- Check file paths are correct (case-sensitive)
- Ensure `next.config.ts` has proper image configuration

## Support

For Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)  
For Vercel deployment help: [vercel.com/docs](https://vercel.com/docs)
