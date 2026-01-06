# Ettore Liotta - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and deployed on GitHub Pages.

## 🚀 Features

- **Modern React Framework**: Built with Next.js 14 and TypeScript
- **Multi-language Support**: Available in 6 languages (IT, EN, DE, FR, ES, DA)
- **Responsive Design**: Fully responsive across all devices
- **Glassmorphism UI**: Beautiful liquid glass navbar design
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Proper metadata and semantic HTML
- **Smooth Animations**: Intersection Observer animations and smooth scrolling

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables
- **Fonts**: Inter (Google Fonts)
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development

The development server runs at [http://localhost:3000](http://localhost:3000)

### Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── photography/        # Photography page
│   │   ├── youtube/            # YouTube page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── i18n/
│   │   └── translations.ts     # Translation system
│   └── hooks/
│       └── useLanguage.ts      # Language hook
├── public/
│   ├── favicon.png
│   ├── profile_placeholder.png
│   └── .nojekyll               # GitHub Pages config
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions workflow
```

## 🚢 Deployment to GitHub Pages

### Automatic Deployment

The project is configured for automatic deployment via GitHub Actions. Every push to the `main` branch will trigger a build and deployment.

### Manual Setup

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Update Base Path** (if deploying to a subdirectory):
   - Edit `next.config.ts`
   - Uncomment and set `basePath` and `assetPrefix`

3. **Push to Main**:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

### Local Build Test

```bash
# Build the static export
npm run build

# The output will be in the 'out' directory
# Serve it locally to test
npx serve out
```

## 🌍 Multi-language Support

The portfolio supports 6 languages:
- 🇮🇹 Italian (default)
- 🇬🇧 English
- 🇩🇪 German
- 🇫🇷 French
- 🇪🇸 Spanish
- 🇩🇰 Danish

Language preference is saved in localStorage and persists across sessions.

## 📄 Pages

- **Home** (`/`): Main portfolio with all sections
- **Photography** (`/photography`): Photography gallery
- **YouTube** (`/youtube`): YouTube channels and videos

## 🎨 Customization

### Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-primary: hsl(0, 0%, 20%);
  --color-text-primary: #000000;
  --color-bg-primary: hsl(0, 0%, 100%);
  /* ... more variables */
}
```

### Content

- **Translations**: Edit `src/i18n/translations.ts`
- **Experience/Projects**: Edit `src/app/page.tsx`
- **Images**: Replace files in `public/` directory

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Ettore Liotta**
- LinkedIn: [ettoreliotta](https://linkedin.com/in/ettoreliotta)
- Instagram: [@ettoreliotta](https://instagram.com/ettoreliotta)
- Website: [FlyBag](https://flybag.it/)

---

Built with ❤️ using Next.js
