# SullyLandia Page

Diseño, desarrollo e implementación de la página web para SullyLandia.

## Estructura del Proyecto

```
sullylandia/
│
├── index.html
├── README.md
├── assets/
│   └── img/
│       └── ... (logos, iconos, imágenes de productos y noticias)
├── css/
│   ├── styles.css
│   ├── styles.css.map
│   └── styles-import.css
├── js/
│   └── contacto.js
├── pages/
│   ├── contacto.html
│   ├── faq.html
│   ├── noticias.html
│   ├── ofertas.html
│   └── servicios.html
├── php/
│   └── procesamiento-contacto.php
├── sass/
│   ├── _animations.scss
│   ├── _base.scss
│   ├── _buttons.scss
│   ├── _components.scss
│   ├── _flex-grid.scss
│   ├── _forms.scss
│   ├── _images.scss
│   ├── _mixins.scss
│   ├── _nav.scss
│   ├── _responsive.scss
│   ├── _utilities.scss
│   ├── _variables.scss
│   ├── index.scss
│   └── styles.scss
└── Wireframes/
    ├── Enlace a Wireframes online.txt
    └── ... (imágenes de prototipos y diseño)
```

## Descripción General

- **index.html**: Página principal con navegación a todas las secciones.
- **assets/img/**: Recursos gráficos, logotipos, iconos y fondos.
- **css/**: Hojas de estilo compiladas desde SASS y fuentes externas.
- **js/contacto.js**: Lógica para el envío asíncrono del formulario de contacto y gestión de respuestas.
- **php/procesamiento-contacto.php**: Procesamiento backend del formulario de contacto.
- **pages/**: Páginas secundarias del sitio (Contacto, FAQ, Noticias, Ofertas, Servicios).
- **sass/**: Archivos fuente SASS organizados por componentes, utilidades, variables y estilos globales.
- **Wireframes/**: Prototipos y enlaces a diseños en Figma.

## Tecnologías Utilizadas

- **SASS**: Organización modular de estilos y compilación a CSS.
- **Bootstrap 5**: Sistema de grillas y componentes responsivos.
- **AOS (Animate On Scroll)**: Animaciones en scroll para mejorar la experiencia visual.
- **JavaScript**: Envío asíncrono de formularios y gestión de UI.
- **PHP**: Procesamiento de datos del formulario de contacto.
- **Google Analytics & Search Console**: Integración para métricas y SEO.

## Requisitos del Proyecto

Este proyecto es de **uso privado**. No está permitido su distribución, modificación ni uso comercial sin autorización expresa.

### Requisitos técnicos

- **Node.js**: v18.x o superior (recomendado para scripts y dependencias modernas)
- **npm**: v9.x o superior
- **SASS**: v1.62.x o superior (para compilar los archivos `.scss`)
- **Bootstrap 5**: Incluido vía CDN en el HTML
- **AOS**: Incluido vía CDN en el HTML
- **PHP**: v7.4 o superior (para procesamiento del formulario de contacto)

> Para compilar los estilos, ejecuta en terminal:
> ```
> sass sass/styles.scss css/styles.css --watch
> ```

## Funcionalidades

- Navegación responsiva y sticky.
- Secciones de servicios, ofertas, noticias y preguntas frecuentes.
- Formularios de contacto con envío asíncrono y mensajes automáticos.
- Animaciones y transiciones visuales.
- Soporte para dispositivos móviles y escritorio.
- Acceso rápido a redes sociales y contacto directo.

## Estado del Proyecto

### Etapa 1 - Estado / Finalizado:
- Diseño:
    - Maquetación general.
    - Creación y definición de logo y colores.
    - Desarrollo de assets.
- Contenido:
    - Desarrollo de textos.
- Construcción:
    - Implementación de sitio estático.
    - SASS usado para la compilación del CSS.
    - Frameworks: Bootstrap y AOS.
    - Vinculación a Google Analytics y Google Search Console.
    - Envío asíncrono de formularios de contacto con JavaScript y PHP.

### Etapa 2 - Estado / Pendiente:
- Contenido dinámico.
- Almacenamiento de usuarios e intercambio de información con APIs.

## Wireframes

- [Enlace a wireframe en Figma](https://www.figma.com/proto/odfRZrmHaGI0xPapUGKfx9/Trabajos-prototipado?node-id=72-376&p=f&t=pWqfVEM1gXWgwoS7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

---
