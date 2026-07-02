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

### Agregar un producto

1. Crea un archivo `.md` en `src/content/products/`:

```markdown
---
title: "Nombre del Producto"
category: "bouquets"                # Categoría (ver categorías disponibles abajo)
price: 45000
oldPrice: 55000                     # Opcional (precio anterior para mostrar oferta)
featured: true                      # Aparece en "Destacados"
bestSeller: false                   # Aparece en "Más vendidos"
isNew: true                         # Muestra badge "Nuevo"
image: "/images/products/tu-imagen.jpg"
gallery:
  - "/images/products/tu-imagen-2.jpg"
shortDescription: "Descripción breve para la tarjeta."
description: "Descripción larga para la página del producto."
features:
  - "Característica 1"
  - "Característica 2"
seoTitle: "SEO Title | Harmony Candle"
seoDescription: "Meta description para SEO."
whatsappMessage: "Mensaje personalizado para WhatsApp"
---
```

2. Coloca las imágenes en `public/images/products/`.

3. El producto aparecerá automáticamente en el catálogo, en su categoría correspondiente y en la sección de destacados/más vendidos según los flags.

### Categorías disponibles

- `bouquets` → Ramos
- `decorativas` → Decorativas
- `aromaticas` → Aromáticas
- `bandejas` → Bandejas
- `porta-inciensos` → Porta Inciensos
- `recordatorios` → Recordatorios

Para agregar una nueva categoría, solo crea un producto con el nuevo nombre de categoría. Luego actualiza el mapa `categoryNames` en `src/pages/index.astro` para mostrar el nombre en español.

### Agregar un curso

Crea un archivo `.md` en `src/content/courses/`:

```markdown
---
title: "Nombre del Curso"
cover: "/images/courses/tu-imagen.jpg"
price: 120000
duration: "4 semanas"
lessons: 8
description: "Descripción del curso."
seoTitle: "SEO Title"
seoDescription: "Meta description"
whatsapp: "Mensaje para WhatsApp"
---
```

### Agregar preguntas frecuentes

Crea un archivo `.md` en `src/content/faq/`:

```markdown
---
question: "¿Tu pregunta?"
answer: "Tu respuesta detallada."
order: 1
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