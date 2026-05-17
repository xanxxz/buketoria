# Flower Delivery Operations Platform

Система онлайн-доставки цветов с ручной обработкой менеджером.

## Структура

- `frontend` — Next.js App Router, TailwindCSS, shadcn/ui, мобильный UI
- `backend` — NestJS, Prisma, PostgreSQL, Telegram Bot Notifications

## Основные фичи

- заказ клиента создаётся на сайте
- менеджер уточняет, рассчитывает цену и выставляет оплату
- оплата происходит вне сайта
- менеджер подтверждает оплату, заказ передаётся флористу и курьеру
- телеграм-уведомления на ключевые шаги

## Быстрый старт

1. Установить зависимости:
   - `npm install`
2. Запустить фронтенд:
   - `npm run dev:frontend`
3. Запустить бэкенд:
   - `npm run dev:backend`

## Архитектура

- API-сервер NestJS обрабатывает заказы и ценовую логику
- Prisma хранит модель `City`, `Order`, `Manager`, `Florist`
- `Order` проходит строго определённую state machine
- тема UI построена на CSS-переменных и Tailwind
