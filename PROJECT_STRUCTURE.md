# Project Structure Documentation

## 📁 Project Overview
This is a full-stack web application for a tourism/hotel management system with blog functionality, built using the MERN stack (MongoDB, Express.js, React, Node.js).

---

## 🗂️ Root Directory Structure

```
Paid-Project/
├── backend/                 # Backend API server
├── frontend/                # React frontend application
├── node_modules/            # Root dependencies
├── ADMIN_AUTH_SETUP.md      # Admin authentication setup guide
├── ADMIN_LOGIN_GUIDE.md     # Admin login instructions
├── ADMIN_LOGIN_VERIFICATION.md  # Admin verification docs
└── QUICK_START.md           # Quick start guide
```

---

## 🔧 Backend Structure

### Backend Root Files
```
backend/
├── server.js                # Main server entry point
├── package.json             # Backend dependencies
├── package-lock.json        # Locked dependencies
├── .env                     # Environment variables (not in git)
├── .env.example             # Example environment variables
├── .gitignore               # Git ignore rules
├── server.log               # Server logs
├── createAdmin.js           # Script to create admin users
├── API_DOCUMENTATION.md     # API documentation
└── FIXES_SUMMARY.md         # Summary of fixes/changes
```

### Backend Source Code (`backend/src/`)

```
backend/src/
├── app.js                   # Express app configuration
├── config/
│   └── db.js                # MongoDB connection configuration
│
├── auth/                    # Authentication module
│   ├── auth.controller.js   # Auth controllers (login, register)
│   ├── auth.model.js        # User model schema
│   └── auth.routes.js       # Auth routes
│
├── blog/                    # Public blog module
│   ├── blog.controller.js   # Blog CRUD controllers
│   ├── blog.model.js        # Blog model schema
│   └── blog.routes.js       # Blog routes
│
├── hotel/                   # Public hotel module
│   ├── hotel.controller.js  # Hotel controllers
│   └── hotel.routes.js      # Hotel routes
│
├── admin/                   # Admin-only modules
│   ├── blog/
│   │   ├── admin.blog.controller.js  # Admin blog management
│   │   └── admin.blog.routes.js      # Admin blog routes
│   │
│   └── hotel/
│       ├── admin.hotel.controller.js # Admin hotel management
│       ├── admin.hotel.routes.js     # Admin hotel routes
│       └── hotel.model.js            # Hotel model schema
│
├── middleware/              # Express middlewares
│   ├── auth.middleware.js   # JWT authentication middleware
│   └── admin.middleware.js  # Admin role verification
│
└── utils/                   # Utility functions
    └── generateToken.js     # JWT token generation
```

### Backend API Endpoints

**Authentication Routes** (`/auth`)
- POST `/auth/register` - Register new user
- POST `/auth/login` - User login
- GET `/auth/profile` - Get user profile

**Blog Routes** (`/blogs`)
- GET `/blogs` - Get all blogs
- GET `/blogs/:id` - Get single blog
- POST `/blogs` - Create blog (protected)
- PUT `/blogs/:id` - Update blog (protected)
- DELETE `/blogs/:id` - Delete blog (protected)

**Hotel Routes** (`/hotels`)
- GET `/hotels` - Get all hotels
- GET `/hotels/:id` - Get single hotel

**Admin Blog Routes** (`/admin/blogs`) - Protected
- GET `/admin/blogs` - Get all blogs
- POST `/admin/blogs` - Create blog
- PUT `/admin/blogs/:id` - Update blog
- DELETE `/admin/blogs/:id` - Delete blog

**Admin Hotel Routes** (`/admin/hotels`) - Protected
- GET `/admin/hotels` - Get all hotels
- GET `/admin/hotels/:id` - Get hotel by ID
- POST `/admin/hotels` - Create hotel
- PUT `/admin/hotels/:id` - Update hotel
- DELETE `/admin/hotels/:id` - Delete hotel

---

## 🎨 Frontend Structure

### Frontend Root Files
```
frontend/
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── package.json             # Frontend dependencies
├── package-lock.json        # Locked dependencies
└── README.md                # Frontend README
```

### Frontend Source Code (`frontend/src/`)

