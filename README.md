# Express Portfolio API

A personal portfolio backend application built with **Node.js (Express.js)**.
This API exposes profile, experience, skills, and certification data, and is
designed with clean architecture and production-ready practices.

## 🚀 Features

- RESTful API using Express.js
- Modular route structure
- Centralized error handling
- Standardized API responses
- Environment-based configuration
- Ready for deployment on AWS EC2

## 📌 API Endpoints

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | /               | Health check          |
| GET    | /profile        | Profile information   |
| GET    | /experience     | Work experiences      |
| GET    | /skills         | Skills & technologies |
| GET    | /education      | Education background  |
| GET    | /certifications | Certifications        |

## 🛠 Tech Stack

- Node.js
- Express.js
- JavaScript
- dotenv
- PM2 (for production)
- AWS EC2
- Nginx

## 🧪 Run Locally

```bash
npm install
npm run dev
```
