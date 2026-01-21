# Legal Policies Site

Sitio web estático de políticas legales construido con Astro, con políticas de privacidad y cookies para múltiples marcas.

## 🌐 Marcas Soportadas

Este sitio gestiona las políticas legales para:
- **Motion Music Group** (motionmusicgroup.com)
- **Brandkover** (brandkover.com)
- **Bloooz** (bloooz.com)
- **Emprendana** (emprendana.com)

## 📝 Estructura de URLs

Cada marca tiene sus propias páginas de políticas:

### Políticas de Privacidad
- `/politica-de-privacidad/motionmusicgroup`
- `/politica-de-privacidad/brandkover`
- `/politica-de-privacidad/bloooz`
- `/politica-de-privacidad/emprendana`

### Políticas de Cookies
- `/politica-de-cookies/motionmusicgroup`
- `/politica-de-cookies/brandkover`
- `/politica-de-cookies/bloooz`
- `/politica-de-cookies/emprendana`

## 🏛️ Arquitectura

```
src/
├── config/
│   └── brands.ts              # Configuración de marcas (colores, info legal)
├── components/
│   ├── Header.astro          # Header con branding
│   ├── Footer.astro          # Footer con links
│   └── TableOfContents.astro # Tabla de contenidos estilo Warner Music
├── layouts/
│   ├── Layout.astro          # Layout base
│   └── PolicyLayout.astro    # Layout para políticas
├── pages/
│   ├── index.astro           # Página principal con todas las marcas
│   ├── politica-de-privacidad/
│   │   ├── motionmusicgroup.astro
│   │   ├── brandkover.astro
│   │   ├── bloooz.astro
│   │   └── emprendana.astro
│   └── politica-de-cookies/
│       ├── motionmusicgroup.astro
│       ├── brandkover.astro
│       ├── bloooz.astro
│       └── emprendana.astro
└── types/
    └── index.ts              # Tipos TypeScript
```

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## ➕ Añadir una Nueva Marca

1. **Agregar configuración en `src/config/brands.ts`:**
```typescript
nuevamarca: {
  id: 'nuevamarca',
  name: 'Nueva Marca',
  domain: 'nuevamarca.com',
  primaryColor: '#000000',
  secondaryColor: '#ffffff',
  legalEntity: 'Nueva Marca LLC',
  address: 'Dirección',
  email: 'legal@nuevamarca.com',
  lastUpdated: 'Enero 2026'
}
```

2. **Crear archivos de políticas:**
   - `src/pages/politica-de-privacidad/nuevamarca.astro`
   - `src/pages/politica-de-cookies/nuevamarca.astro`

3. Usa las páginas existentes como plantilla y actualiza el contenido.

## 🎨 Personalización
### Colores de Marca
Cada marca tiene colores personalizados definidos en `brands.ts`:
- `primaryColor`: Color principal (header, acentos)
- `secondaryColor`: Color secundario (opcional)

### Contenido Legal
Edita los archivos `.astro` correspondientes en:
- `src/pages/politica-de-privacidad/[marca].astro`
- `src/pages/politica-de-cookies/[marca].astro`

## 📦 Deployment

Este sitio está optimizado para:
- ✅ **Vercel** (recomendado)
- ✅ **Cloudflare Pages** (recomendado)
- GitHub Pages
- Netlify
- Cualquier servicio de hosting estático

### Despliegue Rápido en Vercel

```bash
npm install -g vercel
vercel
```

### Despliegue Rápido en Cloudflare Pages

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist
```

## 🔧 Configuración de Build

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node Version | 18+ |

## 🎯 Características

- ⚡ Generación estática ultrarrrápida con Astro
- 📱 Diseño completamente responsive
- ♿ Markup accesible y navegación
- 🎨 Diseño limpio inspirado en Warner Music Group
- 🔗 Sistema de tabla de contenidos navegable
- 🌍 Estructura SEO-friendly
- 🚀 Optimizado para Vercel y Cloudflare Pages
- 🏗️ Sistema multi-marca escalable
- 🎨 Colores personalizados por marca
- 📝 Políticas separadas por marca

## 📚 Stack Tecnológico

- **Framework**: [Astro](https://astro.build/)
- **Lenguaje**: TypeScript
- **Estilos**: CSS (scoped)
- **Deployment**: Vercel / Cloudflare Pages

## 🔒 Filosofía de Diseño

El diseño sigue una estética minimalista y profesional:
- Barra de navegación con colores de marca
- Tipografía clara para legibilidad
- Navegación fácil con tabla de contenidos
- Layout responsive para móviles
- Contraste de color accesible (WCAG compliant)
- Tabla de contenidos estilo Warner Music Group
- Componentes reutilizables

## 🔄 Migración desde Versión Anterior

Si estás migrando desde la versión anterior con políticas unificadas:

**URLs Antiguas → Nuevas URLs:**
- `/privacy#motionmusic` → `/politica-de-privacidad/motionmusicgroup`
- `/privacy#brandkover` → `/politica-de-privacidad/brandkover`
- `/cookies` → `/politica-de-cookies/[marca]`

Considera implementar redirects en tu configuración de hosting.

## 📝 Licencia

MIT