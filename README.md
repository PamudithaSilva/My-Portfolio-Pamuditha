# Pamuditha Silva — Portfolio

A modern, dark-themed developer portfolio built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Built from your CV content (references excluded) with an animated gradient hero, glassmorphism cards, and smooth scroll navigation.

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Add Your Photo

A placeholder image lives at `src/assets/profile.jpg`. Replace it with your real photo, keeping the same filename, or update the import in `src/components/Hero.tsx` if you rename it. A square image (at least 600x600px) works best since it's cropped into a circle.

## Edit Your Content

All resume content (about text, skills, projects, education, certifications, hackathons) lives in one place: `src/data.ts`. Edit that file to update anything on the site without touching the components.

## Project Structure

```
src/
  assets/profile.jpg     -> your photo
  components/            -> Navbar, Hero, About, Skills, Projects, Education, Contact, Footer
  data.ts                -> all resume/portfolio content
  App.tsx                -> page layout
  index.css              -> Tailwind + custom utility classes
```

## Build for Production

```bash
npm run build
npm run preview
```

The production build is generated in the `dist/` folder, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Customize the Theme

Colors and animations are defined in `tailwind.config.js` under `theme.extend`:
- `accent` (violet) and `accent2` (cyan) drive the gradient theme — change these hex values for a different color scheme.
- `gradient-move` and `float` keyframes control the animated backgrounds.

## Notes

- References were intentionally excluded from this portfolio, matching your request.
- Update social links (LinkedIn, GitHub, email) directly in `src/data.ts` under the `profile` object.
