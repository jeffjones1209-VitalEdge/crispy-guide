# VItalEdge — Precision Peptide Tools & Research

A one-stop health and wellness platform combining a free peptide dosage calculator, dropshipped peptides at wholesale pricing, and educational content for the research community.

## Features

### 🔬 Peptide Dosage Calculator (Free)
- Searchable database of 22+ research peptides
- Reconstitution calculator: enter mg peptide + ml bacteriostatic water
- Instant conversion to insulin syringe units (100-unit/1ml)
- Common dosage presets for each peptide
- Smart scheduling with frequency selection (4h to weekly)
- Run-out prediction: shows doses remaining, days until empty, and reorder date
- Dose calendar view (next 30 doses)
- Email signup for reorder reminders

### 🧬 Categories
Recovery · Metabolic · Growth Hormone · Cosmetic · Mitochondrial · Wellness · Longevity · Immune · Anti-inflammatory

### 📦 Product Catalog
Wholesale-priced research peptides with multiple size options per peptide.

### 📚 Education
Evidence-based articles about peptide research, dosing protocols, and scientific findings.

## Tech Stack
- **Frontend:** React 18 + Vite 6 + Tailwind CSS 3
- **Fonts:** Inter (Google Fonts)
- **Deploy:** Static SPA (Vercel / Netlify ready)

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

The dev server runs on `http://localhost:3000` (bound to `0.0.0.0`).

## Project Structure

```
vitaledge/
├── public/
│   ├── favicon.svg
│   └── _redirects          # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Responsive nav with mobile menu
│   │   └── Footer.jsx       # Brand footer with links & disclaimer
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── DosageCalculator.jsx  # Core dosage tool
│   │   ├── Products.jsx     # Product catalog
│   │   └── Education.jsx    # Blog/articles
│   ├── data/
│   │   └── peptides.js      # Peptide database & utility functions
│   ├── App.jsx              # Main app with page routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind CSS + custom styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json              # Vercel deployment config
└── package.json
```

## Deployment

### Vercel
The `vercel.json` config handles SPA rewrites automatically. Connect your repo and Vercel will use `npm run build` with `dist/` as output.

### Netlify
Use the `_redirects` file in the `public/` directory for SPA routing:
```
/*    /index.html   200
```

## Disclaimer
For research purposes only. Not for human consumption. Consult a qualified healthcare professional before starting any protocol.

## License
Proprietary — VItalEdge