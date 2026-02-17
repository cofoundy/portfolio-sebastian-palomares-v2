# Playful Doodles Template - Customization Guide

This template features a playful, colorful design with animated doodles and a hand-drawn aesthetic. It's perfect for **developers, designers, and creative professionals** who want to showcase their personality alongside their work.

## Who Should Use This Template

**Ideal for:**
- Developers / Software Engineers
- UI/UX Designers
- Creative Technologists
- Digital Artists
- Tech-focused content creators

**Not recommended for:**
- Corporate/traditional professionals (lawyers, accountants)
- Non-tech marketers or BTL professionals
- Academic/research portfolios
- Minimalist personal brands

If you need something more professional/minimal, consider:
- `minimalista/minimal-mono`
- `minimalista/clean-magic`

---

## Quick Start Checklist

When customizing this template for a new client, update these files:

- [ ] `pages/_document.tsx` - Language code
- [ ] `components/home/Hero.tsx` - Name, headline, doodle text
- [ ] `components/utility/Page.tsx` - Name, title, site URL
- [ ] `components/global/Footer.tsx` - Attribution name (auto-updates year)
- [ ] `components/projects/More.tsx` - Social link
- [ ] `components/designs/More.tsx` - Social link
- [ ] `components/home/Testimonials.tsx` - Section title
- [ ] `components/home/CTA.tsx` - Contact email
- [ ] `data/global.ts` - Social links, support info
- [ ] `data/content/home.ts` - About text, testimonials
- [ ] `data/content/projects.ts` - Project list
- [ ] `data/content/designs.ts` - Design work list
- [ ] `public/static/profile.jpg` - Profile photo
- [ ] `public/static/favicon/` - Favicons
- [ ] `next.config.js` - basePath (for GitHub Pages subdirectory)

---

## File-by-File Customization

### 1. `pages/_document.tsx`

Update the language code:
```tsx
<Html lang="es">  // Change to "en", "pt", etc.
```

The Google Font "Gloria Hallelujah" is already included for doodle text.

---

### 2. `components/home/Hero.tsx`

This is the main hero section. Key areas to customize:

#### Profile Photo (optional)
Uncomment and update the image path:
```tsx
<img
  src="/static/profile.jpg"
  alt="Tu Nombre"
  className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-fun-pink shadow-lg"
/>
```

#### Greeting
```tsx
<p className="text-xl mb-5">Hola, soy Tu Nombre.</p>
```

#### Headline
```tsx
Disfruto <span className="heroShiny1 text-fun-pink">creando</span> y{" "}
<span className="heroShiny2 text-fun-pink">diseñando</span> para la web.
```

#### Doodle Text (IMPORTANT!)

The template uses inline SVG text instead of external SVG files. This allows easy customization without editing SVG files.

**Main keyword doodle (right side):**
```tsx
<svg className="sqD bottom-[-300px]..." viewBox="0 0 300 80">
  <text x="50%" y="55" textAnchor="middle" style={{...}}>
    CÓDIGO  <!-- CHANGE THIS -->
  </text>
</svg>
```

**Secondary keyword doodle (left side):**
```tsx
<svg className="sqD hidden sm:block bottom-[-340px]..." viewBox="0 0 150 70">
  <text x="50%" y="50" textAnchor="middle" style={{...}}>
    CREAR  <!-- CHANGE THIS -->
  </text>
</svg>
```

**Keyword suggestions by profession:**

| Profession | Keyword 1 | Keyword 2 |
|------------|-----------|-----------|
| Developer | CODE | BUILD |
| Designer | CREATE | DESIGN |
| Marketing | BRAND | GROW |
| Data Science | DATA | ANALYZE |
| DevOps | DEPLOY | SCALE |
| Mobile Dev | APPS | MOBILE |

**Customizing doodle style:**
```tsx
style={{
  fontFamily: "'Gloria Hallelujah', cursive",
  fontSize: "52px",        // Adjust size
  fill: "none",
  stroke: "#00c7ff",       // Change color
  strokeWidth: 2,          // Thicker/thinner outline
  opacity: 0.5,            // More/less visible
}}
```

**If text is cut off:**
Adjust the `viewBox` width:
- Short word (3-4 chars): `viewBox="0 0 150 70"`
- Medium word (5-6 chars): `viewBox="0 0 200 80"`
- Long word (7+ chars): `viewBox="0 0 300 80"`

