# Vaccination Plans in Saudi Arabia — Educational Virology & National Immunization Site

This project delivers a mobile-first, accessible educational website covering viruses and Saudi Arabia’s vaccination plans, COVID-19 campaign, Hajj & Umrah policies, research & digital transformation, and data visuals. All facts and numbers are strictly from the supplied document.

## What’s included
- Static React site (Vite) with multiple sections and print-friendly pages
- Charts with static SVG fallbacks
- Downloads: CSV (numeric stats), PDF site summary, schedule/checklist PDFs
- Accessibility statement and sources panel

## Develop locally
```
npm install
npm run dev
```

## Build for static hosting
```
npm run build
```
The output `dist/` can be hosted on any static host.

## Update stats
- Edit `public/assets/data/stats.csv` and `public/assets/data/schedule.csv`.
- Replace schedule table rows with the exact schedule text from the supplied document if needed.
- PDFs in `public/assets/` can be regenerated with any PDF tool and replaced in place.

## SEO & metadata
- Titles, meta descriptions, Open Graph tags, and JSON-LD are included in `public/index.html`.

## Sources
All content and numbers are from the supplied document: "Vaccination Plans in the Kingdom of Saudi Arabia".
