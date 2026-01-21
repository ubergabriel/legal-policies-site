# Guía de Deployment

Este sitio está optimizado para desplegarse en Vercel o Cloudflare Pages.

## Opción 1: Vercel

### Deployment Automático (Recomendado)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Add New" → "Project"
3. Importa el repositorio `legal-policies-site` desde GitHub
4. Vercel detectará automáticamente la configuración de Astro
5. Haz clic en "Deploy"

### Configuración del Dominio

1. En el dashboard de Vercel, ve a tu proyecto
2. Navega a "Settings" → "Domains"
3. Agrega tu dominio personalizado: `legal.misitio.com`
4. Configura los registros DNS según las instrucciones de Vercel

### Variables de Entorno

Si necesitas variables de entorno:
1. Ve a "Settings" → "Environment Variables"
2. Agrega las variables necesarias

### Deployment Manual (CLI)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

---

## Opción 2: Cloudflare Pages

### Deployment Automático (Recomendado)

1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navega a "Workers & Pages" → "Create application" → "Pages"
3. Conecta tu repositorio de GitHub
4. Selecciona el repositorio `legal-policies-site`
5. Configura los siguientes ajustes:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 o superior
6. Haz clic en "Save and Deploy"

### Configuración del Dominio

1. En el dashboard del proyecto en Cloudflare Pages
2. Ve a "Custom domains"
3. Agrega tu dominio: `legal.misitio.com`
4. Cloudflare configurará automáticamente los registros DNS si tu dominio está en Cloudflare

### Variables de Entorno

Si necesitas variables de entorno:
1. Ve a "Settings" → "Environment variables"
2. Agrega las variables necesarias para cada entorno (Production/Preview)

### Deployment Manual (CLI)

```bash
# Instalar Wrangler CLI
npm install -g wrangler

# Login
wrangler login

# Build el proyecto
npm run build

# Deploy
wrangler pages deploy dist
```

---

## Configuración DNS para Dominio Personalizado

### Si usas Vercel:

**Opción A: CNAME (recomendado)**
```
Tipo: CNAME
Nombre: legal
Valor: cname.vercel-dns.com
```

**Opción B: A Record**
```
Tipo: A
Nombre: legal
Valor: 76.76.21.21
```

### Si usas Cloudflare Pages:

Cloudflare configurará automáticamente los registros si tu dominio está en Cloudflare. Si no:

```
Tipo: CNAME
Nombre: legal
Valor: [tu-proyecto].pages.dev
```

---

## Build Settings Resumido

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node Version | 18+ |

---

## Troubleshooting

### Error: "Build failed"
- Verifica que la versión de Node.js sea 18 o superior
- Asegúrate de que todas las dependencias estén instaladas
- Revisa los logs de build para detalles específicos

### Error: "Page not found" después del deploy
- Verifica que el output directory sea `dist`
- Asegúrate de que el build se haya completado correctamente

### Problemas con el dominio personalizado
- Espera hasta 48 horas para la propagación DNS
- Verifica que los registros DNS estén configurados correctamente
- Usa herramientas como `dig` o `nslookup` para verificar la configuración DNS

---

## CI/CD

Ambas plataformas ofrecen deployment automático:
- **Push a `main`**: Deploy a producción
- **Push a otras ramas**: Preview deployments
- **Pull Requests**: Preview automático del PR

---

## Monitoreo y Analytics

### Vercel
- Analytics disponible en el dashboard
- Web Vitals automáticos
- Logs en tiempo real

### Cloudflare Pages
- Web Analytics gratuito
- CDN global incluido
- Protection contra DDoS

---

## Costos

### Vercel
- **Hobby Plan**: Gratis para proyectos personales
- **Pro Plan**: $20/mes por usuario (para proyectos comerciales)

### Cloudflare Pages
- **Free Plan**: 500 builds/mes, ilimitado bandwidth
- **Pages Paid**: $20/mes (500 builds adicionales)

Para un sitio de políticas legales estático, el plan gratuito de cualquiera de las dos plataformas es más que suficiente.