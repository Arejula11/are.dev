---
title: "My first Full stack project"
description: "In this post, I share my journey of building my first full-stack project; combining both front-end and back-end technologies to create a fully functional application."
tags: ["Portfolio"]
publishedDate: "2025-03-9 13:00"
coverImage: "/assets/fitlife.png"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: true
language: "en"
keywords: ["Portfolio", "React", "Node.js","Express", "MongoDB", "full-stack", "front-end", "back-end", "web"]
---

One year ago, I developed my first web project. I didn't work on it alone, but none of us had any prior experience, so it was a real challenge. Our professors asked us to develop a functional web system without providing a clear guide, so we had to build everything from scratch. We started by brainstorming ideas. At first, we felt lost, so we decided to pick a topic we all enjoyed. Since we all liked exercising, we thought about the kind of website we would like to use during our workouts. After several brainstorming sessions and discarding many ideas, we finally chose to create FitLife; a social network where users can share their workouts and track them while training.

With the idea set, the next step was to define the system architecture and create an interface prototype. Two members of the group had basic knowledge of React, so we decided to use this framework for the front end. For the back end, we knew that Node.js and Express were popular choices for building RESTful APIs. Although some friends recommended PostgreSQL since we had learned SQL the previous semester, we opted for MongoDB, believing it would better suit our simple project and data structure. To design the interface, we chose Figma as our main tool.

Once we had our tech stack and design tools chosen, we moved on to the development phase. One of our first mistakes was not dividing the work properly. Instead of assigning some members to focus on the front end and others on the back end, we all tried to work on everything at once. While this helped us learn a bit about both sides of development, it often led to confusion and overlapping tasks.

We kept developing, but we faced problems constantly, solving them as quickly as we could. After three months of hard work, we finally finished the web application. The next step was deploying it in a container, and we chose Nginx, a common choice for serving React apps. However, deployment brought new challenges. The most frustrating issue was that React Router broke whenever we refreshed the browser, resulting in a 404 error. At the time, we couldn’t figure out how to fix it.

It wasn’t until a year later that I learned the solution; we simply needed to configure Nginx with a nginx.conf file to handle the routing correctly. Unfortunately, back then, we didn’t have that knowledge.

We managed to finish the project, and the result was quite good considering the knowledge we had when we started.

A year later, looking back, I can clearly see the mistakes we made and the practices we could have improved. In this post, I want to share what I would do differently if I were to start my first full-stack project again.

The first step is to clearly and accurately define the project requirements. There’s no need to follow a strict format if you’re unfamiliar with one, but it’s crucial to outline exactly what you plan to develop; no more, no less. This keeps the team focused and prevents unnecessary features from creeping in.

Equally important is defining team roles from the start. I recommend appointing a team leader and dividing the group into front-end and back-end developers. Once the roles are assigned, the leader should break the project into tasks, and team members can then choose the tasks they want to work on.

To manage this process effectively, I suggest using Trello or GitHub Projects. These tools allow you to create boards with tasks, track progress, and keep everyone organized, ensuring the workflow remains clear and collaborative.

Also is so important to know what are your capabilities and not try to do complex things if you do not have the tools. We aimed to do some complex components which make us lose a lot of time and we could have done simpler things that would have been more useful.

One of the most important lessons I learned was the value of using a version control system effectively. Although we had used GitHub before, we had never worked with branches or pull requests, so our first experience with them was quite chaotic. I highly recommend using branches and pull requests from the very beginning, it will make collaboration smoother and prevent a lot of confusion. If you're not familiar with these concepts, take the time to learn them before starting your project. It’s a small investment that will save you a lot of trouble later on.

Looking back, my first full-stack project was a challenging but invaluable experience. It taught me not only how to use technologies like React, Node.js, and MongoDB but also how crucial it is to plan, collaborate, and adapt. While we made plenty of mistakes, from unclear requirements to chaotic version control, each obstacle pushed us to learn and grow.

If I could give one piece of advice to anyone starting their first full-stack project, it would be this: focus on the basics, define clear goals, and embrace the learning process. Use tools like GitHub Projects or Trello to stay organized, master version control early on, and don’t overcomplicate your code. Progress often comes from simple, steady steps rather than chasing complexity.