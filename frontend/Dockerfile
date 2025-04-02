# FROM node:18-bullseye-slim AS builder  
# WORKDIR /app

# # Установка зависимостей с очисткой кеша
# COPY package*.json ./
# RUN rm -rf package-lock.json node_modules && \
#     npm install 

# COPY . .
# RUN npm run build

# FROM nginx:alpine
# COPY --from=builder /app/dist /usr/share/nginx/html

# Шаг 1: Сборка приложения
FROM node:18-alpine AS builder
WORKDIR /app

# Копируем зависимости
COPY package.json package-lock.json ./
RUN npm ci

# Копируем исходный код и собираем
COPY . .
RUN npm run build

# Шаг 2: Запуск через Nginx
FROM nginx:alpine

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]