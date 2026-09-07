# Moaz Mohamed — Portfolio

A one-page, responsive portfolio site built with plain HTML, CSS, and vanilla JavaScript — no build step, no frameworks, no dependencies. Ready to run locally or deploy straight to GitHub Pages.

## Files

```
index.html    All page content and structure
styles.css    All styling (design tokens are at the top of the file)
script.js     Sticky header, mobile menu, scroll-spy, back-to-top
README.md     This file
```

The two project visuals (CineMax and the Subnet Calculator dashboard) are hand-built inline SVG inside `index.html` — no image files are used anywhere on the site, so there's nothing external to break.

## Running it locally

You can just open `index.html` directly in a browser — every asset is either inline or loaded from Google Fonts over HTTPS, so no local server is required.

If you'd rather serve it (closer to how it'll behave on GitHub Pages), from inside the project folder run one of:

```bash
python3 -m http.server 8000
# or, if you have Node installed:
npx serve
```

Then open `http://localhost:8000` (or whatever port it prints).

## Editing your contact details

Your email, phone, LinkedIn, and GitHub links appear in **two places** in `index.html` — the closing "Contact" section and the footer. Search the file for `moazalbably6@gmail.com` and you'll land on both spots. Update:

- The email `mailto:` link and visible text
- The phone `tel:` link (currently `tel:+201554732226`, formatted with the `+20` Egypt country code so it dials correctly from any phone, while still displaying as `01554732226`) and visible text
- The LinkedIn and GitHub `href` values and visible text

Everything else on the page — headline, About text, project copy, skills, services — is plain text directly in `index.html`. There's no config file or CMS; just find the text and edit it in place.

## Adding real project screenshots

Right now, both featured projects use an original SVG mockup instead of a screenshot (drawn directly in `index.html`, styled from `styles.css`) — a seat-map illustration for CineMax and a small dashboard diagram for the Subnet Calculator. To swap one in for a real screenshot:

1. Create an `assets/` folder next to `index.html` and add your image there (e.g. `assets/cinemax-screenshot.png`).
2. In `index.html`, find the project's `<div class="project-visual">` block and replace the `<svg>...</svg>` inside it with:
   ```html
   <img src="assets/cinemax-screenshot.png" alt="Screenshot of the CineMax booking interface">
   ```
3. The surrounding `.project-visual` panel already handles spacing and the border — no CSS changes needed. For best results, use a screenshot with roughly a 16:10 aspect ratio to match the current mockup's proportions.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/Moaz-Mohamed1/YOUR-REPO-NAME.git
   git push -u origin main
   ```
2. On GitHub, go to your repository's **Settings → Pages**.
3. Under "Build and deployment," set **Source** to "Deploy from a branch," choose the **main** branch and the **/ (root)** folder, then save.
4. GitHub will publish the site at `https://Moaz-Mohamed1.github.io/YOUR-REPO-NAME/` within a minute or two. If you name the repository `Moaz-Mohamed1.github.io` exactly, it will instead be published at the root of `https://Moaz-Mohamed1.github.io/`.

No further configuration is needed — the site has no build process and all paths are relative.

## Notes

- Fonts (IBM Plex Sans and IBM Plex Mono) load from Google Fonts over a CDN link in `index.html`. If you ever need a fully offline copy, you'll want to self-host those two font files instead.
- The layout is responsive from small phones up through wide desktops; the main breakpoints are defined in `styles.css` at 640px, 800px, 900px, and 1080px (navigation).
- This code is free to use as a learning reference. The personal content — name, resume details, and project descriptions — belongs to Moaz Mohamed.
