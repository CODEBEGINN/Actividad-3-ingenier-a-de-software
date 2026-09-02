# Formulario de Contacto Full Stack

Aplicación web para enviar mensajes a través de un formulario y almacenarlos en una base de datos en la nube.

## Arquitectura

* **Front-end (/public):** Interfaz de usuario estática desarrollada con HTML, CSS y JavaScript nativo. Desplegada en Vercel.
* **Back-end (/api):** API REST estructurada con Node.js y Express que procesa las peticiones. Desplegada en Render.
* **Base de Datos:** Clúster en la nube de MongoDB Atlas gestionado con Mongoose.

## Tecnologías

* JavaScript (ES6+)
* Express
* Mongoose
* Cors
* Dotenv

## Variables de Entorno

Crea un archivo `.env` en la raíz de la carpeta del servidor:

```text
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster0.hvjqqxj.mongodb.net/test?retryWrites=true&w=majority
PORT=3000
```

## Ejecución Local

1. Instala las dependencias del servidor:
   ```bash
   npm install
   ```
2. Inicia el backend:
   ```bash
   node api/status.js
   ```
3. Abre el archivo `public/index.html` en tu navegador.
# Formulario de Contacto Full Stack

Aplicación web para enviar mensajes a través de un formulario y almacenarlos en una base de datos en la nube.

