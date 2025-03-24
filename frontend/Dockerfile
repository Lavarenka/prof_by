FROM node:18-bullseye-slim AS builder  
WORKDIR /app

# Установка зависимостей с очисткой кеша
COPY package*.json ./
RUN rm -rf package-lock.json node_modules && \
    npm install 

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

