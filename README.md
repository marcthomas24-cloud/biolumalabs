# biolumalabs.com

The BioLuma Labs studio site. Astro, prerendered to static HTML and served by Cloudflare Workers.
No analytics and no third-party requests: the font is self-hosted and a trailer only loads from
YouTube (the no-cookie domain) after the visitor presses play.

| page | source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/games/<slug>/` | `src/pages/games/[slug].astro`, one page per entry in `src/data/games.ts` |
| `/privacy/` | `src/pages/privacy.astro` |
| `/support/` | `src/pages/support.astro` |

The playable web builds in `public/axolotl-chase/`, `public/capy-boarder/` and
`public/capy-sports-club/` are self-contained and are not part of the Astro site.

## Adding or changing a game

Everything about a game lives in one entry in `src/data/games.ts`: its copy, artwork, trailer,
screenshots and store links. The homepage sections, the catalogue, the trailer row, the game's own
page, the footer links, the sitemap and the search/social metadata are all generated from that list.

1. Add an entry to `GAMES` (copy an existing one). Set `status: "upcoming"` for a game that isn't
   out yet: it gets a preview page with no download buttons.
2. Add its images under `public/`:

   | file | size |
   |---|---|
   | `art/<slug>.webp` | key art, 16:9, 1600px wide or more |
   | `art/<slug>-800.webp` | the same art at 800×450, for cards |
   | `og/<slug>.jpg` | 1200×630 share image |
   | `icons/<slug>.png` | app icon, 256×256 |
   | `shots/<slug>/1.webp` … | screenshots: 1280px wide (landscape) or 720px wide (portrait) |
   | `art/<slug>-trailer.jpg` | trailer thumbnail, 1280×720 (only if there is a trailer) |

3. Store links: paste the listing URL once it is live. Until then leave it as `""` and the site
   says "Coming soon to …" for that store.
4. `featured: 1`, `2`, `3` … puts a game in the Featured section, in that order.

## Where things are

- Studio name, URLs and the contact address: `src/consts.ts`.
- Colours, type and shared styles (buttons, chips, sections): `src/styles/global.css`.
- Components: `src/components/` (`GameCard` for the catalogue, `FeatureCard` for the featured
  section, `PlayPoster` + `MediaViewer` for trailers and the screenshot lightbox, `StoreLinks`).
- `public/og.jpg` is the default 1200×630 share image (social sites don't render SVG).
- The heading font is Fredoka (SIL Open Font License, see `public/fonts/OFL-Fredoka.txt`).

```bash
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run check     # build, type-check and a dry-run deploy
npm run deploy    # wrangler deploy
```

© 2026 Diamond Hands Ltd, trading as BioLuma Labs. All rights reserved.
