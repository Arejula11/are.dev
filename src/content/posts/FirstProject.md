---
title: "Start your first Full stack project"
description: "In this post, I share my recommendation to build your first full-stack project; combining both front-end and back-end technologies to create a fully functional application."
tags: ["Learning"]
publishedDate: "2025-03-9 13:00"
coverImage: "/assets/fitlife.png"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "en"
keywords: ["React", "Node.js","Express", "MongoDB", "full-stack", "front-end", "back-end", "web", "first project", "Trello", "GitHub Projects", "Postman", "Figma", "Nginx", "React Router", "version control", "GitHub", "branches", "pull requests"]
---

One year ago, I developed my first web project. It was a real challenge, but it taught me a lot about full-stack development. Here, I want to share my experience and the lessons I learned, hoping it will help others starting their first full-stack project. From choosing the right technologies to managing your team effectively, I’ll cover the key steps to make your project a success.

We had to develop a website for a university project. Our professors asked us to create a functional web system without providing a clear guide, so we had to build everything from scratch. We started by brainstorming ideas. At first, we felt lost, so we decided to pick a topic we all enjoyed. Since we all liked exercising, we thought about the kind of website we would want to use during our workouts. After several brainstorming sessions and discarding many ideas, we finally chose to create FitLife—a social network where users can share their workouts and track their progress. Looking back, I believe this was a great way to start a project: choose something you are passionate about, as it will keep you motivated throughout the process.

The next step was to choose the technologies we would use. We decided on React for the front end, Node.js and Express for the back end, and MongoDB for the database. We had some experience with these technologies, so we felt relatively comfortable using them. However, since we were new to full-stack development, we had to learn a lot along the way. If you’re starting your first full-stack project, I recommend these technologies. They are widely used, have extensive documentation, and are beginner-friendly.

In addition to these core technologies, two tools proved essential for our workflow: Postman and Figma. Postman helped us test our API and ensure it worked correctly, while Figma allowed us to design the website and have a clear visual guide. Neither tool requires prior knowledge, making them easy to pick up and use effectively.

Once we had our tech stack and design tools chosen, it was time to move on to the development phase. One of our first mistakes was not dividing the work properly. Instead of assigning specific roles, we all tried to work on both the front end and back end simultaneously. While this helped us learn a bit about both sides of development, it often led to confusion and overlapping tasks.

To avoid this, I highly recommend defining a team leader and dividing the group into front-end and back-end developers. The team leader should break the project into tasks, and team members can choose their tasks accordingly. To manage this process effectively, use Trello or GitHub Projects. These tools allow you to create task boards, track progress, and keep everyone organized. If your project is stored in GitHub, GitHub Projects is particularly useful as it integrates directly with your repository, so you do not have to juggle multiple platforms. A great feature of GitHub Projects is the ability to create issues and assign them to team members, helping everyone stay on top of their tasks and track bugs or problems as they arise.
![Github projects](/public/assets/Backlog.png)

After completing the development phase, the next step is deployment. We chose Nginx, a popular option for serving React apps. However, deployment brought new challenges. One of the most frustrating issues was that React Router would break whenever we refreshed the browser, causing a 404 error. At the time, we couldn’t figure out how to fix it. It wasn’t until a year later that I learned the solution: configuring Nginx with an nginx.conf file to handle routing correctly. Unfortunately, back then, we didn’t have that knowledge

A year later, looking back, I can clearly see the mistakes we made and the practices we could have improved. Hence, I want to share what I would do differently if I were to start my first full-stack project again.

The first step you must take is to clearly and accurately define the project requirements. There is no need to follow a strict format if you are unfamiliar with one, but it is crucial to outline exactly what you plan to develop; no more, no less. This keeps the team focused and prevents unnecessary features from creeping in. Also is so important to know which are your capabilities and not try to do complex things if you do not have the tools. We aimed to do some complex components which make us lose a lot of time and we could have done simpler things that would have been more useful.

One of the most important lessons I learned was the value of using a version control system effectively. Although we had used GitHub before, we had never worked with branches or pull requests, so our first experience with them was quite chaotic. I highly recommend using branches and pull requests from the very beginning, it will make collaboration smoother and prevent a lot of confusion. If you are not familiar with these concepts, take the time to learn them before starting your project. It’s a small investment that will save you a lot of trouble later on.

Last but not least, I suggest you to create a docker image to develop your project. This will help you to have the same environment in all the computers of your team and avoid problems with dependencies. It will also help you to deploy your project in the future. If you are not familiar with Docker, you can use my *templateExpress* on my Github account, which is a simple example of how to create a docker image for a Node.js project and is integrated with Visual Studio Code. You can find it [here](https://github.com/Arejula11/templateExpress) and follow the instructions in the README file.

Looking back, my first full-stack project was a challenging but invaluable experience. It taught me not only how to use technologies like React, Node.js, and MongoDB but also how crucial it is to plan, collaborate, and adapt. While we made plenty of mistakes, from unclear requirements to chaotic version control, each obstacle pushed us to learn and grow.

If I could give one piece of advice to anyone starting their first full-stack project, it would be this: focus on the basics, define clear goals, and embrace the learning process. Use tools like GitHub Projects or Trello to stay organized, master version control early on, and don’t overcomplicate your code. Progress often comes from simple, steady steps rather than chasing complexity.