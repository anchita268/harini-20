# 📸 Photos folder

Put every photo for the magazine here, directly inside `public/photos/`.

## How it works

Every photo used on the site is just a file path like `/photos/cover-main.jpg`.
Those paths are listed in **`src/data/content.ts`** — that's the only file
you need to edit to swap photos in or out.

If a file listed in `content.ts` isn't actually in this folder, the website
will show a small labelled "Photo missing" box instead of crashing, so you
always know exactly what still needs to be added.

## File names expected by the starter content

You can rename these to whatever you want — just update the matching path
in `src/data/content.ts` to match. The list below is only a reference for
the placeholder content that ships with the project.

- `cover-main.jpg` — Spread 1, the big cover cutout photo
- `editor-candid.jpg` — Spread 2, small candid photo
- `lore-2010.jpg` ... `lore-2026.jpg` — Spread 3, one per timeline entry
- `diary-01.jpg` ... `diary-08.jpg` — Spread 4, polaroid wall
- `film-01-1.jpg` ... `film-03-4.jpg` — Spread 5, film strip rolls (4 frames × 3 rolls)
- `collage-01.jpg` ... `collage-08.jpg` — Spread 6, layered collage
- `editorial-01.jpg` ... `editorial-06.jpg` — Spread 7, lookbook grid
- `scrap-01.jpg` ... `scrap-06.jpg` — Spread 8, scrapbook strip
- `postcard-01.jpg` ... `postcard-04.jpg` — Spread 12, birthday message postcards (optional)
- `wall-01.jpg` ... `wall-20.jpg` — Spread 13, memory wall grid
- `back-cover.jpg` — Spread 14, final closing photo

## Recommended sizes

- Portrait photos (most polaroids, lookbook): ~1000×1300px
- Landscape photos (film strip frames): ~1300×1000px
- Square photos (memory wall): ~1200×1200px

JPG or PNG both work. Keep file sizes reasonable (under ~500KB each) so the
site loads quickly — most phone photos exported normally are already fine.

## Adding more photos than the starter content

Open `src/data/content.ts`, find the relevant array (e.g. `diaryPolaroids`,
`memoryWall`), and add a new line following the same pattern as the others.
The layouts are all built to handle more or fewer items automatically.
