# Spiral Up Digital Website

A modern, high-performance marketing website for Spiral Up Digital - an AI-focused digital agency specializing in videos, ads, and web development.

*Website successfully built and deployed with Next.js 16 and Tailwind CSS v4*

## Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Fonts**: Geist Sans, Geist Mono, Newsreader

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
/app                    # Next.js App Router
  /layout.tsx          # Root layout with fonts and metadata
  /page.tsx            # Homepage
/components
  /sections            # Page sections (Hero, Services, Portfolio, CTA)
  Navigation.tsx       # Header navigation
  Footer.tsx           # Footer component
/styles
  globals.css          # Global styles and CSS variables
/lib                   # Utility functions
/public                # Static assets
```

## Pages

- **Home** (/) - Landing page with hero, services, portfolio, and CTA sections

## Design System

### Colors

- **Background**: Black (#000000)
- **Foreground**: White (#ffffff)
- **Accent**: Red (#ff0000)
- **Accent Dark**: Dark Red (#cc0000)

### Fonts

- **Sans**: Geist Sans (UI)
- **Mono**: Geist Mono (Code)
- **Serif**: Newsreader (Headings)

## Components

### Sections

- **Hero**: Main landing section with animated background
- **Services**: Grid of service offerings
- **Portfolio**: Featured projects showcase
- **CTA**: Call-to-action section

### Layout Components

- **Navigation**: Responsive header with mobile menu
- **Footer**: Company info, links, newsletter signup

## Animation

- GSAP for scroll-triggered animations
- Framer Motion for component animations
- Smooth scroll behavior throughout

## Performance

- Image optimization with Next.js Image
- Lazy loading for sections
- Optimized CSS and font loading
- Fast page transitions

## Contributing

Follow these guidelines:

1. Use TypeScript for type safety
2. Follow the existing component structure
3. Use Tailwind CSS utilities for styling
4. Add animations with Framer Motion or GSAP
5. Keep components focused and reusable

## License

Proprietary - Spiral Up Digital

## Contact

hello@spiralupdigital.com
