# Legal Policies Site

Static legal policies website built with Astro, featuring privacy and cookie policies for multiple brands.

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ubergabriel/legal-policies-site)

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ubergabriel/legal-policies-site)

## 📋 Structure

- **Homepage** (`/`): Landing page with links to all policies
- **Privacy Policy** (`/privacy`): Unified privacy policy with sections for:
  - Motion Music (`/privacy#motionmusic`)
  - Brandkover (`/privacy#brandkover`)
  - Bloooz (`/privacy#bloooz`)
- **Cookies Policy** (`/cookies`): Comprehensive cookies policy

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This site is optimized for deployment on:
- ✅ **Vercel** (recommended)
- ✅ **Cloudflare Pages** (recommended)
- GitHub Pages
- Netlify
- Any static hosting service

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.**

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Quick Deploy to Cloudflare Pages

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist
```

## 🎨 Customization

### Add a New Brand

1. Open `src/pages/privacy.astro`
2. Add a new section with the brand's ID (e.g., `id="newbrand"`)
3. Update the navigation links
4. Customize the content for the new brand

### Update Styles

- Global styles: `src/layouts/Layout.astro`
- Page-specific styles: Inside each `.astro` file

### Configure Domain

Update `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://legal.yourdomain.com'
});
```

## 🌐 Custom Domain Setup

For `legal.misitio.com`:

### Vercel:
1. Add domain in Vercel dashboard
2. Configure DNS: `CNAME legal → cname.vercel-dns.com`

### Cloudflare Pages:
1. Add custom domain in Cloudflare dashboard
2. DNS automatically configured if domain is on Cloudflare

## 📊 Build Settings

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node Version | 18+ |

## 🎯 Features

- ⚡ Lightning-fast static site generation with Astro
- 📱 Fully responsive design
- ♿ Accessible markup and navigation
- 🎨 Clean, professional design inspired by major brands
- 🔗 Deep-linking support for individual brand sections
- 🌍 SEO-friendly structure
- 🚀 Optimized for Vercel and Cloudflare Pages

## 📝 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Language**: TypeScript
- **Styling**: CSS (scoped)
- **Deployment**: Vercel / Cloudflare Pages

## 🔒 Design Philosophy

The design follows a clean, minimalist aesthetic:
- Black navigation bar for professional appearance
- Clean typography for readability
- Easy navigation between sections
- Mobile-responsive layout
- Accessible color contrast (WCAG compliant)

## 📄 License

MIT