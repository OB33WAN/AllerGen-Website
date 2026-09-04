# AllerGen website — plain HTML, CSS and JavaScript

- `index.html`: landing page, features and Google Play download links.
- `privacy.html`: privacy-policy draft for the rebuilt Android app.
- `privacy/index.html`: compatibility redirect for `/privacy/` links.
- `404.html`: custom not-found page for the final domain.
- `styles.css`: responsive green/mint design, keyboard focus and reduced-motion support.
- `script.js`: optional back-to-top enhancement. Reading, navigation and downloads also work with JavaScript disabled.
- `assets/`: local images and favicon. No external font requests or analytics.
- `CNAME`: already contains `allergen.octopye.com`.
- `.nojekyll`: tells GitHub Pages to serve the static files directly.

Open `index.html` to preview locally. The intended production URLs are:

- https://allergen.octopye.com/
- https://allergen.octopye.com/privacy.html
- https://play.google.com/store/apps/details?id=com.allergen

## Before launch

This website is intended to launch with the rebuilt AllerGen 2.0 app, not to replace the older app's privacy notice prematurely. The privacy page deliberately remains labelled as a release draft. Confirm the remaining lawful-basis, health-data, support/billing retention and transfer arrangements with an appropriate reviewer, then replace the review notes with the verified information.

The user confirmed the legal operator as BIZZYOPS LTD trading as Octopye Digital Designs and the support address as designs@octopye.com. The postal address was taken from the public Google Play developer listing; confirm it remains the correct privacy contact address.

The privacy draft was checked against the rebuilt app source and provider documentation, not a full data-flow audit of the signed production app. Do not treat it as a legal-compliance certification. If hosting changes from GitHub Pages, update the hosting section.

No fixed premium price is advertised. The in-app checkout must display the actual local Google Play price.
