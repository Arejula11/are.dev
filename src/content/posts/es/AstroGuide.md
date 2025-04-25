---
title: "Crea tu primer proyecto con Astro"
description: "Aprende cómo configurar tu primer proyecto Astro. Una guía paso a paso para crear un nuevo proyecto Astro."
tags: ["Aprendizaje"]
publishedDate: "2025-03-23 23:00"
coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "es"
keywords: ["Astro", "UI", "Guía", "Aprendizaje", "React", "Vue", "Node.js", "Desarrollo Web", "Frontend", "tutorial"]
---

## Introducción: ¿Qué es Astro?
Astro es un framework web moderno diseñado para construir sitios rápidos enfocados en contenido. A diferencia de los frameworks tradicionales cargados de JavaScript, Astro envía un JavaScript mínimo al cliente, lo que mejora el rendimiento y la experiencia del usuario. Astro es perfecto para sitios estáticos, blogs, portafolios y otros proyectos centrados en el contenido. Sin embargo, también admite rutas dinámicas y renderizado del lado del servidor (SSR) para aplicaciones más complejas. 

## ¿Por qué Astro?
Astro ofrece varias ventajas, entre ellas:
- **Hidratación Parcial**: Carga JavaScript solo donde sea necesario.
- **Soporte para Múltiples Frameworks**: Integra React, Vue, Svelte, Solid, y más.
- **Rendimiento Optimizado**: Astro optimiza imágenes, precarga enlaces y entrega páginas de carga rápida.
- **Fácil de Usar**: Sintaxis simple y arquitectura basada en componentes.

