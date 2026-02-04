# 🔄 Architecture Refactoring Documentation

## Overview
This document explains the refactoring from a traditional MVC structure to a **feature-based, scalable architecture** for both backend and frontend.

---

## 🎯 Refactoring Goals Achieved

✅ Feature-based architecture  
✅ Better separation of concerns (Controllers, Services, Models)  
✅ All existing APIs and functionality preserved  
✅ Improved maintainability and readability  
✅ Centralized error handling  
✅ Consolidated admin APIs  
✅ Backward compatibility maintained  

---

## 🔧 BACKEND REFACTORING

### Old Structure
```
backend/src/
├── auth/
│   ├── auth.controller.js
│   ├── auth.model.js
│   └── auth.routes.js
├── blog/
├── hotel/
├── admin/
│   ├── blog/
│   └── hotel/
├── middleware/
├── utils/
├── config/
└── app.js
```

### New Structure
```
backend/src/
├── modules/                    # Feature-based modules
│   ├── auth/
│   │   ├── controllers/        # HTTP request handlers
│   │   ├── services/           # Business logic layer
│   │   ├── models/             # Data models
│   │   └── routes/             # Route definitions
│   │
│   ├── blog/
│   │   ├── controllers/
│   │   ├── services/           # NEW: Business logic separated
│   │   ├── models/
│   │   └── routes/
│   │       ├── blog.routes.js          # Public routes
│   │       └── admin.blog.routes.js    # Admin routes
│   │
│   └── hotel/
│       ├── controllers/
│       ├── services/           # NEW: Business logic separated
│       ├── models/             # MOVED: From admin/hotel
│       └── routes/
│           ├── hotel.routes.js         # Public routes
│           └── admin.hotel.routes.js   # Admin routes
│
├── core/                       # Shared/core functionality
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── admin.middleware.js
│   │   └── error.middleware.js         # NEW: Global error handler
│   ├── utils/
│   │   └── generateToken.js
│   └── config/
│       └── db.js
│
├── routes.js                   # NEW: Centralized route registration
└── app.js                      # Updated with new structure
```

### Key Changes

#### 1. Service Layer Introduction
**Why**: Separates business logic from HTTP handling

**Example - Auth Service** (`modules/auth/services/auth.service.js`):
```javascript
export class AuthService {
  async registerUser(userData) {
    // Business logic here
  }
  
  async loginUser(credentials) {
    // Business logic here
  }
}
```

**Benefits**:
- Controllers stay thin and focused on HTTP
- Services can be reused across different controllers
- Easier to test business logic independently
- Better code organization

#### 2. Hotel Model Relocation
**Moved**: `admin/hotel/hotel.model.js` → `modules/hotel/models/hotel.model.js`

**Why**: 
- Hotels are a core entity, not admin-specific
- Admin routes now reuse the same service/model
- Reduces duplication

#### 3. Admin Routes as a Layer
**Before**: Separate admin controllers with duplicated logic  
**After**: Admin routes reuse existing services with middleware protection

**Example** (`modules/hotel/routes/admin.hotel.routes.js`):
```javascript
import { createHotel, updateHotel, deleteHotel } from "../controllers/hotel.controller.js";
import authMiddleware from "../../../core/middleware/auth.middleware.js";
import adminMiddleware from "../../../core/middleware/admin.middleware.js";

router.use(authMiddleware, adminMiddleware); // Apply to all routes
router.post("/", createHotel);
router.put("/:id", updateHotel);
```

#### 4. Centralized Routes (`routes.js`)
**New file**: Registers all routes in one place

```javascript
router.use("/auth", authRoutes);
router.use("/blogs", blogRoutes);
router.use("/hotels", hotelRoutes);
router.use("/admin/blogs", adminBlogRoutes);
router.use("/admin/hotels", adminHotelRoutes);
```

