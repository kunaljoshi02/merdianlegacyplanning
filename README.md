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
GitHub Pages cannot process form submissions server‑side, so the forms hand off to
[Web3Forms](https://web3forms.com) (free, no account) to deliver messages by email.
To activate delivery to your inbox:
1. Go to https://web3forms.com, enter **kunaljoshi@meridian-wealthplanning.com**, and click
   Create Access Key. Web3Forms emails an access key (a UUID) to that mailbox — check it and
   confirm/verify if prompted.
2. In `index.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` in BOTH `<form>` blocks (the hidden
   `access_key` field) with your key, then commit and push.

Submissions then arrive automatically at the mailbox tied to the key. The access key is safe
to keep in public client‑side code — it only permits sending to your verified address. A
hidden `botcheck` honeypot field filters basic spam.

