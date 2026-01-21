# Legal Policies Site

Static legal policies website built with Astro, featuring privacy and cookie policies for multiple brands.

## Structure

- **Homepage** (`/`): Landing page with links to all policies
- **Privacy Policy** (`/privacy`): Unified privacy policy with sections for:
  - Motion Music (`/privacy#motionmusic`)
  - Brandkover (`/privacy#brandkover`)
  - Bloooz (`/privacy#bloooz`)
- **Cookies Policy** (`/cookies`): Comprehensive cookies policy

## Development

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

## Customization

To add a new brand to the privacy policy:

1. Open `src/pages/privacy.astro`
2. Add a new section with the brand's ID (e.g., `id="newbrand"`)
3. Update the navigation links
4. Customize the content for the new brand

## Deployment

This site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

For custom domain (`legal.misitio.com`), configure your DNS settings to point to your hosting provider.

## Design

The design follows a clean, minimalist aesthetic inspired by Warner Music's legal pages:
- Black navigation bar
- Clean typography
- Easy navigation between sections
- Mobile-responsive layout
- Accessible color contrast

## License

MIT