**Benefits**:
- Single source of truth for all routes
- Easy to see entire API structure
- Supports API versioning (e.g., `/api/v1`, `/api/v2`)

#### 5. Global Error Handling
**New**: `core/middleware/error.middleware.js`

```javascript
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: { message: err.message }
  });
};
```

**Benefits**:
- Consistent error responses
- No need for try-catch in every route
- Centralized error logging

#### 6. Backward Compatibility
**Important**: Old API endpoints still work!

The app.js registers routes twice:
```javascript
app.use("/api", routes);        // New: /api/hotels
app.use("/hotels", hotelRoutes); // Old: /hotels (still works)
```

**Why**: Gradual migration without breaking existing clients

---

## 🎨 FRONTEND REFACTORING

### Old Structure
```
frontend/src/
├── Pages/
│   ├── Admin/
│   │   ├── AdminPanel.jsx
│   │   ├── AdminHotelApi.js
│   │   └── AdminBlogApi.js
│   ├── Blogs/
│   ├── Hotels/
│   └── ...
├── Components/
│   ├── Navbar/
│   ├── Footer/
│   └── ...
└── api/
    ├── blogApi.js
    └── hotelApi.js
```

### New Structure
```
frontend/src/
├── features/                   # Feature-based organization
│   ├── auth/
│   │   ├── api/
│   │   │   └── auth.api.js
│   │   ├── components/
│   │   ├── hooks/
│   │   └── utils/
│   │
│   ├── admin/
│   │   ├── api/
│   │   │   └── admin.api.js    # NEW: Consolidated admin API
│   │   ├── components/
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── HotelForm.jsx
│   │   │   ├── BlogForm.jsx
│   │   │   └── ...
│   │   └── hooks/
│   │
│   ├── blogs/
│   │   ├── api/
│   │   │   └── blogs.api.js
│   │   ├── components/
│   │   └── hooks/
│   │
│   ├── hotels/
│   │   ├── api/
│   │   │   └── hotels.api.js
│   │   ├── components/
│   │   └── hooks/
│   │
│   ├── culture/
│   ├── home/
│   ├── travel/
│   └── about/
│
├── shared/                     # Shared/reusable components
│   └── components/
│       ├── Navbar/
│       ├── Footer/
│       ├── Banner/
│       └── ...
│
├── api/
│   └── axios.config.js         # NEW: Centralized axios configuration
│
├── Routes/
│   └── Approutes.jsx
│
└── [other files...]
```

### Key Changes

#### 1. Feature-Based Organization
**Before**: Separated by type (Components, Pages)  
**After**: Organized by feature (auth, admin, blogs, hotels)

**Benefits**:
- Related code lives together
- Easy to find feature-specific logic
- Better scalability as project grows
- Clear feature boundaries

#### 2. Consolidated Admin API
**New**: `features/admin/api/admin.api.js`

**Before**:
```javascript
// AdminHotelApi.js
import axios from 'axios';
export const fetchHotels = async () => { ... };

// AdminBlogApi.js
import axios from 'axios';
export const fetchBlogs = async () => { ... };
```

**After**:
```javascript
// admin.api.js
import axiosInstance from '../../../api/axios.config.js';

export const fetchHotels = async () => { ... };
export const addHotel = async (data) => { ... };
export const fetchBlogs = async () => { ... };
export const updateBlog = async (id, data) => { ... };
```

**Benefits**:
- Single source for all admin operations
- Shared axios configuration
- Better error handling
- Consistent API structure

#### 3. Centralized Axios Configuration
**New**: `api/axios.config.js`

```javascript
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
});

// Request interceptor - add token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login
    }
    return Promise.reject(error);
  }
);
```

**Benefits**:
- Automatic token injection
- Global error handling
- Single configuration point
- Consistent timeout and headers

#### 4. Shared Components
**Moved**: `Components/` → `shared/components/`

**Why**:
- Clear distinction between shared and feature-specific
- Reusable components in one place
- Better naming convention

