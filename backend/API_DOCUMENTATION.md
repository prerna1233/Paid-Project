# API Documentation

## Base URL
```
http://localhost:5000
```

---

## 🔐 Authentication Endpoints

### 1. Register User
**POST** `/auth/register`

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### 2. User Login
**POST** `/auth/login`

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### 3. Admin Login
**POST** `/auth/admin/login`

**Body:**
```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "token": "jwt_token_here",
  "admin": {
    "id": "admin_id",
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

---

## 📝 Blog Endpoints (Public)

### 4. Get All Blogs
**GET** `/blogs`

**Response:**
```json
[
  {
    "_id": "blog_id",
    "title": "My First Blog",
    "content": "Blog content here...",
    "author": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "tags": ["tech", "programming"],
    "published": true,
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  }
]
```

---

### 5. Get Blog by ID
**GET** `/blogs/:id`

**Response:** Same as single blog object above

---

## 📝 Blog Endpoints (Authenticated Users)

### 6. Create Blog
**POST** `/blogs`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Body:**
```json
{
  "title": "My Blog Title",
  "content": "Blog content goes here...",
  "tags": ["tech", "javascript"]
}
```

**Response:**
```json
{
  "_id": "blog_id",
  "title": "My Blog Title",
  "content": "Blog content goes here...",
  "author": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "tags": ["tech", "javascript"],
  "published": true,
  "createdAt": "2026-01-29T00:00:00.000Z",
  "updatedAt": "2026-01-29T00:00:00.000Z"
}
```

---

### 7. Get My Blogs
**GET** `/blogs/my/blogs`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:** Array of blogs created by the authenticated user

---

### 8. Update My Blog
**PUT** `/blogs/:id`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Body:**
```json
{
  "title": "Updated Title",
  "content": "Updated content...",
  "tags": ["updated", "tags"]
}
```

**Response:** Updated blog object

---

### 9. Delete My Blog
**DELETE** `/blogs/:id`

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "message": "Blog deleted successfully"
}
```

---

## 🏨 Hotel Endpoints (Public)

### 10. Get All Hotels
**GET** `/hotels`

**Response:**
```json
[
  {
    "_id": "hotel_id",
    "name": "Grand Hotel",
    "location": "New York",
    "description": "Luxury hotel in downtown",
    "price": 200,
    "rating": 4.5,
    "facilities": "WiFi, Pool, Gym",
    "image": "https://example.com/image.jpg",
    "createdAt": "2026-01-29T00:00:00.000Z",
    "updatedAt": "2026-01-29T00:00:00.000Z"
  }
]
```

---

### 11. Get Hotel by ID
**GET** `/hotels/:id`

**Response:** Single hotel object

---

## 🏨 Hotel Endpoints (Admin Only)

### 12. Add Hotel
**POST** `/admin/hotels`

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Body:**
```json
{
  "name": "Grand Hotel",
  "location": "New York",
  "description": "Luxury hotel in downtown",
  "price": 200,
  "rating": 4.5,
  "facilities": "WiFi, Pool, Gym",
  "image": "https://example.com/image.jpg"
}
```

**Response:** Created hotel object

---

### 13. Get All Hotels (Admin)
**GET** `/admin/hotels`

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Response:** Array of all hotels

---

### 14. Get Hotel by ID (Admin)
**GET** `/admin/hotels/:id`

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Response:** Single hotel object

---

### 15. Update Hotel
**PUT** `/admin/hotels/:id`

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Body:**
```json
{
  "name": "Updated Hotel Name",
  "price": 250
}
```

**Response:** Updated hotel object

---

### 16. Delete Hotel
**DELETE** `/admin/hotels/:id`

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Response:**
```json
{
  "message": "Hotel deleted successfully"
}
```

---

## 📝 Blog Endpoints (Admin Only)

### 17. Get All Blogs (Admin)
**GET** `/admin/blogs`

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Response:** Array of all blogs (including unpublished)

---

### 18. Update Blog (Admin)
**PUT** `/admin/blogs/:id`

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Body:**
```json
{
  "title": "Updated Title",
  "published": false
}
```

**Response:** Updated blog object

---

### 19. Delete Blog (Admin)
**DELETE** `/admin/blogs/:id`

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Response:**
```json
{
  "message": "Blog deleted successfully"
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "User already exists"
}
```

### 401 Unauthorized
```json
{
  "message": "No token provided"
}
```

or

```json
{
  "message": "Token invalid or expired"
}
```

### 403 Forbidden
```json
{
  "message": "Access denied. Admin only."
}
```

### 404 Not Found
```json
{
  "message": "Blog not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Error message here"
}
```

---

## Notes

- All authenticated endpoints require the `Authorization: Bearer <token>` header
- Admin endpoints require a valid admin token (role: "admin")
- Timestamps are automatically added to all resources (createdAt, updatedAt)
- Blog authors are automatically populated with user information
