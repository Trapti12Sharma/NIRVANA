# Nirvana by Raaya

Static React + Vite + Tailwind site. `npm run dev` / `npm run build` / `npm run preview`.

## Edit before launch
- `src/data/siteConfig.js` — WhatsApp number, phone, email, address, hours, Google Maps link, social links (all placeholders).
- `src/data/products.js` — sample products and illustrative prices.
- `src/data/images.js` — Unsplash photo IDs. Download and host locally in `public/images` for production.
- `src/components/Testimonials.jsx` — add verified testimonials to the array.
- `src/pages/Legal.jsx` — replace Privacy/Terms placeholder text.

## Forms
No backend. Enquiry forms validate, then open WhatsApp with a prefilled message. Nothing is stored or emailed.

## Hosting
Uses BrowserRouter: configure your host to rewrite unknown paths to `index.html`.
# NIRVANA