## Astro + React, Vue, Svelte, etc.
Astro permite a los desarrolladores combinar frameworks de UI en un solo proyecto. Puedes usar React para componentes interactivos mientras mantienes contenido estático en componentes Astro. Esta flexibilidad te permite elegir la mejor herramienta para cada parte de tu sitio. Puedes seguir los pasos en la [documentación oficial de Astro](https://docs.astro.build/en/guides/integrations-guide/) para integrar React, Vue, Svelte, Solid u otros frameworks.

## Requisitos Previos
Antes de comenzar, asegúrate de tener lo siguiente instalado:
- Node.js (se recomienda la versión LTS)
- npm o pnpm

## Crear un Nuevo Proyecto Astro
Para crear un nuevo proyecto Astro, ejecuta el siguiente comando en tu terminal:
```sh
npm create astro@latest
```
Este comando te pedirá ingresar el nombre del proyecto y elegir una plantilla. Selecciona la plantilla por defecto para crear un nuevo proyecto Astro. Sigue las instrucciones para configurar tu proyecto.
![Crear Proyecto Astro](/assets/astro-guide/CreatePrompt.webp)

## Estructura del Proyecto
Una vez creado el proyecto, la estructura básica se ve así:
![Estructura del Proyecto](/assets/astro-guide/Structure.webp)
- **src/**: Contiene todos los archivos fuente de tu proyecto.
    - **pages/**: Almacena los componentes de página que definen rutas.
    - **components/**: Contiene componentes de UI reutilizables.
    - **layouts/**: Define diseños de página reutilizables.
- **public/**: Almacena archivos estáticos como imágenes, fuentes e íconos.
- **astro.config.mjs**: Archivo de configuración de Astro donde se definen integraciones, modo de salida y herramientas de desarrollo.
- **package.json**: Contiene los metadatos del proyecto, dependencias y scripts.
- **tsconfig.json**: Archivo de configuración de TypeScript usado para establecer alias y soporte de tipos.
- **README.md**: Documentación sobre tu proyecto, incluyendo instrucciones de instalación y uso.

### Desactivar Herramientas de Desarrollo
Astro incluye herramientas de desarrollo para ayudarte a construir y depurar tu proyecto. Sin embargo, pueden ser distracción cuando quiero concentrarme en el código. Para desactivar las herramientas de desarrollo, puedes modificar el archivo de configuración *astro.config.mjs*. Agrega la siguiente línea dentro del objeto de configuración:
```js
devToolbar: {
    enabled: false
},
```

## Ejecutar el Proyecto
Para iniciar tu proyecto Astro, abre una terminal y ejecuta el siguiente comando:
```sh
npm run dev
```

Esto lanzará un servidor de desarrollo local, usualmente disponible en http://localhost:4321/. Puedes visitar esta URL en tu navegador para previsualizar tu sitio. A medida que hagas cambios en los archivos fuente, Astro recargará automáticamente la página para reflejar las actualizaciones en tiempo real. Cuando abras el proyecto por primera vez, verás una página de inicio básica con un mensaje de bienvenida, similar a esta:
![Página de Inicio de Astro](/assets/astro-guide/Homepage.webp)

## Layouts, Components y Pages
Astro sigue un enfoque estructurado para construir páginas web usando tres conceptos clave: **layouts**, **components** y **pages**. Entender cómo funcionan juntos te ayudará a crear proyectos bien organizados y fáciles de mantener.
- **Layouts**: Proporcionan una estructura común para varias páginas. Por ejemplo, un layout puede incluir un encabezado y pie de página que se repiten en todas las páginas.
- **Components**: Son bloques de construcción reutilizables que encapsulan lógica y estilos. Puedes crear un componente para un botón, formulario o cualquier otro elemento UI que necesites en varias páginas.
- **Pages**: Son archivos que representan rutas individuales en tu sitio. Cada archivo en el directorio *src/pages/* se convierte en una ruta accesible.

Combinando estos tres conceptos, puedes crear un sitio web modular y escalable. Por ejemplo, puedes tener un layout principal que incluya un encabezado y pie de página, y luego usar componentes dentro de las páginas para crear contenido dinámico.

## Construyendo Tu Proyecto Astro

El enfoque modular de Astro te permite gestionar eficientemente diferentes aspectos de tu proyecto. Exploremos cómo crear nuevas páginas, componentes y diseños y enlazarlos entre sí.

### Añadir una Nueva Página

Una página en Astro es simplemente un archivo *.astro* colocado dentro del directorio *src/pages/*. Para crear una página "Acerca de", añade un nuevo archivo *src/pages/about.astro* con el siguiente contenido:

```astro
---
---
<h1>About Page</h1>
```

Esta página ahora es accesible automáticamente en *http://localhost:4321/about* al ejecutar el servidor de desarrollo.
![Página Acerca de](/assets/astro-guide/AboutPage.webp)

### Añadir un Nuevo Componente

Los componentes ayudan a dividir tu sitio en partes reutilizables. Por ejemplo, vamos a crear un componente simple añadiendo *src/components/Title.astro*:

```astro
---
export let text;
---
<h1>This is my first component</h1>
```

Ahora puedes usar este componente en tu página "Acerca de" importándolo y pasando una propiedad:

```astro
---
import Title from '../components/Title.astro';
---
<Title/>
```

### Añadir un Nuevo Layout

Los layouts proporcionan una estructura consistente entre varias páginas. Un layout típico incluye elementos comunes como encabezados y pies de página. Crea `src/layouts/MainLayout.astro`:

```astro
---
export let title;
---
<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

Ahora, para usar este layout en nuestra página *About*, modificamos `src/pages/about.astro`:

```astro
---
import MainLayout from '../layouts/MainLayout.astro';
---
<MainLayout title="Acerca de">
  <h1>About Page</h1>
</MainLayout>
```

Esto asegura que todas las páginas que usan `MainLayout.astro` compartan la misma estructura, facilitando el mantenimiento.

## Renderizado del Lado del Servidor (SSR)

Astro admite SSR, lo que permite generar páginas dinámicamente en lugar de durante la compilación. Para habilitar SSR, modifica `astro.config.mjs`:

```js
export default {
  output: 'server',
};
```

Con SSR, puedes obtener datos dinámicamente y renderizar contenido en tiempo real, brindando flexibilidad para aplicaciones que dependen de APIs o bases de datos.

## Rutas Dinámicas

### Rutas Dinámicas en Tiempo de Compilación

Las rutas dinámicas permiten generar contenido basado en parámetros. Para crear una ruta de post de blog dinámica, añade *src/pages/post/[id].astro*:

```astro
---
export async function getStaticPaths() {
  return [{ params: { id: '1' } }, { params: { id: '2' } }];
}
const { id } = Astro.props;
---
<h1>Post {id}</h1>
```

Esto creará dos rutas: /post/1 y /post/2. La función getStaticPaths le dice a Astro qué páginas generar durante la compilación.

### Rutas Dinámicas en Tiempo de Ejecución

Si no conoces las rutas posibles de antemano, puedes generar páginas dinámicamente al momento usando SSR. En lugar de getStaticPaths, puedes acceder a los parámetros de ruta directamente:

```astro
---
const { id } = Astro.props;
---
<h1>Post {id}</h1>
```

Este enfoque es útil para contenido dinámico como perfiles de usuario o datos en tiempo real.

![Rutas Dinámicas](/assets/astro-guide/DynamicRoutes.webp)

### Cuándo Usar Rutas Estáticas vs. Dinámicas

Usa getStaticPaths cuando tienes un conjunto conocido de rutas que no cambian con frecuencia. Esto asegura cargas más rápidas porque las rutas se construyen durante el despliegue.

Usa rutas generadas en tiempo de ejecución cuando el número de páginas es desconocido o dinámico (por ejemplo, contenido generado por usuarios o páginas basadas en bases de datos). Esto permite servir nuevas páginas al instante sin reconstruir el sitio.

## Rutas Dinámicas con Astro (@components, @layouts, @pages)

Las rutas dinámicas en Astro te permiten referenciar archivos y componentes usando alias en lugar de rutas relativas. Esto mejora el mantenimiento y la legibilidad, especialmente en proyectos grandes. Por ejemplo, en lugar de importar un componente usando una ruta relativa larga:

```astro
import Button from '../../components/Button.astro';
```
Puedes usar un alias definido en tu configuración de TypeScript:

```astro
import Button from '@components/Button.astro';
```

### ¿Por Qué Son Útiles las Rutas Dinámicas?

- Legibilidad Mejorada del Código: Evita rutas relativas largas y complejas.
- Refactorización Más Fácil: Cambiar la estructura del proyecto es más simple.
- Mejor Organización: Mantiene las importaciones limpias y ordenadas.

Para habilitar rutas dinámicas, configúralas en *tsconfig.json*:

```json
{
  "compilerOptions": {
    "paths": {
      "@components/*": ["src/components/*"],
      "@layouts/*": ["src/layouts/*"],
      "@pages/*": ["src/pages/*"]
    }
  }
}
```

Después de esta configuración, puedes importar archivos usando los alias definidos.

## Astro + Tailwind CSS

Tailwind CSS es un framework CSS orientado a utilidades que permite a los desarrolladores aplicar estilos eficientemente usando clases predefinidas directamente en el HTML. Tailwind funciona perfectamente con Astro, facilitando la creación de sitios responsivos y visualmente atractivos.

Para usarlo, sigue los pasos en la [documentación oficial de Tailwind](https://tailwindcss.com/docs/installation/framework-guides/astro).

Luego puedes usar clases de Tailwind directamente en tus componentes Astro:

```astro
---
import '../styles/global.css';
---
<div class="bg-gray-100 p-4">
  <h1 class="text-2xl font-bold text-blue-500">Hello, Astro!</h1>
  <p class="text-gray-700">Welcome to my Astro project.</p>
</div>
```

Además, puedes definir tus estilos personalizados en *global.css*:

```css
@theme {
    --color-primary: #f5c242;
    --color-secondary: #4b42f5;
    --color-accent: #fff;
    --color-accent-dark: #9B9B9B;
    --color-text: #000;
}
```

Y usarlos así:

```astro
---
import '../styles/global.css';
---
<div class="bg-primary p-4">
  <h1 class="text-2xl font-bold text-accent">¡Hola, Astro!</h1>
  <p class="text-text">Bienvenido a mi proyecto Astro.</p>
</div>
```

## Conclusión

Si quieres iniciar tu proyecto Astro con una configuración completa y optimizada, visita mi [repositorio en GitHub](https://github.com/Arejula11/templateAstro.git). Este template incluye buenas prácticas, estructura predefinida e integraciones esenciales. Ya seas un principiante o un desarrollador experimentado, este template te ayudará a comenzar rápidamente y a enfocarte en lo que realmente importa: construir tu proyecto.


Espero que esta guía te haya ayudado a entender los fundamentos de Astro y cómo comenzar tu primer proyecto. Mediante las funcionalidades de Astro, puedes construir sitios web rápidos y enfocados en el contenido con facilidad. Experimenta con diferentes integraciones, layouts y componentes para crear experiencias web únicas y atractivas. ¡Feliz codificación!
