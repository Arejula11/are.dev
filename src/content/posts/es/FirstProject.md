---
title: "Comienza tu primer proyecto Full stack"
description: "En este post, compartiré mis recomendaciones para desarrollar tu primer proyecto full-stack; combinando tecnologías tanto de front-end como de back-end para crear una aplicación completamente funcional."
tags: ["Aprendizaje"]
publishedDate: "2025-03-9 13:00"
coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "es"
keywords: ["React", "Node.js","Express", "MongoDB", "full-stack", "front-end", "back-end", "web", "primer proyecto", "Trello", "GitHub Projects", "Postman", "Figma", "Nginx", "React Router", "version control", "GitHub", "branches", "pull requests"]
---


Hace un año desarrollé mi primer proyecto web. Fue un verdadero desafío, pero me enseñó mucho sobre el desarrollo full-stack. Aquí, quiero compartir mi experiencia y las lecciones que aprendí, espero ayudar a otros a comenzar su primer proyecto full-stack. Aquí podrás aprender a elegir las tecnologías adecuadas y gestionar tu equipo de manera efectiva.

Tuvimos que desarrollar un sistema web para un proyecto de la universidad. Nuestros profesores nos pidieron que desarrollaramos un sistema web funcional completo sin apenas proporcionarnos una guía clara, por lo que tuvimos que construir todo desde cero. Comenzamos haciendo una lluvia de ideas. Al principio, estabamos perdidos, así que decidimos elegir un tema que a todos nos gustara. Como a todos nos gustaba hacer ejercicio, pensamos en el tipo de aplicación web que nos gustaría usar durante nuestros entrenamientos. Después de varias sesiones de lluvia de ideas y descartar muchas ideas, finalmente elegimos crear FitLife: una red social donde los usuarios pueden compartir sus entrenamientos y hacer un seguimiento de su progreso. Mirando hacia atrás, creo que esta fue una excelente manera de comenzar un proyecto: elige algo que te apasione, ya que te mantendrá motivado durante todo el proceso.

El siguiente paso fue elegir las tecnologías que ibamos a utilizar. Nosotros decidimos usar React para el front end, Node.js y Express para el back end, y MongoDB para la base de datos. Teníamos algo de experiencia con estas tecnologías, por lo que nos sentimos relativamente cómodos usándolas. Sin embargo, como éramos nuevos en el desarrollo full-stack, tuvimos que aprender mucho en el camino. Si estás comenzando tu primer proyecto full-stack, te recomiendo estas tecnologías. Son ampliamente utilizadas, tienen una documentación extensa y son fáciles de usar.

A parte de estas tecnologías principales, dos herramientas que fueron esenciales para el desarrollo del proyecto fueron: Postman y Figma. Postman nos ayudó a probar nuestra API y asegurarnos de que funcionara correctamente, mientras que Figma nos permitió diseñar el sitio web y tener una guía visual clara. Ninguna de estas herramientas requiere conocimientos previos, por lo que son fáciles de aprender y usar de manera efectiva.


Una vez que elegimos nuestro stack tecnológico y las herramientas de diseño, era momento de pasar a la fase de desarrollo. Uno de nuestros primeros errores fue no dividir el trabajo correctamente. En lugar de asignar roles específicos, todos intentamos trabajar tanto en el front-end como en el back-end simultáneamente. Aunque esto nos ayudó a aprender un poco sobre ambos lados del desarrollo, a menudo provocó confusión y tareas superpuestas.

Para evitar esto, recomiendo encarecidamente definir un líder de equipo y dividir el grupo en desarrolladores de front-end y back-end. El líder del equipo debería desglosar el proyecto en tareas, y los miembros del equipo pueden elegir sus tareas en consecuencia. Para gestionar este proceso de manera efectiva, utiliza Trello o GitHub Projects. Estas herramientas te permiten crear tableros de tareas, seguir el progreso y mantener a todos organizados. Si tu proyecto está almacenado en GitHub, GitHub Projects es especialmente útil ya que se integra directamente con tu repositorio, evitando tener que gestionar múltiples plataformas. Una gran característica de GitHub Projects es la capacidad de crear issues y asignarlas a los miembros del equipo, ayudando a todos a mantenerse al tanto de sus tareas y a rastrear errores o problemas a medida que surjan.
![Github projects](/assets/Backlog.png)

