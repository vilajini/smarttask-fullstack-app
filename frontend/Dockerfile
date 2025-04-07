# Build stage
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod

# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
