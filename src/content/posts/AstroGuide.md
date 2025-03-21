---
title: "Create your first Astro project"
description: "Learn how to set up your first Astro project. A step-by-step guide to create a new Astro project."
tags: ["Learning"]
publishedDate: "2025-03-23 21:00"
coverImage: ""
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: true
language: "en"
keywords: ["Astro", "UI", "Guide", "Learning", "React", "Vue","Node.js", "Web Development", "Frontend", "tutorial"]
---

## Introduction: What is Astro?
Astro is a modern web framework designed to build fast, content-focused websites. Unlike traditional JavaScript-heavy frameworks, Astro ships minimal JavaScript to the client by default, leading to improved performance and a better user experience. Astro is perfect for static sites, blogs, portfolios, and other content-driven projects. However, it also supports dynamic routes and server-side rendering (SSR) for more complex applications. 

## Why Astro?
Astro offers several advantages, including:
- **Partial Hydration**: Load JavaScript only where necessary.
- **Supports Multiple Frameworks**: Integrate React, Vue, Svelte, Solid, and more.
- **Optimized Performance**: Astro optimizes images, prefetches links, and delivers fast-loading pages.
- **Easy to Use**: Simple syntax and a component-based architecture.

## Astro + React, Vue, Svelte, etc.
Astro allows developers to mix and match UI frameworks within a single project. You can use React for interactive components while keeping static content in Astro components. This flexibility enables you to choose the best tool for each part of your website. You can follow the steps in the official [Astro documentation](https://docs.astro.build/en/guides/integrations-guide/) to integrate React, Vue, Svelte, Solid, or other frameworks.

## Prerequisites
Before starting, ensure you have the following installed:
- Node.js (LTS version recommended)
- npm or pnpm

## Create a New Astro Project
To create a new Astro project, run the following command in your terminal:
```sh
npm create astro@latest
```
This command will prompt you to enter the project name and choose a template. Select the default template to create a new Astro project. Follow the instructions to set up your project.
![Create Astro Project](/assets/astro-guide/CreatePrompt.webp)

## Project Structure
Once the project is created, the basic structure looks like this:
![Project Structure](/assets/astro-guide/Structure.webp)
- **src/**: Contains all the source files for your project.
    - **pages/**: Stores page components that define routes.
    - **components/**: Houses reusable UI components.
    - **layouts/**: Defines reusable page layouts.
- **public/**: Stores static assets like images, fonts and icons.
- **astro.config.mjs**: Astro's configuration file where settings like integrations, output mode, and dev tools are defined.
- **package.json**: Contains project metadata, dependencies, and scripts.
- **tsconfig.json**: TypeScript configuration file used for setting up aliases and type support.
- **README.md**: Documentation about your project, including installation and usage instructions.

### Disabling DevTools
Astro includes developer tools to help you build and debug your project. However, I find them distracting when I want to focus on my code. To disable the developer tools, you can modify the Astro configuration file, *astro.config.mjs*. Add the following line inside the configuration object:
```js
devToolbar: {
    enabled: false
},
```

## Run the Project
To start your Astro project, open a terminal and run the following command:
```sh
npm run dev
```

This will launch a local development server, usually available at http://localhost:4321/. You can visit this URL in your browser to preview your site. As you make changes to the source files, Astro will automatically reload the page to reflect updates in real-time. When you first open the project, you'll see a basic homepage with a welcome message, similar to this:
![Astro Homepage](/assets/astro-guide/Homepage.webp)

## Layouts, Components, and Pages
Astro follows a structured approach to building web pages using three core concepts: **layouts**, **components**, and **pages**. Understanding how these elements work together will help you create well-organized and maintainable projects.

- **Layouts**: Layouts act as templates that provide a consistent structure for multiple pages. They typically contain shared elements such as headers, footers, and navigation bars. By defining a layout, you can ensure that all pages using it maintain a uniform design without duplicating code.
- **Components**: Components are reusable UI elements that help break a website into smaller, manageable parts. They can be used for elements like buttons, forms, or cards that appear in multiple places within a site. This modular approach enhances code reusability and makes maintenance easier.
- **Pages**: Pages represent the actual routes of your website, such as the homepage, about page, or blog posts. Each .astro file inside the pages/ directory automatically becomes a route, making it simple to structure your site's content.

By combining layouts, components, and pages, Astro allows developers to create dynamic, scalable websites with minimal effort.

## Building Your Astro Project

Astro's modular approach allows you to efficiently manage different aspects of your project. Let's explore how to create new pages, components, and layouts while linking them together.

### Add a New Page

A page in Astro is simply an *.astro* file placed inside the *src/pages/* directory. To create an About page, add a new file *src/pages/about.astro* with the following content:

```astro
---
---
<h1>About Page</h1>
```


This page is now automatically accessible via *http://localhost:4321/about* when running the development server.
![About Page](/assets/astro-guide/AboutPage.webp)

### Add a New Component

Components help break down your site into reusable parts. For example, let's create a simple component by adding *src/components/Title.astro*:

```astro
---
export let text;
---
<h1>This is my first component</h1>
```

Now, you can use this component in your About page by importing it and passing a prop:

```astro
---
import Title from '../components/Title.astro';
---
<Title/>
```
### Add a New Layout

Layouts provide a consistent structure across multiple pages. A typical layout includes common elements such as headers and footers. Create `src/layouts/MainLayout.astro`:

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

Now, to use this layout in our About page, we modify `src/pages/about.astro`:

```astro
---
import MainLayout from '../layouts/MainLayout.astro';
---
<MainLayout title="About">
  <h1>About Page</h1>
</MainLayout>
```

This ensures all pages using `MainLayout.astro` share the same structure, making maintenance easier.

## Server-Side Rendering (SSR)

Astro supports SSR, allowing pages to be generated dynamically rather than at build time. To enable SSR, modify `astro.config.mjs`:

```js
export default {
  output: 'server',
};
```

With SSR, you can fetch data dynamically and render content at runtime, providing flexibility for applications that rely on APIs or databases.

## Add a New Static Route

Static routes are simple pages that do not change dynamically. Create a new file, `src/pages/static.astro`:

```astro
---
---
<h1>Static Route</h1>
```

This page will be available at `http://localhost:4321/static`.

## Add a New Page with a Dynamic Route

Dynamic routes allow pages to generate content based on parameters. To create a dynamic blog post route, add `src/pages/post/[id].astro`:

```astro
---
export async function getStaticPaths() {
  return [{ params: { id: '1' } }, { params: { id: '2' } }];
}
const { id } = Astro.props;
---
<h1>Post {id}</h1>
```

This will create two routes: `/post/1` and `/post/2`. The `getStaticPaths` function tells Astro which pages to generate at build time. If you need runtime-generated pages, you can use SSR instead.

By combining static and dynamic routing, layouts, and components, Astro gives you a powerful yet simple way to structure your projects efficiently.

```astro
---
export async function getStaticPaths() {
  return [{ params: { id: '1' } }, { params: { id: '2' } }];
}
const { id } = Astro.props;
---
<h1>Post {id}</h1>
```
