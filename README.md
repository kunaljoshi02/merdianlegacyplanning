# Meridian Wealth Planning — Website

A static one‑page website (HTML/CSS/JS). No build step required.

## Files
- `index.html` — page content
- `styles.css` — styling
- `script.js` — tabs, mobile menu, form handling
- `headshot.png` — About photo
- `.nojekyll` — tells GitHub Pages to serve files as‑is

## Deploy to GitHub Pages

### Option A — Upload via the GitHub website (no tools needed)
1. Go to https://github.com/new and create a repository.
   - For a site at `https://<your-username>.github.io/`, name the repo **`<your-username>.github.io`**.
   - Or use any name (e.g. `website`) for a URL like `https://<your-username>.github.io/website/`.
   - Set it to **Public**.
2. On the new repo page, click **uploading an existing file**.
3. Drag in ALL files from this folder (including `.nojekyll`). Commit.
4. Go to **Settings → Pages**. Under **Build and deployment → Source**, choose **Deploy from a branch**, select branch **main** and folder **/ (root)**. Save.
5. Wait ~1 minute, then visit the URL shown on the Pages settings screen.

### Option B — Push with Git
```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```
Then enable Pages as in Option A, step 4.

## Custom domain (optional)
1. Buy a domain (Namecheap, Cloudflare, etc.).
2. In **Settings → Pages → Custom domain**, enter your domain (this creates a `CNAME` file).
3. At your domain registrar, add the DNS records GitHub shows (an `A`/`ALIAS` for the apex and/or a `CNAME` for `www`).
4. Enable **Enforce HTTPS** once the certificate is issued.

## Contact forms
GitHub Pages cannot process form submissions server‑side. The forms currently open the
visitor's email app as a fallback. To receive submissions directly in your inbox:
1. Create a free form at https://formspree.io (set the send target to your preferred inbox).
2. In `index.html`, replace `your-form-id` in BOTH `<form action="...">` tags with your
   Formspree form ID. Submissions will then arrive by email automatically.
