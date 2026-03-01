# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve mit nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# SPA-Routing: alle Routen auf index.html umleiten
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
