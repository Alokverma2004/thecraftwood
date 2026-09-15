# TheCraftwood — website

Static, dependency-free site for [@_thecraftwood](https://www.instagram.com/_thecraftwood/): customised engraved wooden portraits and keychains.

## Structure

- `index.html` — the single page (hero, collection, pricing, process, reviews, order builder, FAQ, Instagram, footer)
- `styles.css` — all styles, mobile-first responsive
- `app.js` — gallery data, filters, lightbox, order builder → WhatsApp message, reviews
- `images/` — product photography (real customer pieces)

## Set the WhatsApp number

Open `app.js` and set `CONFIG.WHATSAPP_NUMBER` to the studio number in international format, digits only, e.g. `"919876543210"`.
Until it is set, the "Send order on WhatsApp" button copies the order text and opens Instagram DMs instead.

## Update prices / pieces

- Prices: `CONFIG.PRICES` in `app.js` and the size cards / order form in `index.html`.
- Collection: the `PIECES` array in `app.js`. Add the image to `images/` and a new entry.
- Reviews: the `REVIEWS` array in `app.js`.

## Run locally

Any static server works:

```
npx serve .
```

## Deploy

Hosted on Vercel as a static site. Push to `main` to redeploy, or run `vercel --prod`.