Después de completar la fase de desarrollo, el siguiente paso fue el despliegue. Creamos un contenedor Docker para servir la aplicación web y elegimos Nginx, una opción popular para servir aplicaciones de React. Sin embargo, durante el despliegue aparecieron nuevos desafíos. Uno de los problemas más frustrantes fue que React Router dejaba de funcionar cada vez que actualizábamos el navegador, causando un error 404. En ese momento, no supimos cómo solucionarlo. No fue hasta un año después que aprendí la solución: configurar Nginx con un archivo nginx.conf para manejar correctamente las rutas. Lamentablemente, en ese entonces, no teníamos ese conocimiento.

Un año después, al mirar atrás, puedo ver claramente los errores que cometimos y las prácticas que podríamos haber mejorado. Por eso, quiero compartir lo que haría de manera diferente si comenzara mi primer proyecto full-stack nuevamente.

El primer paso que debes dar es definir de forma clara y precisa los requisitos del proyecto. No es necesario seguir un formato estricto si no estás familiarizado con uno, pero es crucial delinear exactamente lo que planeas desarrollar; ni más, ni menos. Esto mantiene al equipo enfocado y evita que se añadan características innecesarias. Además, es muy importante conocer cuáles son tus capacidades y no intentar hacer cosas complejas si no tienes las herramientas adecuadas. Nosotros intentamos desarrollar algunos componentes complejos que nos hicieron perder mucho tiempo, cuando podríamos haber hecho cosas más simples y útiles.

Una de las lecciones más importantes que aprendí fue el valor de utilizar un sistema de control de versiones de manera efectiva. Aunque habíamos usado GitHub antes, nunca habíamos trabajado con ramas o pull requests, por lo que nuestra primera experiencia con ellos fue bastante caótica. Recomiendo encarecidamente usar ramas y pull requests desde el principio; esto facilitará la colaboración y evitará mucha confusión. Si no estás familiarizado con estos conceptos, tómate el tiempo de aprenderlos antes de comenzar tu proyecto. Es una pequeña inversión que te ahorrará muchos problemas más adelante.

Por último, pero no menos importante, sugiero crear una imagen de Docker para desarrollar tu proyecto. Esto te ayudará a tener el mismo entorno en todas las computadoras de tu equipo y a evitar problemas con las dependencias. También facilitará el despliegue de tu proyecto en el futuro. Si no estás familiarizado con Docker, puedes utilizar mi *templateExpress* en mi cuenta de GitHub, que es un ejemplo sencillo de cómo crear una imagen Docker para un proyecto de Node.js e integrarlo con Visual Studio Code. Puedes encontrarlo [aquí](https://github.com/Arejula11/templateExpress) y seguir las instrucciones en el archivo README.

Al mirar atrás, mi primer proyecto full-stack fue una experiencia desafiante pero invaluable. Me enseñó no solo a utilizar tecnologías como React, Node.js y MongoDB, sino también la importancia de planificar, colaborar y adaptarse. Aunque cometimos muchos errores, desde requisitos poco claros hasta un control de versiones caótico, cada obstáculo nos empujó a aprender y crecer.

Si pudiera dar un consejo a alguien que está comenzando su primer proyecto full-stack, sería este: concéntrate en lo básico, define objetivos claros y abraza el proceso de aprendizaje. Utiliza herramientas como GitHub Projects o Trello para mantenerte organizado, domina el control de versiones desde el principio y no compliques demasiado tu código. El progreso suele venir de pasos simples y constantes, más que de perseguir la complejidad.