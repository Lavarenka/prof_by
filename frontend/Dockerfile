# Используем официальный образ Node.js для сборки
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json

COPY ./package.json .

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта
COPY . .

CMD [ "npm", "run", "dev" ]
# Собираем проект для production
