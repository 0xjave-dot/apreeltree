# Apreeltree Nigerian Food Export Company Website

A highly premium, fully responsive, and typographically rich multi-page web application for **Apreeltree** — an earthy brand representing a premier Nigerian agricultural foodstuffs exporter bulk-shipping authentic ingredients (egusi, Ofada rice, dry meat, catfish, palm oil, flours, etc.) worldwide with complete regulatory compliance.

---

## Technical Stack & Aesthetics

- **Framework**: React 19 + TypeScript with standard ES Modules.
- **Routing**: React Router DOM (v6) for seamless multi-page transitions.
- **Styling**: Tailwind CSS utilizing global brand variables and high-contrast styling tokens.
- **Fonts**: Dynamic elegant pairing of **Fraunces** for displays and **Plus Jakarta Sans** for clean legible body typography.
- **Animation**: Micro-transitions and hover indicators via standard Tailwind configurations.
- **Persistence**: Local Quote Enquiry Basket synchronized beautifully via context to enable client-side bulk order requests.

---

## Brand Architecture & Color Tokens

Our earthy design is customized precisely using the corporate specifications:
- **Background**: `#F5EFE0` (Warm Cream)
- **Primary**: `#1A3728` (Deep Forest Green)
- **Accent**: `#C2673A` (Terracotta / Burnt Orange)
- **Gold**: `#C9A84C` (Warm Gold)
- **Text dark**: `#1C1C1C`
- **Text muted**: `#6B6B6B`

---

## Page Components Map

1. **Homepage (`/`)**: Confident hero headers, trust strips, horizontal featured catalog scroll, snap progress markers, About summaries, CAC compliance badges, and direct WhatsApp links.
2. **Products Catalog (`/products`)**: A stunning sorting panel supporting immediate category tag filtering and text strings queries for over 23 authentic local products.
3. **Product Detail (`/products/:slug`)**: Multi-column technical and narrative pages. Dynamic weights selectors calculation, wholesale pricing scale matrices, regulatory documents checklists, and instant enquiry button.
4. **How It Works (`/how-it-works`)**: An alternating vertical timeline mapping out farm hub extraction, secure packaging standards, phytosanitary declarations, and port delivery steps.
5. **Shipping Info (`/shipping`)**: Dynamic flags grids mapping 14 active recipient countries (UK, US, Canada, etc.), air-vs-ocean shipping comparison logs, and customs guidelines advice.
6. **About (`/about`)**: Story paragraphs, CAC/NEPC/NAFDAC registrations rows, brand pillars cards (Quality, Transparency, Integrity), and deep visual sourcing gallery layout.
7. **Get a Quote (`/quote`)**: Intelligent dynamic form. Automatically pre-populates item logs selected in the Quotebasket context alongside custom item textareas. Compiles everything into encoded message schemas to launch WhatsApp on submit.
8. **Contact (`/contact`)**: Headquarters email, hotlines coordinates, embedded responsive location coordinates map, and form submissions to wa.me.

---

## Local Development & Setup Instructions

To host and build this application on your local terminal, perform the following cycles:

1. **Clone & Environment Setup**:
   Extract files into your project subdirectory.

2. **Install Package Dependencies**:
   ```bash
   npm install
   ```

3. **Establish Local Development Hot-Reload Server**:
   ```bash
   npm run dev
   ```
   The application boots and hosts on [http://localhost:3000](http://localhost:3000).

4. **Product Build Assembly**:
   ```bash
   npm run build
   ```
   Compiles optimized production assets inside the `/dist` pipeline.

5. **Linter & Syntax Verification Check**:
   ```bash
   npm run lint
   ```
   Validates typescript compiler checks for robust code structure.

---

## Production Deployment Checklist

- **Static Direct Deployment (Vercel, Netlify, Github-Pages)**:
  This application is compiled as a robust Single Page Application (SPA). To deploy on Vercel or Netlify, link your source repository, select the build script as `npm run build`, and configure the publish output directory to `dist/`. Correct route redirects for index.html SPA fallbacks.
