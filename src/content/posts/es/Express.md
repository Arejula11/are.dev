---
title: "Crea tu primera API REST con Express.js"
description: "Aprende a configurar tu primera API REST usando Express.js. Esta guía para principiantes te lleva a través de los fundamentos, desde el enrutamiento de solicitudes hasta la estructuración del código con modelos, controladores y vistas."
tags: ["Aprendizaje"]
publishedDate: "2025-03-16 21:00"
coverImage: "/assets/Express-guide.webp"
author: "Miguel Aréjula Aísa"
authorImage: "https://avatars.githubusercontent.com/u/92888725?v=4"
authorUrl: "https://github.com/Arejula11"
draft: false
language: "es"
keywords: ["Express", "API REST", "Guía", "Aprendizaje", "Express.js","Node.js", "Desarrollo Web", "Backend", "tutorial"]
---

En el desarrollo web moderno, las APIs (**Application Programming Interfaces**) son esenciales para la comunicación entre diferentes sistemas de software. Las APIs actúan como un puente, permitiendo que las aplicaciones interactúen, compartan datos y ejecuten funciones sin problemas. Trabajan detrás de escena para hacer posibles estas interacciones en aplicaciones cotidianas como redes sociales, plataformas de comercio electrónico y servicios en la nube.

Las APIs se utilizan para una variedad de propósitos, incluyendo:
- **Intercambio de Datos**: Permitir que las aplicaciones envíen y reciban datos, como obtener detalles de usuario de una base de datos.
- **Integración de Servicios**: Conectar diferentes servicios, como integrar pagos o autenticación de terceros.
- **Automatización**: Permitir que los sistemas interactúen programáticamente sin intervención humana.
- **Seguridad y Control de Acceso**: Gestionar la autenticación y autorización para usuarios y servicios.
- **Abstracción de Sistemas Complejos**: Las APIs proporcionan una interfaz simplificada a la lógica compleja del backend, ocultando los detalles de implementación a los usuarios. Esto permite que las aplicaciones front-end interactúen con los servicios sin necesidad de entender la infraestructura subyacente.

## ¿Qué es una API REST?
Una API REST (Representational State Transfer API) es un enfoque ampliamente utilizado para construir servicios web que siguen restricciones arquitectónicas específicas. Las APIs REST utilizan métodos HTTP estándar como GET, POST, PUT y DELETE para permitir que los clientes interactúen con los servicios backend de manera sin estado. Algunas características clave de las APIs REST incluyen:

- **Arquitectura Cliente-Servidor**: El cliente y el servidor operan de manera independiente, comunicándose a través de solicitudes y respuestas HTTP.
- **Statelessness**: Cada solicitud del cliente contiene toda la información necesaria, y el servidor no almacena el estado del cliente entre solicitudes.
- **Interfaz Uniforme**: Los recursos se acceden a través de URLs, y las respuestas se formatean de manera estándar (a menudo JSON o XML).
- **Sistema en Capas**: La API puede diseñarse con múltiples capas, como autenticación, almacenamiento en caché y balanceo de carga.

Las APIs REST son la base de muchas aplicaciones modernas, proporcionando una forma estandarizada para que diferentes sistemas interactúen. Al construir una API REST con Express.js, podemos gestionar eficientemente las solicitudes, estructurar nuestro código y asegurar la escalabilidad.


## Configurando tu Primera API REST

Ahora que entendemos qué es una API y una API REST, vamos a construir una. Nuestra API REST actuará como un centro central, enrutando las solicitudes entrantes desde un navegador o diferentes sistemas a nuestros servicios backend.

