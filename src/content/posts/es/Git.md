---
title: "Git: La Guía Básica para Principiantes"
description: "Aprende a usar Git desde cero con esta guía básica. Conoce los conceptos fundamentales y cómo integrarlo con GitHub y VSCode."
tags: ["Aprendizaje"]
publishedDate: "2025-04-27 18:00"
coverImage: "/assets/git/miniatura.png"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: true
video: "https://www.youtube.com/embed/qRirdnD5TM4"
videoTitle: "Curso básico de Git: Todo lo que necesitas saber en un solo vídeo [ES]"
language: "es"
keywords: ["Git", "Guía", "Guía Básica", "GitHub", "VSCode","Conceptos Básicos"]
---

Si estás dando tus primeros pasos en el mundo del desarrollo de software, seguramente ya te has cruzado con la palabra Git; tal vez en un tutorial, en una oferta de trabajo o en una discusión intensa en Stack Overflow. Pero, ¿qué es exactamente Git y por qué todo el mundo lo considera tan fundamental? Ya sea que estés creando tu primera aplicación o colaborando en un proyecto en equipo, entender Git puede marcar un antes y un después. En este post, vamos a desglosarlo desde cero sin tecnicismos innecesarios ni suposiciones solo las herramientas y conceptos que realmente necesitas para empezar a usar Git como un profesional.
## ¿Qué es Git?

Git es como una máquina del tiempo para tu código. Es un sistema de control de versiones distribuido que te permite rastrear cambios, colaborar con otros sin sobrescribir el trabajo de los demás y volver a estados anteriores de tu proyecto cuando sea necesario.

## ¿Por qué usar Git?
Git es esencial para cualquier desarrollador por varias razones:
- **Control de Versiones**: Mantiene un historial completo de todos los cambios realizados en tu código.
- **Colaboración**: Permite que múltiples desarrolladores trabajen en el mismo proyecto sin conflictos.
- **Experimentos**: Puedes probar nuevas ideas en ramas separadas sin afectar el código principal.

## Terminología Básica de Git
Antes de sumergirte en el uso de Git, es importante familiarizarse con algunos términos clave:
- **Repositorio (Repo)**: La carpeta de tu proyecto, ya sea local o alojada en plataformas como GitHub.
- **Commit**: Una instantánea de tus cambios, acompañada de un mensaje descriptivo.
- **Staging Area**: Lugar donde preparas los cambios antes de realizar un commit.
- **Rama**: Una línea de desarrollo separada que permite realizar cambios aislados.
- **Merge**: Combina cambios de diferentes ramas.
- **Push**: Envía tus commits a un repositorio remoto.
- **Pull**: Recupera e integra cambios de un repositorio remoto.
- **Clonar**: Crea una copia local de un repositorio remoto.
- **.gitignore**: Un archivo que especifica qué archivos o directorios Git debe ignorar.


## Empezando con Git

