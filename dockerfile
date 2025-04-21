# 1. Usa una imagen base oficial de Node
FROM node:18

# 2. Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copia los archivos del proyecto al contenedor
COPY package*.json ./

# 4. Instala las dependencias
RUN npm install

# 5. Copia el resto de los archivos al contenedor
COPY . .

# 6. Expone el puerto (asegúrate de que coincida con tu app)
EXPOSE 8080

# 7. Define el comando para ejecutar la aplicación
CMD ["node", "src/app.js"]
