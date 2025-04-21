# 🐾 AdoptMe - Proyecto Final Backend

Este proyecto corresponde al **entregable final** del curso de Backend. AdoptMe es una API para gestionar usuarios, mascotas y adopciones.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- Docker
- Swagger para documentación de APIs
- Jest/Supertest para testing funcional

---

## 🐳 Imagen Docker

La imagen del proyecto ha sido subida a DockerHub y puede utilizarse desde el siguiente enlace:

🔗 **[Ver Imagen en DockerHub](https://hub.docker.com/r/jeymun/projectofinal)**

---

## ▶️ Cómo ejecutar el proyecto con Docker

### Requisitos:
- Docker instalado y funcionando.
- Archivo `.env` con las variables de entorno necesarias.

### Pasos:

1. Clonar el repositorio (opcional si solo usás la imagen).
2. Crear un archivo `.env` con las siguientes variables:

```env
PORT=8080
MONGO_URI=mongodb+srv://<tusuario>:<tupassword>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