#### 5. Updated Import Paths
**AdminPanel.jsx** before:
```javascript
import { fetchHotels } from './AdminHotelApi';
import { fetchBlogs } from './AdminBlogApi';
```

**AdminPanel.jsx** after:
```javascript
import { 
  fetchHotels, 
  fetchBlogs,
  addHotel,
  updateBlog 
} from '../api/admin.api.js';
```

---

## 📊 API Endpoints (Unchanged)

### Public Routes
- `GET /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /blogs` - Get all blogs
- `GET /blogs/:id` - Get blog by ID
- `GET /hotels` - Get all hotels
- `GET /hotels/:id` - Get hotel by ID

### Admin Routes (Protected)
- `POST /auth/admin/login` - Admin login
- `GET /admin/blogs` - Get all blogs (admin)
- `PUT /admin/blogs/:id` - Update blog
- `DELETE /admin/blogs/:id` - Delete blog
- `GET /admin/hotels` - Get all hotels (admin)
- `POST /admin/hotels` - Create hotel
- `PUT /admin/hotels/:id` - Update hotel
- `DELETE /admin/hotels/:id` - Delete hotel

**Note**: All endpoints work with both `/` and `/api/` prefixes for backward compatibility.

---

## 🔄 Migration Guide

### For Backend Development
1. **Creating a new feature**:
   ```
   modules/
   └── feature-name/
       ├── controllers/
       ├── services/      # Business logic
       ├── models/
       └── routes/
   ```

2. **Adding business logic**: Put it in `services/`, not controllers
3. **Adding middleware**: Put shared middleware in `core/middleware/`
4. **Registering routes**: Add to `routes.js`

### For Frontend Development
1. **Creating a new feature**:
   ```
   features/
   └── feature-name/
       ├── api/           # API calls for this feature
       ├── components/    # Feature-specific components
       ├── hooks/         # Custom hooks
       └── utils/         # Feature-specific utilities
   ```

2. **Reusable components**: Put in `shared/components/`
3. **API calls**: Use `axiosInstance` from `api/axios.config.js`
4. **Authentication**: Token is automatically added by interceptor

---

## ✅ Testing Checklist

### Backend
- [ ] Server starts without errors
- [ ] All routes respond correctly
- [ ] Admin middleware protects admin routes
- [ ] Auth token validation works
- [ ] Error handling returns proper status codes
- [ ] Database operations work

### Frontend
- [ ] All pages load correctly
- [ ] Admin panel loads hotels and blogs
- [ ] Authentication works (login/register)
- [ ] Admin login works
- [ ] Token is stored and sent with requests
- [ ] Error messages display properly

---

## 📝 Next Steps

### Backend
1. Add request validation (express-validator)
2. Add rate limiting
3. Add API documentation (Swagger)
4. Add unit tests for services
5. Add integration tests for routes
6. Implement caching (Redis)
7. Add logging (Winston)

### Frontend
1. Add React Query for data fetching
2. Add form validation (React Hook Form)
3. Add error boundaries
4. Add loading states
5. Add unit tests (Vitest)
6. Add E2E tests (Playwright)
7. Optimize bundle size

---

## 🆘 Troubleshooting

### "Module not found" errors
- Check import paths use relative paths correctly
- Ensure `.js` extension is included in imports (ES modules)
- Verify files were moved to correct locations

### API 404 errors
- Check backend server is running
- Verify route registration in `routes.js`
- Check middleware isn't blocking requests

### Frontend API errors
- Verify `axios.config.js` has correct BASE_URL
- Check browser console for CORS errors
- Verify token is being sent with requests

---

## 📚 Resources

- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
- [React Feature-Based Architecture](https://reactjs.org/docs/faq-structure.html)
- [API Design Best Practices](https://restfulapi.net/)

---

**Refactoring Completed**: January 29, 2026  
**Maintained By**: Development Team
