# Usa una imagen base de Node.js para la fase de construcción
FROM node:14 AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de npm
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación de React
RUN npm run build

# Verifica si el directorio de construcción se ha creado correctamente
RUN ls -al /app/dist

# Usa una imagen base ligera de nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de construcción de la etapa anterior al directorio de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
