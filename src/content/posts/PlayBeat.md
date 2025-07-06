---
title: "PlayBeat: Music Collaboration Platform"
description: "PlayBeat is a full-stack web application designed to facilitate music collaboration among artists. Built with Astro, Express, PostgreSQL and Azure. It offers features like real-time playlist management, upload and sharing of music files and a user-friendly interface for artists to connect and collaborate."
tags: ["Portfolio"]
publishedDate: "2025-07-2 17:00"
coverImage: "/assets/playbeat/home.png"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "en"
keywords: ["astro", "oauth", "google", "github", "authentication", "login", "portfolio", "playbeat", "music", "web development", "web app", "full stack", "astro framework", "node.js", "express", "api", "music collaboration", "playlist management", "postgresql", "azure", "real-time", "file upload", "sharing", "user interface", "artists"]
---

Here’s a polished, English blog post draft for **PlayBeat**, tailored to highlight that it's your first full‑stack project, developed in collaboration with seven teammates as part of a university course:

---


PlayBeat is a full-stack web application I developed with seven classmates during our “Proyecto Software” course at the University of Zaragoza (Spring 2024). The frontend is built with Astro and deployed on Vercel, while the backend uses Express and PostgreSQL, deployed on Azure. The platform enables artists to collaborate on playlists in real-time, upload and share music tracks and connect through an intuitive interface.

All the code is available in our group GitHub organization: [UNIZAR-30226-2024-03](https://github.com/UNIZAR-30226-2024-03)

Although the assignment only required a basic web music platform, we decided to go further and build a fully functional full-stack application with real-time features and cloud deployment. Our goal was to create a tool that fosters musical collaboration among artists and we believe PlayBeat takes a solid step in that direction.

This was our first full-stack project and it turned out to be a great learning experience. We worked with new technologies like Astro, Express, PostgreSQL and Azure and also learned how to function effectively as a team. My role focused on leading the frontend development: I implemented the user interface and developed the real-time playlist management system. I also worked on the authentication system (Google and GitHub OAuth) and handled the deployment of the frontend to Vercel.

To manage our workflow, we used **GitHub Projects** to organize tasks and **GitHub Actions** to automate our CI/CD pipeline, which streamlined deployment to Azure. 

Overall, PlayBeat was a rewarding project that helped us build real-world skills in modern web development, collaboration and cloud infrastructure. We're proud of what we created.

![Home Page](/assets/playbeat/webImg.png)

##  Features & Functionality

While PlayBeat started as a music streaming prototype, we went beyond the initial scope to include powerful collaborative and social features. Here are some of the most notable:

###  Real-Time Playlist Collaboration

Using **WebSockets**, users can co-edit playlists in real time. All changes, adding, removing, or reordering tracks, are instantly reflected across devices for all collaborators. This works similarly to collaborative editing tools, but for music.

###  Music Upload & Tagging

Artists can upload audio files (songs or podcasts) through a web interface and tag them with metadata like genre, type, or theme. Files are stored in **Azure Blob Storage** and served with support for streaming. Uploads are only available from the web app, not the mobile client.

###  Social Features

PlayBeat lets users:

* Follow other artists
* View public playlists and songs
* Share playlists through special links (which can grant edit access)

###  Authentication & Profiles

We implemented secure login using **OAuth with Google and GitHub** and a custom email/password system. Profiles support:

* Profile picture updates
* Private/public toggle for songs/playlists
* Admin accounts with moderation capabilities

###  Smart Features

We also added more advanced functionality, such as:

* **Infinite Mode**: A continuous stream of recommended music based on listening history.
* **Auto-generated Playlists**: Curated lists created from tags and user behavior (e.g. “Top 10 Global”).
* **User & Track Stats**: Web dashboard showing play counts, listeners and historical trends.


##  Architecture

PlayBeat is composed of three main components:

1. **Web Client**: Built with Astro (and Vue/Svelte/React components), deployed on **Vercel**. It handles most user interactions and playlist editing.
2. **Mobile App**: Developed with **React Native**, packaged as an APK. While more limited in upload features, it supports playback, following and editing playlists.
3. **Backend Server**: A monolithic **Node.js + Express** application with REST API and WebSocket server, containerized with Docker and deployed on **Azure**. PostgreSQL handles persistent data, also hosted on Azure.

We used **Prisma** as the ORM for smooth database integration and **Swagger** for live API documentation.


##  Challenges Faced

Building PlayBeat wasn't without roadblocks. Some highlights:

* **WebSockets at scale**: Coordinating real-time sync between multiple clients was new for most of us. Learning *socket.io* and managing state efficiently took time.
* **OAuth integrations**: Handling sessions and user flows securely with multiple auth providers added complexity.
* **Astro limitations**: While fast and modern, Astro’s static nature made it tricky to handle some dynamic features like conditional rendering and complex form states.
* **Mobile learning curve**: We were new to React Native and setup (especially for local testing and builds) was slow at first. Still, it paid off in cross-platform flexibility.


## Deployment Pipeline

We used **GitHub Actions** to automate testing and deployment:

* Frontend is deployed via **Vercel**, which provides preview environments for each pull request.
* Backend is hosted on **Azure** using Docker containers. We configured system services to auto-restart containers after crashes or restarts.
* PostgreSQL and file storage are also hosted in Azure, with security and access control policies in place.


## Final Thoughts

PlayBeat was the first full-stack application I built and it was a massive leap in both technical knowledge and teamwork. Working with seven other people, each specializing in different parts (mobile, backend, web) taught me:

* The value of clear interfaces between modules
* The importance of good CI/CD practices and testing
* That solid project management can make or break even a good idea

Do not forget to explore the full project on [GitHub](https://github.com/UNIZAR-30226-2024-03).

