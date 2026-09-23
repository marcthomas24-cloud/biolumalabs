# biolumalabs.com

The Bioluma Labs studio site. Astro, prerendered to static HTML and served by Cloudflare Workers.
It has no client-side JavaScript, no web fonts and no third-party requests.

| page | source |
|---|---|
| `/` | `src/pages/index.astro` |
| `/privacy/` | `src/pages/privacy.astro` |
| `/support/` | `src/pages/support.astro` |

Studio name, URLs and the contact address are in `src/consts.ts`. The palette is in the `:root` block
of `src/styles/global.css`.

```bash
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run deploy    # wrangler deploy
```

`public/og.jpg` is the 1200×630 share image (social sites don't render SVG).

© 2026 Diamond Hands Ltd, trading as Bioluma Labs. All rights reserved.
