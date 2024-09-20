# Используем официальный образ Node.js как базовый
FROM node:20

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код приложения
COPY . .

# Устанавливаем Prisma CLI
RUN npm install -g prisma

# Генерируем Prisma клиент
RUN prisma generate

# Собираем приложение
RUN npm run build

# Открываем порт, который использует приложение (обычно 3000 для Next.js)
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]