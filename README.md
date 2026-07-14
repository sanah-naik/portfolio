# Sanah Naik — Portfolio

A static, single-page portfolio. Plain **HTML / CSS / JS** — no framework, no
build step. Open `index.html` and it runs.

```
portfolio/
├── index.html   # all content lives here (edit text/links directly)
├── styles.css   # design tokens + layout + animations
├── script.js    # scroll reveals, gliding nav indicator, hero load-in
└── README.md
```

## Preview locally

Just open `index.html` in a browser. Or run a tiny local server (nicer for
smooth scrolling / fonts):

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

### GitHub Pages
1. Push these files to a repo (e.g. `sanah/portfolio`).
2. Repo **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, Branch: `main` / `/root`. Save.
4. Live at `https://<username>.github.io/<repo>/` within a minute or two.

### Netlify
- Drag the `portfolio` folder onto <https://app.netlify.com/drop>, **or**
- Connect the repo. Build command: *none*. Publish directory: `.` (root).

Both work because there's nothing to compile — the folder *is* the site.

## Editing content

Everything you'll want to change is in **`index.html`**, and each section is
labelled with a comment (`1. HERO`, `2. ABOUT`, …).

Common edits:

| Want to change…            | Where                                                          |
| -------------------------- | -------------------------------------------------------------- |
| Name / title / tagline     | `1. HERO` section                                              |
| Bio text                   | `2. ABOUT` section                                             |
| Stat grid quick facts      | `2. ABOUT` — each `<div class="stat">` (label + value)         |
| Role bullets / period      | `3. EXPERIENCE` — `.timeline__points`, `.timeline__period`     |
| Skills                     | `4. SKILLS` — add/remove `<li class="chip">…</li>` in a row     |
| Projects                   | `5. PROJECTS` — each `<article class="card card--project">`    |
| Certifications             | `6. CERTIFICATIONS` — each `<article class="cert">`            |
| Education                  | `7. EDUCATION` — `.edu__degree`, `.edu__school`, `.edu__period` |
| **Contact links**          | `8. CONTACT` — replace the placeholder `href`s                 |

> **Contact links are placeholders.** Search `index.html` for
> `your-email@example.com` and swap in your real email. The LinkedIn URL is
> pre-filled as `linkedin.com/in/sanah-naik-` — double-check it points where
> you want. Add a GitHub link by copying one of the `<a class="contact__link">`
> blocks if you'd like one.

## Theming

Open **`styles.css`** and edit the tokens at the top (`:root`):

- `--accent` — the one highlight color. Change this one line to reskin the site.
- `--bg`, `--bg-alt`, `--surface`, `--ink*` — background/text palette.
- `--ease`, `--dur` — animation curve + speed (kept consistent site-wide).

### Want a dark theme?
The palette is fully token-driven, so a dark mode is just a second set of
values. Drop this after `:root` in `styles.css` to follow the OS setting:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg:        #0f0d0c;
    --bg-alt:    #171412;
    --surface:   #1c1917;
    --ink:       #f5f2ee;
    --ink-soft:  #b8b1a9;
    --ink-faint: #7d766e;
    --line:      #2a2521;
    /* --accent can stay the same */
  }
  .nav.is-scrolled { background: rgba(15, 13, 12, 0.72); }
}
```

## Animation notes

- **Scroll reveals** use `IntersectionObserver`; each element animates **once**.
- **Cascading grids** (`data-stagger`) delay each child by ~90ms in `script.js`
  (change `STAGGER_MS`).
- **Nav indicator** slides with `transform` only (GPU-friendly), tracking the
  active section by scroll position.
- **`prefers-reduced-motion`** is respected — animations are disabled/instant
  for users who ask for that.

Everything animates with `transform`/`opacity` only, on a single easing curve
(`cubic-bezier(0.16, 1, 0.3, 1)`).