---

### 3. `components/utility/Page.tsx`

Update SEO metadata:

```tsx
const pageTitle = `${
  currentPage === "Home"
    ? "Tu Nombre - Tu Título Profesional"
    : `${currentPage} - Tu Nombre`
}`;

const siteUrl = "https://cofoundy.github.io/portfolio-nombre/";
const ogImage = `${siteUrl}static/misc/og.png`;
```

---

### 4. `components/global/Footer.tsx`

The footer copyright auto-updates the year. Just change the name:
```tsx
© {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
```

---

### 5. `components/projects/More.tsx` & `components/designs/More.tsx`

Update the "see more" links:
```tsx
<a href="https://linkedin.com/in/tu-perfil" target="_blank">
  Conectemos en LinkedIn
</a>
```

Options:
- LinkedIn (general professional)
- GitHub (developers)
- Dribbble/Behance (designers)
- Portfolio URL (if they have one)

---

### 6. `data/global.ts`

Update navigation and social links:

```typescript
export const footer: Footer = {
  columns: [
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/tu-usuario",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        // Add/remove social links as needed
      ],
    },
  ],
  support: {
    buymeacoffee: "",  // Set to "" to hide
    paypal: "",        // Set to "" to hide
    message: "¡Gracias!",
  },
};
```

---

### 7. `data/content/home.ts`

Update the about section and testimonials:

```typescript
export const about = {
  title: "Un poco sobre mí",
  content: "Tu descripción personal aquí..."
};

export const testimonials = [
  {
    name: "Nombre Persona",
    job: "Cargo, Empresa",
    quote: "Lo que dijeron sobre tu trabajo..."
  },
  // Add more testimonials
];
```

---

### 8. `data/content/projects.ts` & `data/content/designs.ts`

Add your work:

```typescript
export const projects = [
  {
    title: "Nombre del Proyecto",
    description: "Breve descripción...",
    link: "https://proyecto.com",
    github: "https://github.com/user/repo",
    image: "/static/projects/proyecto.png",
    tags: ["React", "Node.js", "TypeScript"],
  },
];
```

---

## Deployment Notes

### GitHub Pages (subdirectory)

In `next.config.js`:
```javascript
module.exports = {
  output: 'export',
  basePath: '/portfolio-nombre',
  assetPrefix: '/portfolio-nombre/',
  images: { unoptimized: true },
};
```

### Custom Domain

Remove basePath:
```javascript
module.exports = {
  output: 'export',
  images: { unoptimized: true },
};
```

### .nojekyll

**CRITICAL:** Always include `.nojekyll` file in `out/` before deploying to GitHub Pages:
```bash
touch out/.nojekyll
npx gh-pages -d out --dotfiles
```

Without this, GitHub's Jekyll processing will ignore `_astro/` and `_next/` folders.

---

## Removing Tech Doodles

If your client is NOT a developer, you may want to remove the tech-themed doodles:

1. In `Hero.tsx`, remove or comment out:
   - `html.svg`
   - `nextjs.svg`
   - `js.svg`
   - `code.svg`

2. Keep the generic doodles:
   - `dino.svg` (fun dinosaur)
   - `paintbrush.svg` (creative)
   - `pop1.svg` (decorative)

3. The text-based doodles (CÓDIGO/CREAR) can be customized to any word.

---

## Color Customization

Main colors are in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'fun-pink': '#ff4081',      // Primary accent
      'fun-pink-dark': '#c60055',
      'fun-pink-darker': '#1a0011',
      'fun-pink-light': '#ff79b0',
      'fun-gray': '#a0a0a0',
      'fun-gray-light': '#d0d0d0',
      'fun-white': '#ffffff',
      'bg': '#0a0a0a',
    },
  },
},
```

---

## Troubleshooting

### CSS not loading on GitHub Pages
1. Check `basePath` matches your repo name
2. Ensure `.nojekyll` file exists
3. Wait 2-3 minutes for CDN propagation

### Doodle text cut off
- Increase `viewBox` width
- Reduce `fontSize` in style

### Images not loading
- Use absolute paths with basePath: `${process.env.BASE_PATH}/static/image.png`
- Or use relative imports: `import img from '../assets/image.png'`

---

## Original Attribution

This template is based on [braydentw.io](https://github.com/braydentw/braydentw.io) by Brayden Wright, adapted and customized by Cofoundy.
