---
title: "La configuración de mi terminal"
description: "Mis ajustes del terminal para aumentar la productividad y mejorar su apariencia"
tags: ["Configuración"]
publishedDate: "2025-03-03 15:00"
coverImage: "/assets/MyTerminal.webp"
galleryImages: []
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "es"
video: "https://www.youtube.com/embed/TQ3G9RHcuNw?si=1xsfPXaIYt0bSy8x"
videoTitle: "Boost Your Productivity: My Pro Terminal Configuration"
keywords: ["Terminal", "Configuración", "Productividad", "Warp", "iTerm2", "Alias", "Color Prompt", "Chezmoi"]
---

El terminal es una de las herramientas  esenciales para cualquier desarrollador de software. Permite interactuar con tu computadora, automatizar tareas y gestionar entornos de desarrollo de manera eficiente. Sin embargo, usar el terminal de forma efectiva va más allá de los comandos básicos: implica configurarlo y personalizarlo para adaptarlo a tu flujo de trabajo.

En esta publicación, compartiré mis configuraciones personales del terminal.

## Elegir la Aplicación de Terminal Adecuada

El primer paso para construir un entorno de terminal eficiente es seleccionar la aplicación de terminal correcta. Si eres usuario de macOS, recomiendo encarecidamente dejar de usar la aplicación Terminal predeterminada. Aunque es funcional, carece de la flexibilidad y las funciones avanzadas que ofrecen las alternativas modernas.

Con el tiempo, he utilizado varias aplicaciones distintas de terminal. Comencé con **iTerm2**, una opción popular conocida por su versatilidad y opciones de personalización. Sin embargo, recientemente cambié a **Warp**, un nuevo terminal potenciado por IA.

¿Por qué elegí **Warp**?
- **Integración con IA**: La asistencia de IA integrada de Warp ayuda a generar comandos, depurar errores y optimizar flujos de trabajo.
- **Interfaz moderna**: La interfaz es limpia, intuitiva y diseñada para la productividad.
- **Velocidad y eficiencia**: Es notablemente rápido, con funciones como autocompletado y agrupación de comandos.


Tanto **iTerm2** como **Warp** son mejoras significativas respecto al terminal predeterminado de macOS, pero he descubierto que **Warp** se adapta mejor a mi flujo de trabajo.

## Personalización del terminal

Una vez que hayas elegido una aplicación de terminal, el siguiente paso es personalizarla. Una configuración efectiva puede ahorrar tiempo y facilitar la navegación en tu terminal.

### Creación de Alias
Una de las configuraciones con mayor impacto es el uso de **alias**. Los alias te permiten crear atajos para comandos que usas con frecuencia, reduciendo las pulsaciones de teclas y mejorando la eficiencia.

Por ejemplo, en lugar de escribir el comando completo para ir a un directorio de proyecto:

```bash
cd Documents/MyProject
```
Puedes crear un alias así:
```bash
alias myproject='cd Documents/MyProject'
```

Ahora, simplemente escribiendo miproyecto, ejecutarás el comando. Este pequeño ajuste puede tener un gran impacto a lo largo del tiempo, especialmente cuando se trata de comandos largos o repetitivos.

### Colorear el Prompt del Terminal

Cuando comencé a usar el terminal, me resultaba difícil distinguir rápidamente entre comandos exitosos y fallidos. Para solucionar esto, personalicé el prompt de mi terminal para que cambie de color según el estado de salida del último comando.

La siguiente configuración establece el color del prompt en verde cuando un comando tiene éxito y en rojo cuando falla:
```bash 
PROMPT='%B%(?.%F{green}%n .%F{red}%n )%f%b %B%F{27}%1~%f%b '
``` 

**Explicación:**

- %B: Hace el texto en negrita.
- %(?.... ...): Verifica el estado de salida del último comando (?).
- %F{green} y %F{red}: Establecen el color del texto en verde o rojo, según el resultado.
- %n: Muestra el nombre del usuario actual.
- %1~: Muestra el directorio actual, truncado a un nivel.

Este pequeño pero efectivo ajuste me permite identificar instantáneamente si un comando tuvo éxito o falló, facilitando la detección de errores sin tener que revisar los registros del terminal.

## Respaldar las Configuraciones de tu Terminal

Personalizar tu terminal lleva tiempo y esfuerzo, por lo que es crucial asegurarse de que tus configuraciones estén respaldadas de forma segura. Una forma efectiva de hacerlo es almacenarlas en un repositorio remoto, como un repositorio de GitHub. Esto no solo protege tus ajustes ante una posible pérdida de datos, sino que también te permite restaurar rápidamente tu configuración personalizada al reiniciar tu disco o cambiar a una nueva máquina.

Al mantener tu *.bashrc*, *.zshrc* o cualquier script personalizado en un repositorio con control de versiones, puedes rastrear cambios, compartir configuraciones entre dispositivos y colaborar con otros. También simplifica el proceso de reconfiguración de tu terminal: con un simple *git clone*, puedes tener todo tu entorno listo en cuestión de minutos.

Recomiendo mucho crear un repositorio dedicado para tus configuraciones del terminal. Si deseas ver mis ficheros de configuración, puedes encontrarlos [aquí](https://github.com/Arejula11/dotfiles).

Recientemente me han recomendado una herramienta llamada **chezmoi**, esta permite gestionar los ficheros de configuración, conocidos como  *.dotfiles*, entre diversas máquinas de una forma rápida y sencilla. Promete poder descargar e instalar estos ficheros de configuración de una forma rápida y sencilla. Sin duda es una herramienta que reduce significativamente el tiempo de configuración de un nuevo entorno y que estoy deseando probar pronto. Si quieres saber más, puedes leer su documentación oficial [aquí](https://www.chezmoi.io/#should-i-use-chezmoi).

Si quieres ver mi terminal en acción, te invito a ver el video que en YouTube.