### Instalación
Para instalar Git te recomiendo que visites la documentación oficial; [git-scm.com](https://git-scm.com). Y sigas las instrucciones de instalación para tu sistema operativo.

### Configuration

Una vez instalado, es importante configurar tu nombre y correo electrónico. Esto es esencial para que Git pueda asociar tus commits con tu identidad.

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Confirma que la configuración se ha realizado correctamente ejecutando:

```bash
git config --list
```

## Essential Git Commands

Para sentirte realmente cómodo con Git, necesitas ir más allá de simplemente memorizar comandos: se trata de entender qué hace cada uno y *por qué* es útil. Vamos a recorrer un ejemplo del mundo real: crear una aplicación básica de tareas pendientes.

### 1. Inicializa un Repositorio

```bash
git init
```

Este comando convierte tu carpeta actual en un repositorio de Git. Después de ejecutarlo, Git comenzará a rastrear los cambios en tu proyecto. Ahora verás una carpeta oculta *.git*  ahí es donde Git almacena todo el historial de versiones de tu código.

Utiliza este comando justo después de crear el nuevo directorio de  tu proyecto.

```bash
mkdir todo-app
cd todo-app
git init
```
Ahora tu carpeta "todo-app" está lista para usar Git.


### 2. Añade Archivos al Repositorio

Cuando creas o modificas archivos, necesitas decirle a Git que los incluya en el próximo commit. Por ejemplo, si creas un archivo HTML básico:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App</title>
</head>
<body>
    <h1>Bienvenido a la Todo App</h1>
</body>
</html>
```
Guárdalo como *index.html* en tu carpeta de proyecto.
Podrás añadirlo a tu repositorio con el siguiente comando:

```bash
git add index.html
```
El comando *add* le dice a Git: *"Quiero incluir este archivo en el próximo commit."* Mueve los cambios al **área de preparación**  piénsalo como una cesta donde recoges archivos que estás a punto de guardar.
Para añadir **todos los archivos** en el directorio (nuevos o modificados):

```bash
git add .
```
Usa esto con cuidado especialmente en proyectos más grandes para que no incluyas accidentalmente archivos que no querías comprometer.
### 3. Realiza un Commit de tus Cambios

```bash
git commit -m "Añadir index.html con estructura básica"
```
Un **commit** es como tomar una instantánea de tu código en un momento particular. La opción *-m* te permite adjuntar un mensaje a esa instantánea, que debe explicar claramente qué ha cambiado y por qué.
Piensa en un commit como un punto de control siempre puedes volver a él más tarde.    


### 4. Ver el Estado de tu Repositorio

```bash
git status
```
Este comando te muestra el estado actual de tu repositorio. Te dirá qué archivos han sido modificados, cuáles están listos para ser confirmados y cuáles no están siendo rastreados por Git.
Es útil para verificar qué cambios has hecho antes de realizar un commit.

### 5. Conectar a un Repositorio Remoto

```bash
git remote add origin <link-to-your-repo>
```
Este comando conecta tu repositorio local a un repositorio remoto (como GitHub). El *origin* es solo un nombre (el predeterminado) para esa ubicación remota. Puedes usar cualquier nombre, pero *origin* es el más común.
### 6. Enviar Cambios a GitHub

```bash
git push -u origin main
```
Este comando envía tus commits locales al repositorio remoto. La opción *-u* establece *origin main* como la rama predeterminada, por lo que la próxima vez solo necesitarás usar *git push*.

### 7. Obtener Cambios del Repositorio Remoto

```bash
git pull origin main
```
Este comando descarga los cambios más recientes del repositorio remoto y los fusiona con tu rama local. Es una buena práctica hacer esto antes de comenzar a trabajar, especialmente en entornos colaborativos.


### 8. Clonar un Repositorio Existente

```bash
git clone https://github.com/yourusername/todo-app.git
```
Clonar un repositorio significa crear una copia local de un proyecto existente. Esto es útil si quieres contribuir a un proyecto de código abierto o trabajar en un proyecto en el que no eres el propietario.

### 8. Comprobar la URL del Repositorio Remoto

```bash
git remote -v
```
Si necesitas verificar dónde se está enviando tu código, este comando lista todos los remotos vinculados a tu proyecto y sus URLs. Es muy útil cuando trabajas con múltiples remotos o colaboradores.
### 9. Ignorar Archivos No Deseados

```bash
echo "node_modules/" > .gitignore
```
Algunos archivos no deberían ser rastreados por Git piensa en archivos temporales, registros o carpetas de dependencias enormes como *node_modules*. El archivo *.gitignore* le dice a Git exactamente qué omitir.
Esto mantiene tu repositorio limpio y evita subir archivos innecesarios (o sensibles).
### 10. Ver Qué Ha Cambiado

```bash
git diff
```
Antes de confirmar, es posible que desees revisar tus cambios. *git diff* muestra las líneas exactas que se han añadido, modificado o eliminado desde el último commit perfecto para verificar antes de hacer algo oficial.
## Conceptos Avanzados
Una vez que te sientas cómodo con lo básico, puedes explorar más funciones avanzadas de Git, aquí hay algunos conceptos a considerar:

### Pull Requests (PRs)
Pull Requests (PRs) son una funcionalidad de plataformas como GitHub o GitLab que facilitan la colaboración en el desarrollo de software. Permiten a los desarrolladores proponer cambios a un código, revisar esos cambios y discutirlos antes de que se fusionen en la rama principal. Aquí hay un desglose de sus componentes clave:
- **Ramas**: En Git, las ramas se utilizan para desarrollar características o corregir errores de forma aislada. Un PR se crea típicamente desde una rama de características hacia la rama principal (o cualquier otra rama de destino).
- **Proponer Cambios**: Cuando realizas cambios en un código (por ejemplo, corrigiendo un error, añadiendo una característica), normalmente lo haces en una rama separada. Un PR te permite proponer la fusión de estos cambios en otra rama, a menudo la rama principal o de desarrollo.
- **Revisión de Código**: Los PRs permiten a los miembros del equipo revisar tu código antes de que se fusione. Los revisores pueden proporcionar comentarios, sugerir mejoras o señalar problemas potenciales. Esto asegura que el código cumpla con los estándares de calidad y se alinee con los objetivos del proyecto.
- **Discusión**: Los PRs actúan como un foro para discutir los cambios propuestos. Los miembros del equipo pueden dejar comentarios sobre líneas específicas de código o sobre el PR en su conjunto. Esto es especialmente útil para aclarar intenciones, resolver malentendidos o debatir detalles de implementación.
- **Colaboración**: En equipos más grandes, los PRs son esenciales para coordinar el trabajo. Ayudan a prevenir conflictos, aseguran que todos estén al tanto de los cambios en curso y mantienen un historial claro de las contribuciones.
- **Pruebas y Validación**: Muchos equipos integran pruebas automatizadas y verificaciones en el proceso de PR. Por ejemplo, las canalizaciones de CI/CD pueden ejecutar pruebas, verificar el estilo del código o asegurar la compatibilidad antes de que se apruebe el PR.
- **Fusión**: Una vez que el PR es aprobado y se realizan los cambios solicitados, puede fusionarse en la rama de destino. Esto asegura que solo el código revisado y aprobado forme parte del código base principal.
En resumen, los PRs son una forma estructurada de introducir, revisar y discutir cambios en un entorno colaborativo, asegurando la calidad del código y la alineación del equipo.

### Tags
Git Tags son una forma de marcar puntos específicos en la historia de tu repositorio como importantes. A menudo se utilizan para denotar versiones de lanzamiento (como v1.0, v2.0, etc.) o hitos significativos en el proceso de desarrollo. Las etiquetas son similares a las ramas, pero están destinadas a ser referencias inmutables a commits específicos.
- **Crear una Etiqueta**: Puedes crear una etiqueta usando el comando:
  ```bash
  git tag -a v1.0 -m "Versión 1.0"
  ```
  Esto crea una etiqueta anotada con un mensaje.
- **Listar Etiquetas**: Para ver todas las etiquetas en tu repositorio, usa:
  ```bash
  git tag
  ```
- **Enviar Etiquetas**: Por defecto, las etiquetas no se envían a los repositorios remotos. Para enviar una etiqueta específica, usa:
  ```bash
  git push origin v1.0
  ```


## Buenos Hábitos de Git
Al principio, Git puede parecer un poco abrumador. Pero no te preocupes, ¡es completamente normal! La buena noticia es que, con el tiempo y la práctica, se convertirá en una segunda naturaleza.
Aquí hay algunos consejos para mantener tu flujo de trabajo de Git suave y eficiente que he aprendido después de usar Git durante un tiempo:
- **Commits Frecuentes**: Realiza commits a menudo con mensajes significativos.
- **Mensajes Descriptivos**: Explica claramente el propósito de cada commit.
- **Uso de Ramas**: Desarrolla nuevas características o correcciones en ramas separadas.
- **Pulls Regulares**: Mantente actualizado con los últimos cambios del repositorio remoto.
- **Revisar Cambios**: Usa *git status* y *git diff* antes de confirmar.
- **Limpieza**: Elimina ramas fusionadas para mantener el repositorio ordenado.
- **.gitignore**: Configúralo temprano para evitar rastrear archivos innecesarios.
## Integración con GitHub
Ahora que sabes cómo usar Git localmente, es hora de conectarlo con GitHub la plataforma que aporta colaboración, visibilidad y gestión de proyectos a la mezcla.
### Entonces… ¿qué es exactamente GitHub?
GitHub es una plataforma basada en la web construida alrededor de Git. Te permite:
- **Almacenar tus repositorios en línea** para que puedas acceder a ellos desde cualquier lugar.
- **Colaborar con otros desarrolladores**, incluso a través del mundo.
- **Mostrar tus proyectos** a reclutadores, equipos o comunidades de código abierto.
En otras palabras, Git es el motor GitHub es el garaje, el tablero de control y la comunidad que lo rodea.
### Características Clave
- **Pull Requests (PRs)**: Propón cambios, discútelos y fusiónalos de forma segura en la rama principal.
- **Issues**: Mantén un seguimiento de errores, características o tareas como una lista de tareas pendientes para tu repositorio.
- **Actions**: Automatiza flujos de trabajo como ejecutar pruebas o desplegar tu aplicación cuando alguien envía código.
- **Projects**: Organiza tu trabajo en tableros al estilo Kanban.
- **GitHub Pages**: Publica instantáneamente sitios web desde tus repositorios genial para portafolios o documentación.
### Por qué es importante
Ya sea que estés trabajando solo o con un equipo, GitHub hace que el control de versiones sea *visible* y *colaborativo*. Obtienes procesos de revisión, ciclos de retroalimentación, automatización y exposición todo en un solo lugar.
## Git + VS Code: La Combinación Perfecta
Visual Studio Code (VS Code) es más que un editor de código es una máquina de productividad impulsada por Git.
### Soporte Git Integrado
Desde el primer momento, VS Code incluye un **panel de Control de Código Fuente** que se integra directamente con Git. Esto significa que puedes:
- Ver qué archivos han cambiado.
- Preparar, deshacer o confirmar archivos con unos pocos clics.
- Cambiar de rama y gestionar conflictos de fusión visualmente.
- Descargar y enviar cambios a GitHub sin salir de tu editor.
No más cambios de contexto entre la terminal y el navegador todo está en un solo lugar.
### GitLens: Superpoderes de Git para VS Code
¿Quieres llevar tu flujo de trabajo al siguiente nivel? Instala [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens).
Te permite:
- Ver **quién cambió qué**, cuándo y por qué directamente en el archivo.
- Ver el historial de commits y navegar por versiones anteriores.
- Comparar ramas o revisiones de archivos lado a lado.
- Anotar el código con información detallada de culpa.
### ¿Por qué usar Git dentro de VS Code?
- Perfecto para principiantes que no son de terminal.
- Genial para aprendices visuales.
- Acelera tareas comunes de Git.
- Facilita la revisión del historial y la resolución de conflictos.
Ya sea que estés confirmando un pequeño cambio o manejando una fusión complicada, la integración de Git de VS Code lo hace fluido e intuitivo; permitiéndote concentrarte en escribir un gran código.
---
Al dominar Git y sus herramientas asociadas, estarás bien equipado para gestionar tu código de manera eficiente y colaborar de forma efectiva en cualquier entorno de desarrollo.
Para ver Git en acción, consulta el video a continuación para una guía completa en español, que cubre todo desde la instalación hasta funciones avanzadas:
