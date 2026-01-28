# carbootsale.com

A modern, clean directory for car boot sales across the UK.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 19**

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles + Tailwind
├── components/            # React components
│   ├── ComingSoonHero.tsx # Hero section with logo
│   ├── TeaserGrid.tsx     # Feature grid
│   └── Footer.tsx         # Footer
├── lib/                   # Utilities and constants
│   └── brand.ts           # Brand constants and copy
├── public/                # Static assets
│   ├── brand/             # Logos
│   └── icons/             # UI icons
└── design/                # Source design files (not deployed)
```

## Deployment

This project is optimized for [Vercel](https://vercel.com):

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

## Performance

- Uses `next/image` for optimized images
- Respects `prefers-reduced-motion`
- Mobile-first responsive design
- Minimal JavaScript bundle
- Fast page loads

## License

© 2026 carbootsale.com
