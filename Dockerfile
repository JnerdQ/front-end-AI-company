# Utiliza una imagen base de Node.js
FROM node:16-alpine as build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Utiliza una imagen base de nginx
FROM nginx:alpine

# Copia los archivos construidos desde el contenedor de construcción al contenedor de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto en el que correrá la aplicación
EXPOSE 80

# Comando por defecto para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