### Prerrequisitos:
Antes de comenzar, asegúrate de tener lo siguiente instalado:
- Node.js (v14 o posterior). Puedes descargarlo [aquí](https://nodejs.org/es).
- Express Generator – Una herramienta para crear rápidamente una aplicación Express.js. Instálalo globalmente usando:
```bash
npm install -g express-generator
```

### Inicializa el proyecto
Para crear una nueva API Express, ejecuta el siguiente comando:
```bash
express <nombre-del-proyecto> --git
```
Reemplaza <nombre-del-proyecto> con el nombre de tu directorio deseado. Y la *flag* --git inicializa un repositorio Git (opcional pero recomendado).


![Express-commands](/assets/Express-commands.png)

### Instala las Dependencias e Iniciar el Servidor
Navega a tu carpeta de proyecto e instala las dependencias requeridas:
```bash
cd api
npm install
```
Luego, inicia el servidor con el siguiente comando:
```bash
npm start
```
Por defecto, el servidor se ejecutará en el puerto 3000. Abre tu navegador y ve a: http://localhost:3000/ Deberías ver la página de bienvenida predeterminada de Express.

![Express-welcome](/assets/Express-welcome.png)

### Reestructura el Proyecto
La estructura predeterminada del proyecto Express puede no ser ideal para una API REST. Vamos a reestructurarla para que se adapte mejor a una arquitectura modelo-vista-controlador (MVC). Crea una carpeta llamada app en el directorio raíz. Dentro de la carpeta app, crea las siguientes subcarpetas:
- **controllers**: Para manejar la lógica de las solicitudes.
- **models**: Para definir los modelos de datos.
- **routes**: Para definir las rutas de la API.
- **views**: Para implementar vistas (no necesarias para APIs).

Deberías terminar con una estructura como esta:
![Express-folder-structure](/assets/Express-folder-structure.png)

Para completar la reestructuración, debes actualizar las rutas en los archivos existentes para reflejar la nueva estructura. Por ejemplo, en app.js, actualiza la ruta al archivo de rutas:
```javascript
const indexRouter = require('./app/routes/index');
```


## Crea tu Primera Ruta de API
Ahora que hemos reestructurado la estructura del proyecto, vamos a crear nuestra primera ruta de API. Crearemos una ruta simple que devuelva un mensaje de bienvenida cuando accedas al endpoint /api. Abre el proyecto en tu editor de código y crea un nuevo archivo llamado **api.js** dentro de la carpeta routes. Agrega el siguiente código:
```javascript
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'Welcome to the API REST!' });
});

module.exports = router;
```
Este código define una ruta que escucha solicitudes GET en el endpoint /api y devuelve una respuesta JSON con un mensaje de bienvenida.

A continuación, debemos actualizar el archivo **app.js** para incluir esta nueva ruta. Agrega la siguiente línea debajo de la declaración de ruta existente:
```javascript
const apiRouter = require('./app/routes/api');
app.use('/api', apiRouter);
```
Este código le dice a Express que use el apiRouter para las solicitudes al endpoint /api.

Reinicia el servidor deteniéndolo con Ctrl + C y ejecutando npm start nuevamente. Ahora, si visitas http://localhost:3000/api en tu navegador, deberías ver el mensaje de bienvenida mostrado como JSON.

![Express-first-route](/assets/Express-first-route.png)

## Implementando Controladores para Mejorar la Organización del Código
A medida que nuestra API REST crece, mantener toda la lógica de manejo de solicitudes dentro de los archivos de rutas puede hacer que el código sea desordenado y difícil de mantener. Para mejorar la organización, separamos la lógica de solicitudes en controladores. Este enfoque sigue el patrón **MVC**, donde los controladores manejan la lógica de negocio e interactúan con los modelos. Son responsables de procesar las solicitudes, obtener datos y devolver respuestas. Por lo tanto, definimos la lógica en los controladores y los llamamos desde las rutas.

Vamos a crear un controlador para nuestra ruta /api. Dentro de la carpeta controllers, crea un nuevo archivo llamado **ApiController.js**. Agrega el siguiente código:
```javascript
exports.welcomeMessage = function(req, res) {
  res.json({ message: '¡Bienvenido a la API REST!' });
};
```
Este código define una función welcomeMessage que envía una respuesta JSON con un mensaje de bienvenida. Ahora, actualiza el archivo de ruta **api.js** para usar este controlador. Reemplaza la definición de ruta existente con el siguiente código:
```javascript
const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/ApiController');

router.get('/', ApiController.welcomeMessage);

module.exports = router;
```
Este código importa el ApiController y llama a la función welcomeMessage cuando se realiza una solicitud GET al endpoint /api. El resultado es el mismo que antes, pero ahora la lógica está separada en un controlador. Al hacer esto, podemos mantener nuestras rutas limpias, separando la lógica de enrutamiento de la lógica de negocio, mejorando la legibilidad, mantenibilidad, reutilización y escalabilidad del código, facilitando las pruebas y solo tendremos que cambiar la lógica en un solo lugar.


## Entendiendo Modelos y Vistas en una API REST

En una arquitectura MVC típica, los roles son:
- **Modelo (M)** – Gestiona los datos, interactuando con bases de datos o APIs externas.
- **Vista (V)** – Maneja la representación de la interfaz de usuario (no siempre se usa en APIs).
- **Controlador (C)** – Contiene la lógica de negocio y procesa las solicitudes.

Dado que nuestra API REST no tiene un front-end, no usa vistas en el sentido tradicional, sin embargo, podemos usarlas para mostrar la respuesta de una manera más amigable para el usuario. Y mientras el controlador maneja la lógica de las solicitudes, el modelo puede usarse para definir estructuras de datos, validar datos entrantes y formatear respuestas.

## Usando Modelos en una API REST

Aunque la API REST no interactúa directamente con una base de datos, aún se beneficia de los modelos. Los modelos pueden:
- **Definir Estructuras de Datos** – Estandarizar cómo se formatean los datos antes de enviarlos a los clientes.
- **Validar Datos Entrantes** – Asegurar que las solicitudes contengan información correcta.
- **Manejar Respuestas de APIs Externas** – Estructurar datos de servicios backend antes de devolverlos.


### Crear un Modelo

Crea un fichero llamado **ApiResponseModel.js** dentro de la carpeta models. Este modelo definirá la estructura de nuestras respuestas de API. Agrega el siguiente código:

```javascript
class ApiResponseModel {
  constructor(status, message, data = null) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiResponseModel;
```
Este código define una clase ApiResponse que toma tres parámetros: status, message y data. El status representa el estado de la respuesta (por ejemplo, éxito o error), el message contiene una descripción de la respuesta y data contiene los datos de la respuesta. Al definir un modelo para nuestras respuestas, podemos asegurarnos de que sigan una estructura coherente y sean fáciles de manejar.

### Usar el Modelo en el Controlador

Ahora, actualicemos el ApiController para usar el ApiResponseModel. Modifica la función welcomeMessage en **ApiController.js** para devolver una instancia de ApiResponseModel:
```javascript
const ApiResponseModel = require('../models/ApiResponseModel');

exports.welcomeMessage = function(req, res) {
  const response = new ApiResponseModel('success', 'Welcome to the API REST!');
  res.json(response);
};
```
Este código crea una nueva instancia de ApiResponseModel con un estado de éxito y un mensaje de bienvenida. El objeto response se envía luego como JSON al cliente. Esto asegura que todas las respuestas sigan una estructura consistente, facilitando que los clientes las analicen y manejen.


## Usando Vistas en una API REST

Aunque las vistas no son esenciales en una API REST, pueden ser útiles para renderizar respuestas en un formato amigable para el usuario. Por ejemplo, puedes usar vistas para generar HTML u otros formatos para una salida legible por humanos. Las vistas también pueden usarse para generar documentación o mensajes de error.

Para usar vistas en Express, necesitas configurar un motor de vistas. Los motores de vistas populares incluyen Pug, EJS y Handlebars. Para este ejemplo, usaremos Jade. Como creamos el proyecto con el generador de Express, viene con el motor de vistas Jade por defecto. Por lo tanto, no necesitamos instalarlo. Sin embargo, si deseas usar otro motor de vistas, puedes instalarlo usando npm y configurarlo en el archivo **app.js**. Además, cuando creas el proyecto, puedes definir el motor de vistas con el siguiente comando:
```bash
express <project-name> --view=pug
```
Este comando creará el proyecto con el motor de vistas Pug.

### Crea una Vista

No especificamos el motor de vistas cuando creamos el proyecto, así que crearemos una vista simple usando el motor Jade predeterminado. Dentro de la carpeta views, crea un nuevo archivo llamado **welcome.jade**. Agrega el siguiente código:
```jade
extends layout

block content
  h1 Welcome to the API REST!
  p This is a simple welcome message.
```

Este código define una plantilla Jade simple que extiende el archivo de diseño (layout.jade) y muestra un mensaje de bienvenida. El archivo de diseño contiene la estructura básica de la página, y el bloque de contenido es donde se inserta el contenido específico.

### Renderizar la Vista
Para renderizar la vista en nuestra API REST, necesitamos actualizar la función welcomeMessage en el ApiController. Modifica la función para renderizar la vista **welcome.jade**:

```javascript
exports.welcomeMessage = function(req, res) {
  res.render('welcome');
};
```
Este código le dice a Express que renderice la vista welcome.jade cuando se realice una solicitud al endpoint /api. La vista se envía luego como HTML al cliente. Si visitas http://localhost:3000/api en tu navegador, deberías ver el mensaje de bienvenida mostrado en la plantilla Jade.

![Express-view](/assets/Express-view.png)

## Conclusión
En esta guía, construimos una **API REST** básica usando **Express.js**, aprendiendo a:
- Configurar un proyecto basado en Express.
- Estructurar la aplicación siguiendo el **patrón MVC**.
- Implementar **controladores** para manejar solicitudes.
- Usar **modelos** para estandarizar las respuestas de la API.
- Usar **vistas** para renderizar respuestas en un formato amigable para el usuario.

Express.js es un marco poderoso que simplifica el proceso de construcción de APIs, proporcionando un conjunto robusto de herramientas y características. A medida que continúes desarrollando tu API REST, puedes explorar funcionalidades adicionales como **autenticación**, **limitación de tasa**, **registro** y **manejo de errores**. Estas características te ayudarán a crear APIs seguras, escalables y confiables que satisfagan las necesidades de tus usuarios.

Para iniciar tu proyecto con una configuración preconfigurada de Express.js, consulta mi plantilla lista para usar: [Plantilla Express](https://github.com/Arejula11/templateExpress.git). Esta plantilla incluye una estructura de proyecto optimizada, configuración de rutas, controladores y modelos de ejemplo, y una guía de inicio rápido.

Entonces, ¿a qué estás esperando? ¡Comienza a desarrollar tu API REST hoy mismo!
