# Используем официальный образ Node.js для сборки
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock, если используете Yarn)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем проект для production
RUN npm run build

# Используем легковесный образ Nginx для serving статики
FROM nginx:alpine

# Копируем собранные файлы из builder в Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем конфигурацию Nginx (если нужно)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]