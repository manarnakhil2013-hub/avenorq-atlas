# 🦴 AvenorQ Atlas

An interactive osteology atlas for first-year medical students, covering the
**upper and lower limb** bones. Each bone has its **own dedicated page** with
a 3D viewer, an interactive structure list with clinical pearls, and a
5-question quiz of progressive difficulty. Visual identity follows the
AvenorQ brand palette (deep navy, purple-tech, violet).


## Project structure

```
avenorq-atlas/
├── index.html            # Hub page — lists all upper & lower limb bones
├── style.css              # Shared design system (used by every page)
├── bones/
│   ├── scapula/
│   │   ├── index.html     # Scapula atlas page
│   │   └── script.js      # Scapula structures, pearls, quiz
│   └── humerus/
│       ├── index.html     # Humerus atlas page
│       └── script.js      # Humerus structures, pearls, quiz
└── README.md
```

Bones with a 3D model (currently **Scapula** and **Humerus**) are clickable
on the hub page. All other bones are listed as **"Coming soon"** — the hub
already reserves their spot so the atlas can grow without redesigning
navigation later.

## How to add a new bone page

1. Duplicate the `bones/humerus/` folder and rename it (e.g. `bones/radius/`).
2. In the new `index.html`:
   - Update the `<title>`, header subtitle, and the Sketchfab `<iframe>`
     `src` with the new model's embed URL.
   - Update the Credits section with the new model's name, author, license,
     and Sketchfab link (**always verify the license before publishing** —
     see the note below).
3. In the new `script.js`:
   - Replace the `STRUCTURES` array with that bone's structures, each with
     `id`, `name`, `text` (definition), and `pearl` (clinical pearl).
   - Replace the `QUIZ` array with 5 questions of increasing difficulty
     (one-word → short phrase → definition matching → clinical reasoning →
     full clinical vignette), following the existing pattern.
4. In the hub `index.html`, change that bone's card from a locked `<div>` to
   a linked `<a class="bone-card" href="bones/radius/index.html">` and swap
   its status badge to `status-ready`.

## ⚠️ Always check the 3D model's license first

Not all "free" Sketchfab models allow the same uses. Before adding a new
model, check its license on its Sketchfab page:

- **CC BY** — free to use, modify, and sell commercially, as long as credit
  is given. Safe for this atlas and for the printed book.
- **CC BY-NC** / **CC BY-ND** / **CC BY-NC-ND** — restricts commercial use
  and/or modification. **Do not use these for content that will be sold**
  (e.g. the book) without direct permission from the author.

Always add proper attribution in the page's Credits section regardless of
license type.

## Run locally

Pure HTML/CSS/JS, no build step.

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

## Deploy on GitHub Pages

1. Create a new repository (e.g. `avenorq-atlas`).
2. From the project folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: AvenorQ Atlas"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/avenorq-atlas.git
   git push -u origin main
   ```

3. **Settings → Pages → Source: Deploy from a branch**, branch `main`,
   folder `/ (root)`, then **Save**.
4. Live at: `https://<USERNAME>.github.io/avenorq-atlas/`

## Credits

- "Human scapula" 3D model by [Eric Bauer](https://sketchfab.com/ebauer4),
  CC BY 4.0.
- "Human humerus" 3D model by [Eric Bauer](https://sketchfab.com/ebauer4),
  CC BY 4.0.
- Fonts: Fraunces, Work Sans, JetBrains Mono via Google Fonts.

## License

Code and educational content are free to use and adapt. Verify each 3D
model's individual license on Sketchfab before adding it or redistributing
commercially.
