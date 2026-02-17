# Playful Doodles Portfolio Template

A colorful, animated portfolio template with hand-drawn doodles and playful aesthetics.

## Ideal For

- Developers / Software Engineers
- UI/UX Designers
- Creative Technologists
- Digital Artists
- Tech-focused content creators

## Not Recommended For

- Corporate/traditional professionals
- Non-tech marketers
- Academic portfolios
- Minimalist personal brands

**Alternative templates:** `minimalista/minimal-mono`, `minimalista/clean-magic`

## Tech Stack

- **React** + **Next.js** (Static Export)
- **TailwindCSS** for styling
- **Gloria Hallelujah** Google Font for doodle text

## Getting Started

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# The static site will be in the `out/` folder
```

## Customization

See **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** for a complete guide on personalizing this template.

### Quick Reference

| What to change | File |
|----------------|------|
| Name & headline | `components/home/Hero.tsx` |
| Doodle keywords | `components/home/Hero.tsx` |
| Social links | `data/global.ts` |
| Projects | `data/content/projects.ts` |
| SEO & OG tags | `components/utility/Page.tsx` |
| Footer attribution | `components/global/Footer.tsx` |

## Deployment

### GitHub Pages

```bash
# Build and deploy
npm run build
touch out/.nojekyll  # CRITICAL: Required for _next folder
npx gh-pages -d out --dotfiles
```

In `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  basePath: '/repo-name',
  assetPrefix: '/repo-name/',
  images: { unoptimized: true },
};
```

## Original Attribution

This template is based on [braydentw.io](https://github.com/braydentw/braydentw.io) by **Brayden Wright**.

The original design and concept are his creation. This version has been adapted with:
- Customizable inline SVG text doodles (replacing name-specific SVGs)
- Placeholder content for easy personalization
- Spanish language default
- Detailed customization documentation

Thank you Brayden for the inspiration!

---

*Adapted by Cofoundy for the Pollada portfolio generation system.*
