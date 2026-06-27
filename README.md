# FoFit — Faroe Islands Fitness Map

An interactive map of gyms and fitness centres across the Faroe Islands, with
prices (including the direct-debit / PBS tier), opening hours, this-week classes,
amenities and contact details.

Built as a **static site** with Leaflet. There's no backend and no build step —
just open the file. It does load three things from CDNs at runtime, so it needs a
network connection to work: **Leaflet** (unpkg), the **Fredoka** font (Google
Fonts), and the **CARTO** map tiles. Offline, or behind a strict blocker, the map
won't render.

## Files

| File | What it is |
|------|------------|
| `index.html` | The whole app — map, brand navigator, detail board, inline compare. |
| `data.js`    | The data. **Edit this to add or update locations.** |
| `README.md`  | This file. |

## Run locally

Open `index.html` in a browser. It loads `data.js` via a normal `<script>` tag, so
it works straight from the file system — no local server needed (but you do need
internet access for the map tiles, font and Leaflet).

## Deploy to GitHub Pages (free)

1. Create a new repo on GitHub, e.g. `fofit`.
2. Add the files to the repo root and push:
   ```bash
   git init
   git add index.html data.js README.md
   git commit -m "FoFit"
   git branch -M main
   git remote add origin https://github.com/<you>/fofit.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment**.
   Set **Source = Deploy from a branch**, **Branch = `main` / `root`**, Save.
4. Your map goes live at `https://<you>.github.io/fofit/` within a minute.

To update later, edit `data.js` and `git push`; Pages redeploys automatically.

## How it works (features)

- **Full-screen map** (Leaflet + CARTO Voyager tiles). Coarse zoom — roughly two
  scroll steps between the all-islands view and street level.
- **Left brand navigator** — locations are grouped by brand (Burn, Vælvera, etc.).
  Click a brand to filter/frame it; the panel collapses to a slim strip of dots.
- **Detail board** (right) — monthly price, full price tiers, today-highlighted
  opening hours, this-week classes, amenities, and one-tap directions. Multi-site
  brands (Burn, Vælvera) get **location tabs** in the board.
- **Inline compare** — the **Compare ⚖** button in a gym's header opens it as a
  panel; add up to 3 brands side by side (via the left nav or the map) to compare
  price and hours. `Esc` or an empty-map click closes it.
- **Per-brand colours** for pins and dots.

There is intentionally **no search box** and no amenity filter — with ~a dozen
locations the brand navigator covers it. (If the dataset grows, a search box is an
easy add.)

## Editing the data

Each location is one object in the `GYMS` array in `data.js`:

```js
{
  id: "burn-torshavn",              // unique slug
  name: "Burn — Tórshavn",          // "Brand — Location"; text before " — " is the brand
  type: "Gym & fitness centre",
  town: "Tórshavn", island: "Streymoy",
  coords: [62.010764, -6.772841],   // [lat, lng] — geocoded from the address
  address: "Niels Finsensgøta 8, FO-100 Tórshavn",
  phone: "+298 299900", email: "burn@burn.fo",
  website: "https://burn.fo", facebook: "https://www.facebook.com/burn.fo",
  photo: "",                        // optional image URL
  priceMonthly: "From 269 kr/mo · direct debit",   // headline shown on pin/board
  prices: [ { label: "Direct debit (PBS) · all-day 06–22", value: "369 kr/mo" } ],
  hours: { Mon:"05:00–00:00", /* … */ note:"" },
  classes: ["Spinning","Yoga","Zumba"],            // this-week class types (optional)
  amenities: ["Classes","Sauna","Jacuzzi"],
  notes: "…",
  verified: true                    // false shows a "please confirm" banner
}
```

Notes:
- **Brand grouping is automatic** from the part of `name` before `" — "`. Locations
  that share a brand collapse into one navigator entry with location tabs.
- Leave a field as `""` / `[]` / `null` to hide it.
- `coords` are geocoded from the street address via OpenStreetMap. If you change an
  address, re-geocode it (right-click a spot in Google Maps → copy `lat,lng`).

## Data status

11 locations across 7 brands, all `verified: true` (details taken from each gym's
official site as of June 2026):

| Brand | Locations |
|-------|-----------|
| Burn | Tórshavn · Vestmanna · Streymnes (Margáir) |
| Burn Klassik | Berjabrekka (Tórshavn) — course-based |
| Yndi Fitness | Tórshavn |
| Vælvera Fitness | Tórshavn · Saltangará (Runavík) · Miðvágur |
| Tvørmegi CrossFit | Tórshavn |
| Íðka | Klaksvík |
| Outdoor Fitness & Playground | Tórshavn — free, public |

Two known soft spots: **Íðka/Vælvera class lists** are each gym's standing weekly
roster (their exact week-by-week times are posted on Facebook), whereas **Burn's**
is the live weekly grid. And a possible **Vágur** Vælvera branch is left out until
it can be confirmed.

## Ideas for later

- Swimming pools, sport halls/pitches and outdoor spots (add a `category` field).
- Real photos per gym (the `photo` field already supports it).
- A "suggest an edit" link → Google Form for local corrections. **If you ever let
  users submit data, render it safely** — the app already HTML-escapes all text
  fields (`esc()` in `index.html`), so keep that in place.
