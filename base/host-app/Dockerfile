# This next stage uses the node:18 Docker image as it's base.
FROM node:18 AS build

# Setting the working directory in the Docker image.
WORKDIR /app

# Copying the package.json and package-lock.json files into the image.
COPY ./package*.json ./

# This will install dependencies from your package.json file.
RUN npm install

# Copying the rest of your app's source code from your host to your image filesystem.
COPY . .

# This will build your Angular app.
RUN npm run build

# This next stage uses the nginx:alpine Docker image as it's base.
FROM nginx:alpine

# This copies src/public directory into the nginx html directory.
COPY --from=build /app/src/public /usr/share/nginx/html

# This makes port 8080 available to your host machine.
EXPOSE 80