```
frontend/src/
├── main.jsx                 # React entry point
├── App.jsx                  # Main App component
├── App.css                  # Global app styles
├── index.css                # Base styles
│
├── api/                     # API service layer
│   ├── blogApi.js           # Blog API calls
│   ├── hotelApi.js          # Hotel API calls
│   ├── authApi.js           # Auth API calls
│   └── axiosConfig.js       # Axios configuration
│
├── Components/              # Reusable React components
│   ├── Banner/
│   │   ├── Banner.jsx
│   │   └── Banner.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.style.css
│   ├── ImageStack/
│   │   ├── ImageStack.jsx
│   │   └── ImageStack.style.css
│   ├── Login/
│   │   ├── Login.jsx
│   │   └── Login.style.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   └── SignUp/
│       ├── SignUp.jsx
│       └── SignUp.style.css
│
├── Pages/                   # Page components
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.style.css
│   │
│   ├── Accomodation/
│   │   ├── Accomodation.jsx
│   │   └── Accomodation.style.css
│   │
│   ├── Admin/               # Admin panel
│   │   ├── AdminPanel.jsx   # Main admin dashboard
│   │   ├── AdminPanel.css
│   │   ├── AdminBlogApi.js  # Admin blog API functions
│   │   ├── AdminHotelApi.js # Admin hotel API functions
│   │   ├── BlogCard.jsx     # Blog card component
│   │   ├── BlogForm.jsx     # Blog form component
│   │   ├── HotelCard.jsx    # Hotel card component
│   │   ├── HotelForm.jsx    # Hotel form component
│   │   ├── Hotel.model.js   # Hotel model/schema
│   │   └── dummyData.js     # Dummy data for testing
│   │
│   ├── Blogs/
│   │   ├── Blogs.jsx
│   │   └── Blogs.style.css
│   │
│   ├── Culture/             # Culture pages
│   │   ├── Culture.jsx
│   │   ├── Culture.style.css
│   │   ├── Art.jsx
│   │   ├── Art.style.css
│   │   ├── ArtData.js
│   │   ├── Festivals.jsx
│   │   ├── Festivals.style.css
│   │   ├── Food.jsx
│   │   └── Food.style.css
│   │
│   ├── Home/                # Home page components
│   │
│   └── Travel/              # Travel page components
│
├── Routes/                  # React Router configuration
│   └── Approutes.jsx        # App routes definition
│
├── i18n/                    # Internationalization
│   └── config.js            # i18n configuration
│
├── assets/                  # Static assets
│   ├── 1pic.png through 10pic.webp  # Various images
│   ├── logo.png
│   ├── CEO.jpg
│   ├── home1.mp4
│   ├── home2.mp4
│   ├── culturePage/
│   │   ├── art1.png
│   │   └── madhubani.png
│   └── [other image files]
│
├── admin/                   # Admin specific files (to be organized)
└── users/                   # User specific files (to be organized)
```

---

## 🚀 Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Axios** - HTTP client
- **i18next** - Internationalization
- **CSS Modules** - Styling

---

## 📦 Key Features

### User Features
- ✅ User authentication (register/login)
- ✅ Browse hotels and accommodations
- ✅ View blog posts
- ✅ Explore culture, art, festivals, and food
- ✅ Multi-language support (i18n)

### Admin Features
- ✅ Admin authentication
- ✅ Hotel management (CRUD)
- ✅ Blog management (CRUD)
- ✅ Protected admin routes
- ✅ Admin dashboard

---

## 🔐 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

---

## 📝 Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  isAdmin: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Hotel Model
```javascript
{
  name: String,
  location: String,
  description: String,
  price: Number,
  rating: Number (1-5),
  facilities: String,
  image: String (URL or base64),
  createdAt: Date,
  updatedAt: Date
}
```

### Blog Model
```javascript
{
  title: String,
  content: String,
  author: String,
  image: String,
  category: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🛠️ Installation & Setup

### Backend Setup
```bash
cd backend
npm install
# Create .env file with required variables
npm run dev    # Development mode with nodemon
npm start      # Production mode
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev    # Development mode
npm run build  # Production build
```

---

## 📡 API Communication Flow

```
Frontend (React) 
    ↓ (Axios)
API Layer (AdminHotelApi.js, AdminBlogApi.js, etc.)
    ↓ (HTTP Requests)
Backend Routes (/admin/hotels, /admin/blogs, etc.)
    ↓
Middleware (authMiddleware, adminMiddleware)
    ↓
Controllers (admin.hotel.controller.js, etc.)
    ↓
Models (Hotel.model.js, Blog.model.js, etc.)
    ↓
MongoDB Database
```

---

## 🔒 Authentication Flow

1. User registers/logs in → Backend creates JWT token
2. Token stored in localStorage/cookies
3. Token sent with every protected request
4. Backend verifies token with authMiddleware
5. Admin routes additionally check adminMiddleware
6. Access granted/denied based on verification

---

## 📋 Common Commands

### Backend
```bash
npm run dev              # Start dev server
npm start                # Start production server
node createAdmin.js      # Create admin user
```

### Frontend
```bash
npm run dev              # Start dev server (port 5173)
npm run build            # Build for production
npm run preview          # Preview production build
```

---

## 🐛 Known Issues & Fixes

See `backend/FIXES_SUMMARY.md` for detailed information about fixes applied to the project.

---

## 📚 Documentation Files

- `ADMIN_AUTH_SETUP.md` - How to set up admin authentication
- `ADMIN_LOGIN_GUIDE.md` - Guide for admin login process
- `ADMIN_LOGIN_VERIFICATION.md` - Admin verification process
- `QUICK_START.md` - Quick start guide for developers
- `backend/API_DOCUMENTATION.md` - Complete API documentation

---

## 🎯 Future Enhancements

- [ ] Organize admin and user files in separate folders
- [ ] Add image upload functionality
- [ ] Implement booking system
- [ ] Add payment gateway
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] User reviews and ratings
- [ ] Social media integration

---

## 👥 Contributing

1. Follow the existing folder structure
2. Use meaningful commit messages
3. Test before pushing
4. Update documentation for major changes

---

## 📄 License

[Add your license information here]

---

**Last Updated:** January 29, 2026
**Version:** 1.0.0
