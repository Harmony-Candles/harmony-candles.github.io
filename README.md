# 🕯️ Harmony Candle

Velas artesanales premium hechas a mano con amor y dedicación. Sitio web estático construido con Astro, TypeScript y CSS Modules.

## 🌐 Demo

[https://harmony-candles.github.io](https://harmony-candles.github.io)

## 🚀 Tecnologías

- **[Astro](https://astro.build)** - Framework web estático
- **TypeScript** - Tipado estático
- **CSS Modules** - Estilos encapsulados por componente
- **Astro Content Collections** - Gestión de contenido

## 📋 Requisitos

- Node.js 18+
- npm 9+

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Harmony-Candles/harmony-candles.github.io.git
cd harmony-candles.github.io

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📁 Estructura del proyecto

```
harmony-candles.github.io/
├── public/
│   ├── brand/                    # Logos y assets de marca
│   │   ├── harmony-logo.jpeg
│   │   └── harmony-iso-logo.jpeg
│   ├── images/                   # Imágenes del sitio
│   │   ├── hero/
│   │   ├── products/
│   │   ├── courses/
│   │   ├── about/
│   │   ├── campaigns/
│   │   └── gallery/
│   ├── robots.txt
│   └── .nojekyll
├── src/
│   ├── components/               # Componentes Astro
│   │   ├── Header.astro          # Navbar sticky con glassmorphism
│   │   ├── Hero.astro            # Hero section con parallax
│   │   ├── SectionTitle.astro    # Títulos de sección reutilizables
│   │   ├── ProductCard.astro     # Tarjeta de producto
│   │   ├── ProductGrid.astro     # Grid de productos
│   │   ├── CategorySection.astro # Sección por categoría
│   │   ├── CourseCard.astro      # Tarjeta de curso
│   │   ├── CoursesSection.astro  # Sección de cursos
│   │   ├── AboutSection.astro    # Sección Sobre Harmony
│   │   ├── FAQ.astro             # Acordeón de preguntas frecuentes
│   │   ├── Footer.astro          # Footer completo
│   │   ├── Button.astro          # Botón reutilizable
│   │   ├── Badge.astro           # Badge (Nuevo, Oferta, etc.)
│   │   └── FloatingWhatsappButton.astro  # Botón flotante de WhatsApp
│   ├── content/                  # Content Collections
│   │   ├── config.ts             # Esquemas de colecciones
│   │   ├── products/             # Productos (archivos .md)
│   │   ├── courses/              # Cursos (archivos .md)
│   │   └── faq/                  # Preguntas frecuentes (.md)
│   ├── layouts/
│   │   └── BaseLayout.astro      # Layout base con SEO
│   ├── pages/
│   │   ├── index.astro           # Página principal
│   │   ├── 404.astro             # Página 404
│   │   └── producto/
│   │       └── [slug].astro      # Página individual de producto
│   ├── styles/
│   │   ├── variables.css         # Variables CSS
│   │   ├── reset.css             # Reset CSS
│   │   ├── typography.css        # Tipografía
│   │   ├── animations.css        # Animaciones globales
│   │   └── global.css            # Estilos globales
│   ├── types/
│   │   └── index.ts              # Tipos TypeScript
│   └── utils/
│       └── reveal.ts             # Utilidades de animación
├── astro.config.mjs              # Configuración de Astro
├── tsconfig.json                 # Configuración de TypeScript
└── package.json
```

## 🧩 Cómo agregar contenido

Toda la gestión de contenido se realiza a través de **Astro Content Collections**. Solo necesitas crear un archivo `.md` (Markdown con frontmatter) en la carpeta correspondiente, siguiendo los esquemas definidos en `src/content/config.ts`.

---

### 📦 Agregar un producto

Crea un archivo `.md` dentro de `src/content/products/`. El nombre del archivo (sin extensión) se usará como **slug** de la URL (ej: `vela-vainilla.md` → `/producto/vela-vainilla`).

#### Esquema completo de campos

```markdown
---
title: "Nombre del Producto"                        # Obligatorio — Título visible del producto
category: "velas-aromaticas"                        # Obligatorio — Slug de categoría (ver tabla abajo)
price: 45000                                        # Obligatorio — Precio en pesos colombianos (COP)
oldPrice: 55000                                     # Opcional — Precio anterior (si se omite no se muestra oferta)
featured: true                                      # Opcional — true = aparece en sección "Destacados" (default: false)
bestSeller: true                                    # Opcional — true = aparece en sección "Más vendidos" (default: false)
isNew: false                                        # Opcional — true = muestra badge "Nuevo" (default: false)
image: "/images/products/tu-imagen.jpg"             # Obligatorio — Ruta de la imagen principal
gallery:                                            # Opcional — Lista de imágenes adicionales para el detalle
  - "/images/products/tu-imagen-2.jpg"
  - "/images/products/tu-imagen-3.jpg"
shortDescription: "Descripción breve para la tarjeta."   # Obligatorio — Texto corto (tarjetas, previstas)
description: "Descripción larga para la página del producto." # Obligatorio — Texto completo (página de detalle)
features:                                           # Opcional — Lista de características / puntos clave
  - "Característica 1"
  - "Característica 2"
seoTitle: "Título SEO | Harmony Candle"              # Opcional — Título para meta tag (usa el title si se omite)
seoDescription: "Meta description para SEO."         # Opcional — Descripción para meta tag
whatsappMessage: "Mensaje personalizado para WhatsApp" # Opcional — Texto predefinido al hacer clic en WhatsApp
---
```

#### Categorías disponibles

Estas son las categorías existentes. El campo `category` debe usar el **slug** (columna izquierda), no el nombre mostrado:

| Slug | Nombre mostrado | Descripción |
|------|----------------|-------------|
| `velas-aromaticas` | Velas Aromáticas | Velas con fragancia (eucalipto, menta, palo santo, etc.) |
| `velas-decorativas` | Velas Decorativas | Velas de diseño para decorar espacios |
| `bouquets` | Bouquet de Velas | Ramos y composiciones con velas |
| `bases` | Bases | Bases y bandejas decorativas para presentar velas |
| `porta-inciensos` | Porta Inciensos | Porta inciensos de cerámica y otros materiales |
| `sets` | Sets | Paquetes y sets de productos combinados |
| `floreros` | Floreros | Floreros decorativos |
| `recordatorios` | Recordatorios | Velas personalizadas para eventos (bodas, bautizos, etc.) |

> ⚠️ **Importante:** Si necesitas agregar una categoría nueva, debes:
> 1. Elegir un slug único (ej: `velas-citricas`)
> 2. Agregarlo al mapa `CATEGORY_NAMES` en `src/config/categories.ts`
> 3. Agregarlo también al array `CATEGORY_ORDER` en el mismo archivo

---

### 📚 Agregar un curso

Crea un archivo `.md` dentro de `src/content/courses/`. El nombre del archivo será el slug del curso.

#### Esquema completo de campos

```markdown
---
title: "Nombre del Curso"                             # Obligatorio — Título del curso
cover: "/images/courses/tu-imagen.jpg"                # Obligatorio — Ruta de la imagen de portada
price: 120000                                         # Opcional — Precio en COP (si se omite no se muestra el precio)
duration: "4 semanas"                                 # Obligatorio — Texto de duración (ej: "4 semanas", "2 meses")
lessons: 8                                            # Obligatorio — Número de lecciones/clases
description: "Descripción completa del curso."        # Obligatorio — Texto descriptivo
seoTitle: "Título SEO | Harmony Candle"                # Opcional — Meta title personalizado
seoDescription: "Meta description para SEO."           # Opcional — Meta description personalizada
whatsapp: "Mensaje personalizado para WhatsApp"        # Opcional — Texto para botón de WhatsApp
---
```

---

### ❓ Agregar preguntas frecuentes

Crea un archivo `.md` dentro de `src/content/faq/`. El nombre del archivo es libre (se recomienda usar un identificador corto como `envios.md`, `productos.md`, etc.).

#### Esquema completo de campos

```markdown
---
question: "¿Tu pregunta?"                             # Obligatorio — Texto de la pregunta
answer: "Tu respuesta detallada."                     # Obligatorio — Texto de la respuesta (soporta HTML básico)
order: 1                                              # Opcional — Número de orden (default: 0). Menor número = aparece primero
---
```

## 📸 Imágenes

Coloca las imágenes del proyecto en las siguientes carpetas:

| Carpeta | Uso |
|---------|-----|
| `public/images/hero/` | Imagen de fondo del Hero |
| `public/images/products/` | Fotos de productos |
| `public/images/courses/` | Portadas de cursos |
| `public/images/about/` | Imagen de la sección Sobre Harmony |
| `public/images/campaigns/` | Imágenes de campañas |
| `public/images/gallery/` | Galería adicional |

## 🚢 Despliegue

```bash
# Build de producción
npm run build

# Vista previa del build
npm run preview

# Desplegar a GitHub Pages
npm run deploy
```

El build genera una carpeta `dist/` con el sitio estático listo para GitHub Pages.

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:3000` |
| `npm run build` | Build de producción + genera `404.html` |
| `npm run preview` | Vista previa del build |
| `npm run deploy` | Build + despliegue a GitHub Pages |

## 🎨 Personalización

### Colores

Edita `src/styles/variables.css` para cambiar la paleta de colores, tipografía, espaciados y más.

### Animaciones

Las animaciones scroll-reveal se configuran en `src/utils/reveal.ts` y los estilos en `src/styles/animations.css`.

### SEO

Los meta tags, Open Graph y JSON-LD se configuran en `src/layouts/BaseLayout.astro`.

## 📄 Licencia

Todos los derechos reservados © Harmony Candle