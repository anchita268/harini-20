# HARINI — The Twenty Issue 🎂

A collectible digital birthday "magazine" built for a 20th birthday — part luxury
editorial spread, part scrapbook, part Y2K mood board. Built with Next.js, React,
Tailwind CSS, and Framer Motion. Fully static, fully responsive, deploys straight
to Vercel.

## ✨ What's inside

14 "spreads" (magazine pages), scrollable top to bottom:

1. **Cover** — full-screen masthead, big cutout photo, fake headlines
2. **Editor's Letter** — magazine-style letter with a handwritten note
3. **The Lore** — friendship timeline
4. **Photo Diary I** — polaroid wall
5. **Photo Diary II** — film strip rolls
6. **Photo Diary III** — layered collage
7. **Photo Diary IV** — fashion-style "lookbook" grid
8. **Photo Diary V** — freeform scrapbook strip
9. **20 Things We Love About Harini**
10. **The Harini Awards**
11. **Friendship Interview** — magazine Q&A
12. **Birthday Messages** — postcards from friends
13. **Memory Wall** — large scrapbook collage
14. **Back Cover** — closing photo and message

A fixed "Contents" tab on the right edge lets you jump straight to any spread,
and a thin progress bar across the top fills in as you scroll — like flipping
through a real magazine.

## 🚀 Running it locally

You'll need [Node.js](https://nodejs.org/) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## ✏️ How to customize everything (start here!)

**You only need to edit one file for almost everything: `src/data/content.ts`.**

That file is split into clearly commented sections, one per spread — headlines,
timeline entries, captions, the "20 things" list, awards, interview answers,
birthday messages, and all photo file paths. Open it, find the section for the
spread you want to change, and edit the text directly. Arrays (like the
timeline, the polaroid list, or the memory wall) can have items added or
removed freely — the page layouts adjust automatically.

### Adding your own photos

1. Put your image files into `public/photos/`.
2. In `src/data/content.ts`, point the relevant `src` (or photo) field at your
   file, e.g. `"/photos/my-photo.jpg"`.
3. That's it — no other code needs to change.

If a photo file is missing, the site shows a small clearly labelled
"Photo missing" box with the expected file path instead of breaking, so you
always know exactly what's left to add. See `public/photos/README.md` for
the full list of expected file names and recommended image sizes.

### Changing colors or fonts

Open `tailwind.config.js` — the named colors (`paper`, `ink`, `rouge`, `moss`,
`dust`, `gold`, `denim`, `cream`, `denim`) are used throughout the site. Change
a hex value there and it updates everywhere that color is used.

Fonts are loaded in `src/app/layout.tsx` via `next/font/google`. Swap the
Google Font names there if you want a different headline/body/handwriting
typeface (current pairing: Playfair Display for headlines, Space Grotesk for
body text, Caveat for handwritten notes, Space Mono for the magazine "folio"
labels).

### Reordering or removing spreads

Open `src/app/page.tsx` — each spread is a single component listed in order.
Move lines around to reorder spreads, or delete a line (and its import) to
remove a spread entirely.

## 📦 Deploying to Vercel

The fastest way:

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave all settings as default (Next.js is auto-detected) and click **Deploy**.

Or, using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

No environment variables or special configuration are required — this is a
fully static content site.

## 🛠️ Project structure

```
src/
  app/
    layout.tsx        — fonts + global HTML shell
    page.tsx           — assembles all 14 spreads in order
    globals.css         — paper grain, tape, polaroid, film-strip styles
  components/
    Folio.tsx            — the recurring magazine page-number footer
    Polaroid.tsx          — reusable polaroid photo frame
    Photo.tsx              — base image component with missing-photo fallback
    Reveal.tsx               — scroll-triggered fade/slide animation wrapper
    SectionLabel.tsx          — small editorial "eyebrow" tag
    ProgressSpine.tsx          — top progress bar + slide-out contents menu
    spreads/                    — one component per magazine spread
  data/
    content.ts                   — ⭐ all editable text + photo paths live here
public/
  photos/                          — put your photo files here
  textures/                          — paper grain SVG texture
```

## 🎨 Design notes

- **70% editorial magazine / 20% scrapbook / 10% Y2K**, per the original brief.
- Palette: warm paper cream, near-black ink, an editorial red ("rouge"), plus
  moss, dust-rose, gold, and denim as scrapbook tape/accent colors.
- Typography: Playfair Display (headlines) + Space Grotesk (body) +
  Caveat (handwritten annotations) + Space Mono (magazine folio labels).
- Motion is scroll-triggered and restrained — entrances, a light parallax on
  the cover and back cover, and hover lifts on photos — and respects
  `prefers-reduced-motion`.

Happy 20th, Harini. 🎉
