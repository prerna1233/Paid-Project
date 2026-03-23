## Kishanganj Tourism (Paid Project)

Kishanganj Tourism is a full-stack web platform built to showcase local destinations, culture, blogs, and hotel information. It provides a public tourism portal for visitors and an admin console for managing hotel and blog content through secure role-based APIs.

The project is split into:
- `frontend/`: React + Vite user interface
- `backend/`: Node.js + Express + MongoDB REST API

## Key Features

- Full-stack web application with a tourism-focused UI.
- JWT-based authentication and authorization.
- User registration and login.
- Admin-only login and protected admin routes.
- Public and user-generated blog system:
  - List and view blogs.
  - Create, edit, and delete own blogs (authenticated users).
  - Like/unlike blogs.
  - Add and delete comments.
- Hotel management system:
  - Public hotel listing and detail pages.
  - Admin CRUD for hotels.
- Admin panel in frontend for:
  - Blog moderation and updates.
  - Comment deletion.
  - Hotel creation, edit, and deletion.

## Features

- Authentication
  - JWT token generation with 7-day expiry.
  - Auth middleware using `Authorization: Bearer <token>`.
  - Role-based admin middleware (`role === "admin"`).
- Blog Module
  - Public published blogs.
  - User-specific blog ownership checks on updates/deletes.
  - Likes and comments with populated user details.
  - Admin controls for all blogs and comments.
- Hotel Module
  - Public read endpoints.
  - Admin-only create, update, and delete operations.
- API and Middleware
  - Centralized error handling and 404 middleware.
  - CORS enabled.
  - Health endpoint at `/`.

## How To Run

### 1) Clone and install

```bash
git clone <your-repo-url>
cd Paid-Project

cd backend
npm install

cd ../frontend
npm install
```

### 2) Configure environment variables

Create `backend/.env`:

```env
MONGO_URI=mongodb://localhost:27017/kishanganj-tourism
JWT_SECRET=your_super_secret_jwt_key
PORT=5000
NODE_ENV=development
```

Optional frontend env (`frontend/.env`) if you want a custom API base:

```env
VITE_API_BASE=http://localhost:5000
```

### 3) Start backend

```bash
cd backend
npm run dev
```

### 4) Start frontend

```bash
cd frontend
npm run dev
```

### 5) Access app

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`
- Health check: `http://localhost:5000/`

## Admin Setup

Create or reset admin user via script:

```bash
cd backend
node src/admin/scripts/createAdmin.js
```

Default credentials used by the script:
- Email: `admin@kishanganj.com`
- Password: `admin123`

## API Overview

Base URL: `http://localhost:5000`

- Auth
  - `POST /auth/register`
  - `POST /auth/login`
  - `POST /auth/admin-login`
  - `GET /auth/profile` (protected)
  - `PUT /auth/profile` (protected)
  - `PUT /auth/change-password` (protected)
  - `DELETE /auth/account` (protected)
- Blogs
  - `GET /blogs`
  - `GET /blogs/:id`
  - `GET /blogs/:id/interactions`
  - `POST /blogs` (protected)
  - `POST /blogs/:id/like` (protected)
  - `POST /blogs/:id/comments` (protected)
  - `DELETE /blogs/:id/comments/:commentId` (protected)
- Hotels
  - `GET /hotels`
  - `GET /hotels/:id`
- Admin Blogs (admin + token required)
  - `GET /admin/blogs`
  - `PUT /admin/blogs/:id`
  - `DELETE /admin/blogs/:id`
  - `DELETE /admin/blogs/:id/comments/:commentId`
- Admin Hotels (admin + token required)
  - `GET /admin/hotels`
  - `POST /admin/hotels`
  - `PUT /admin/hotels/:id`
  - `DELETE /admin/hotels/:id`

## Project Structure

```text
Paid-Project/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── auth/
│       ├── blog/
│       ├── hotel/
│       ├── admin/
│       ├── middleware/
│       ├── config/
│       └── utils/
├── frontend/
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── Routes/
│       ├── Pages/
│       ├── Components/
│       └── contexts/
└── README.md
```

## Tech Stack

- Frontend: React, Vite, React Router, Tailwind CSS, i18next
- Backend: Node.js, Express, Mongoose, JWT, bcryptjs
- Database: MongoDB
- Tooling: Nodemon, ESLint

## Notes

- Backend expects a valid `MONGO_URI` and `JWT_SECRET`.
- Admin endpoints require a JWT with `role: "admin"`.
- Frontend admin panel defaults to `https://paid-project.onrender.com` if `VITE_API_BASE` is not set.
