---
title: "AgroNET: Smart Agriculture Platform"
description: "AgroNET is a full-stack web application designed to modernize agricultural practices through smart features and real-time data integration. Built with Astro, Node.js, and AWS, it offers crop management, weather tracking, and community forums for farmers and agronomists."
tags: ["Portfolio"]
publishedDate: "2025-05-25 17:00"
coverImage: "/assets/agronet/landing.webp"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "en"
keywords: ["astro", "oauth", "google", "github", "authentication", "login", "portfolio", "agronet", "agriculture", "web development", "web app", "full stack", "astro framework", "node.js", "express", "api", "agronomy", "agricultural technology"]
---


AgroNET is one of my final university projects, developed alongside three incredibly talented teammates: [Pablo Angusto](https://github.com/pabloangusto), [Carlos de Vera](https://github.com/carloss4dv), and [Alain Villagrasa](https://github.com/Str1ien). Together, we set out to create a modern web platform that could help transform the agricultural sector—an industry often underserved by technology. Our aim was to build a solution that delivers real value to farmers and agronomists through smart features and an intuitive user experience.

This project was born from a shared vision: to simplify and modernize agricultural work through cloud-native tools and thoughtful design. From day one, we prioritized building a scalable, full-stack platform with a responsive frontend and a robust backend, all while integrating real-time data from external sources such as weather services and agricultural databases.

For the frontend, we chose **Astro**, leveraging its static-first architecture with interactive **React** components where needed. The backend was built with **Node.js**, **Express**, and **TypeScript**, forming a solid API to manage user data, crop tracking, and integration with third-party services. Authentication was handled via **Auth.js**, supporting secure OAuth login with both Google and GitHub.

But AgroNET is more than just a sleek interface. Behind the scenes, it connects to a real-time weather API, fetches historical market data, and integrates mapping services to let users visualize their crop fields. We utilized several key data sources:

* **[AEMET API Unofficial](https://github.com/carloss4dv/aemet_api_wrapper_unofficial)** for weather forecasts in Spain.
* **[Agro Precios](https://github.com/carloss4dv/agro-precios)** for agricultural market prices.
* **[NASA POWER for Agriculture Spain](https://github.com/carloss4dv/nasa-power-for-agriculture-spain)** for environmental data.
* **[WMS Spanish Cadastral Service](https://www.catastro.hacienda.gob.es/esp/wms.asp)** for geospatial parcel data.

### Infrastructure

To support scalability and availability, AgroNET was deployed across three availability zones in AWS's *eu-north-1* region using a layered architecture managed via **CloudFormation**.

![AgroNET Architecture Diagram](/assets/agronet/infra.jpeg)

Instead of containers, we opted for **EC2 instances** to stay within the AWS free tier and avoid reliability issues previously encountered with Docker-based load balancing. Auto Scaling Groups (one per zone) respond dynamically to CPU usage, scaling out at 70% and scaling in at 30%, with cooldown timers to prevent excessive scaling.

Traffic is routed through **Network Load Balancers**, using health checks and dynamic instance registration to ensure high availability and fault tolerance.

Security is enforced through strict **IAM** roles, and secrets such as GitHub tokens are securely managed via **AWS Secrets Manager**, stored on disk with limited permissions. System services are managed with systemd, with hardened configurations to prevent privilege escalation. Logs are centralized using journald.

For file storage, image uploads are handled through a dedicated **S3 bucket** accessed via **private VPC endpoints**, ensuring both performance and security.

Deployment is fully automated. Each EC2 instance installs its dependencies, clones the repository, configures itself according to its zone, and launches the Astro frontend as a hardened system service. Monitoring is handled with **CloudWatch**, and alerts are delivered via **SNS**, giving us full visibility into infrastructure health.

This setup keeps AgroNET fast, secure ready to grow without sacrificing control.

### Features & User Experience

AgroNET offers a comprehensive experience for agricultural professionals. Users can register, log in securely, and manage their crops with detailed field data and product tracking. The interface is fully responsive, making it equally functional in the office or out in the field.

![AgroNET Map](/assets/agronet/mapa.webp)

Key features include:

* **Interactive Maps**: View crop fields with weather overlays and cadastral boundaries.
* **Community Forums**: Connect, ask questions, and share insights with other users.
* **Market Dashboard**: Analyze historical price data to make informed sales decisions.
* **Admin Tools**: Moderators and administrators can manage users, content, and the overall platform from a custom dashboard.

### Problems Solved
During development, we encountered several challenges that pushed us to innovate:
* **Data Consistency**: Ensuring that real-time data from external APIs was consistent and reliable. We implemented caching strategies and fallback mechanisms to handle API outages gracefully.
* **User Authentication**: Integrating OAuth securely while providing a seamless login experience. We used Auth.js to handle token management and session persistence.
* **Responsive Design**: Creating a user-friendly interface that works well on both desktop and mobile devices. We utilized Astro's component model to build reusable UI elements that adapt to different screen sizes.
* **Scalability**: Designing an infrastructure that could handle varying loads without downtime. Our use of AWS Auto Scaling Groups and Network Load Balancers ensured that AgroNET could scale efficiently based on user demand.


### Lessons Learned

Building AgroNET taught us much more than just programming. We learned how to manage complex infrastructure, handle unreliable external APIs, and work collaboratively across a large, evolving codebase. Most importantly, we saw how technology, when thoughtfully applie, can bring meaningful change to a traditionally underserved industry.

We faced challenges, such as ensuring data consistency across multiple services and maintaining a responsive user experience while integrating real-time data. But through teamwork and perseverance, we built a platform that not only meets our initial goals but also has the potential to grow and adapt to future needs.


If you’re interested in the codebase, infrastructure, or just want to see how a full-stack project like this comes together, feel free to explore our work at [github.com/STW-24-25](https://github.com/STW-24-25). AgroNET is more than a university project—it’s a reflection of our shared passion for building tools that matter.  Thaks again to my teammates for their hard work and dedication. AgroNET is a testament to what we can achieve when we combine our skills and vision.

