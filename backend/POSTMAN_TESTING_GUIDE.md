# 🧪 COMPLETE POSTMAN TESTING GUIDE

## 📋 Table of Contents
1. [Setup](#setup)
2. [Authentication Tests](#authentication-tests)
3. [Blog Tests (User)](#blog-tests-user)
   - 3.1 Get All Blogs
   - 3.2 Get Single Blog
   - 3.3 Create Blog
   - 3.4 Get My Blogs
   - 3.5 Update Own Blog
   - 3.6 Delete Own Blog
   - 3.7 Like/Unlike Blog ⭐ NEW
   - 3.8 Add Comment ⭐ NEW
   - 3.9 Delete Own Comment ⭐ NEW
   - 3.10 Get Blog with Interactions ⭐ NEW
4. [Blog Tests (Admin)](#blog-tests-admin)
   - 4.1 Get All Blogs
   - 4.2 Update Any Blog
   - 4.3 Delete Any Blog
   - 4.4 Delete Any Comment ⭐ NEW
5. [Hotel Tests (Public)](#hotel-tests-public)
6. [Hotel Tests (Admin)](#hotel-tests-admin)

---

## 🔧 Setup

### Base URL:
```
http://localhost:5000
```

### Required Headers for Authenticated Routes:
```
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
```

---

## 1️⃣ AUTHENTICATION TESTS

### 1.1 Create Admin User (First Run Script)

**Run in terminal first:**
```bash
cd /home/sama/Documents/Paid-Project/backend
node src/admin/scripts/createAdmin.js
```

---

### 1.2 Register New User

**Method:** `POST`  
**URL:** `http://localhost:5000/auth/register`  
**Headers:** `Content-Type: application/json`

**Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "john123"
}
```

**Expected Response (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "67a1b2c3d4e5f6789012345",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Save the token** for authenticated requests!

---

### 1.3 User Login

**Method:** `POST`  
**URL:** `http://localhost:5000/auth/login`  
**Headers:** `Content-Type: application/json`

**Body (JSON):**
```json
{
  "email": "john@example.com",
  "password": "john123"
}
```

**Expected Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "67a1b2c3d4e5f6789012345",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### 1.4 Admin Login

**Method:** `POST`  
**URL:** `http://localhost:5000/auth/admin-login`  
**Headers:** `Content-Type: application/json`

**Body (JSON):**
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

**Expected Response (200):**
```json
{
  "message": "Admin login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "_id": "67a1b2c3d4e5f6789012345",
    "name": "Admin User",
    "email": "admin@kishanganj.com",
    "role": "admin",
    "isAdmin": true
  }
}
```

**Save the admin token** for admin requests!

---

## 2️⃣ BLOG TESTS (USER)

### 2.1 Get All Published Blogs (Public)

**Method:** `GET`  
**URL:** `http://localhost:5000/blogs`  
**Headers:** None required

**Expected Response (200):**
```json
[
  {
    "_id": "67a1b2c3d4e5f6789012345",
    "title": "Exploring Kishanganj",
    "content": "Kishanganj is a beautiful city...",
    "author": {
      "_id": "67a1b2c3d4e5f6789012340",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "tags": ["travel", "tourism"],
    "published": true,
    "createdAt": "2026-01-30T10:00:00.000Z",
    "updatedAt": "2026-01-30T10:00:00.000Z"
  }
]
```

---

### 2.2 Get Single Blog (Public)

**Method:** `GET`  
**URL:** `http://localhost:5000/blogs/:id`  
**Example:** `http://localhost:5000/blogs/67a1b2c3d4e5f6789012345`  
**Headers:** None required

**Expected Response (200):**
```json
{
  "_id": "67a1b2c3d4e5f6789012345",
  "title": "Exploring Kishanganj",
  "content": "Kishanganj is a beautiful city...",
  "author": {
    "_id": "67a1b2c3d4e5f6789012340",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "tags": ["travel", "tourism"],
  "published": true,
  "createdAt": "2026-01-30T10:00:00.000Z",
  "updatedAt": "2026-01-30T10:00:00.000Z"
}
```

---

### 2.3 Create Blog (Authenticated User)

**Method:** `POST`  
**URL:** `http://localhost:5000/blogs`  
**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "title": "Top 10 Places to Visit in Kishanganj",
  "content": "Kishanganj offers amazing tourist attractions including historical sites, natural beauty, and cultural experiences. Here are the top 10 places you must visit...",
  "tags": ["tourism", "travel", "kishanganj", "attractions"],
  "published": true
}
```

**Expected Response (201):**
```json
{
  "message": "Blog created successfully",
  "blog": {
    "_id": "67a1b2c3d4e5f6789012346",
    "title": "Top 10 Places to Visit in Kishanganj",
    "content": "Kishanganj offers amazing tourist attractions...",
    "author": {
      "_id": "67a1b2c3d4e5f6789012340",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "tags": ["tourism", "travel", "kishanganj", "attractions"],
    "published": true,
    "createdAt": "2026-01-30T11:00:00.000Z",
    "updatedAt": "2026-01-30T11:00:00.000Z"
  }
}
```

---

### 2.4 Get My Blogs (Authenticated User)

**Method:** `GET`  
**URL:** `http://localhost:5000/blogs/user/my-blogs`  
**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN
```

**Expected Response (200):**
```json
[
  {
    "_id": "67a1b2c3d4e5f6789012346",
    "title": "Top 10 Places to Visit in Kishanganj",
    "content": "Kishanganj offers amazing tourist attractions...",
    "author": {
      "_id": "67a1b2c3d4e5f6789012340",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "tags": ["tourism", "travel"],
    "published": true,
    "createdAt": "2026-01-30T11:00:00.000Z"
  }
]
```

---

### 2.5 Update Own Blog (Authenticated User)

**Method:** `PUT`  
**URL:** `http://localhost:5000/blogs/:id`  
**Example:** `http://localhost:5000/blogs/67a1b2c3d4e5f6789012346`  
**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "title": "Top 15 Places to Visit in Kishanganj (Updated)",
  "content": "Updated content with 5 more amazing places...",
  "tags": ["tourism", "travel", "updated"],
  "published": true
}
```

**Expected Response (200):**
```json
{
  "message": "Blog updated successfully",
  "blog": {
    "_id": "67a1b2c3d4e5f6789012346",
    "title": "Top 15 Places to Visit in Kishanganj (Updated)",
    "content": "Updated content with 5 more amazing places...",
    "author": {
      "_id": "67a1b2c3d4e5f6789012340",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "tags": ["tourism", "travel", "updated"],
    "published": true,
    "updatedAt": "2026-01-30T12:00:00.000Z"
  }
}
```

---

### 2.6 Delete Own Blog (Authenticated User)

**Method:** `DELETE`  
**URL:** `http://localhost:5000/blogs/:id`  
**Example:** `http://localhost:5000/blogs/67a1b2c3d4e5f6789012346`  
**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN
```

**Expected Response (200):**
```json
{
  "message": "Blog deleted successfully"
}
```

---

### 2.7 Like/Unlike Blog (Authenticated User)

**Method:** `POST`  
**URL:** `http://localhost:5000/blogs/:id/like`  
**Example:** `http://localhost:5000/blogs/67a1b2c3d4e5f6789012345/like`  
**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN
```

**Expected Response - First Time (Liked):**
```json
{
  "message": "Blog liked",
  "liked": true,
  "likeCount": 1
}
```

**Expected Response - Second Time (Unliked):**
```json
{
  "message": "Blog unliked",
  "liked": false,
  "likeCount": 0
}
```

**Note:** This endpoint toggles between like and unlike. Same endpoint for both actions!

---

### 2.8 Add Comment to Blog (Authenticated User)

**Method:** `POST`  
**URL:** `http://localhost:5000/blogs/:id/comments`  
**Example:** `http://localhost:5000/blogs/67a1b2c3d4e5f6789012345/comments`  
**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "text": "Great article! I learned a lot about Kishanganj's culture and heritage."
}
```

**Expected Response (201):**
```json
{
  "message": "Comment added successfully",
  "comment": {
    "_id": "67a1b2c3d4e5f6789012347",
    "user": {
      "_id": "67a1b2c3d4e5f6789012340",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "text": "Great article! I learned a lot about Kishanganj's culture and heritage.",
    "createdAt": "2026-01-30T13:00:00.000Z"
  },
  "commentCount": 1
}
```

---

### 2.9 Delete Own Comment (Authenticated User)

**Method:** `DELETE`  
**URL:** `http://localhost:5000/blogs/:id/comments/:commentId`  
**Example:** `http://localhost:5000/blogs/67a1b2c3d4e5f6789012345/comments/67a1b2c3d4e5f6789012347`  
**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN
```

**Expected Response (200):**
```json
{
  "message": "Comment deleted successfully",
  "commentCount": 0
}
```

**Important:** You can ONLY delete your own comments. Trying to delete another user's comment will result in:
```json
{
  "message": "Unauthorized to delete this comment"
}
```

---

### 2.10 Get Blog with Full Interactions (Public)

**Method:** `GET`  
**URL:** `http://localhost:5000/blogs/:id/interactions`  
**Example:** `http://localhost:5000/blogs/67a1b2c3d4e5f6789012345/interactions`  
**Headers:** None required

**Expected Response (200):**
```json
{
  "_id": "67a1b2c3d4e5f6789012345",
  "title": "Exploring Kishanganj",
  "content": "Kishanganj is a beautiful city...",
  "author": {
    "_id": "67a1b2c3d4e5f6789012340",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "tags": ["travel", "tourism"],
  "published": true,
  "likes": [
    {
      "_id": "67a1b2c3d4e5f6789012341",
      "name": "Alice Smith",
      "email": "alice@example.com"
    },
    {
      "_id": "67a1b2c3d4e5f6789012342",
      "name": "Bob Johnson",
      "email": "bob@example.com"
    }
  ],
  "comments": [
    {
      "_id": "67a1b2c3d4e5f6789012347",
      "user": {
        "_id": "67a1b2c3d4e5f6789012343",
        "name": "Carol White",
        "email": "carol@example.com"
      },
      "text": "Very informative article!",
      "createdAt": "2026-01-30T13:00:00.000Z"
    }
  ],
  "likeCount": 2,
  "commentCount": 1,
  "createdAt": "2026-01-30T10:00:00.000Z",
  "updatedAt": "2026-01-30T13:00:00.000Z"
}
```

**Note:** This endpoint shows the complete blog with all likes (who liked) and comments (who commented). Use this for blog detail pages.

---

## 3️⃣ BLOG TESTS (ADMIN)

### 3.1 Get All Blogs (Admin - Including Unpublished)

**Method:** `GET`  
**URL:** `http://localhost:5000/admin/blogs`  
**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Expected Response (200):**
```json
[
  {
    "_id": "67a1b2c3d4e5f6789012345",
    "title": "Published Blog",
    "content": "This is published...",
    "author": {
      "_id": "67a1b2c3d4e5f6789012340",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "published": true
  },
  {
    "_id": "67a1b2c3d4e5f6789012347",
    "title": "Unpublished Draft",
    "content": "This is a draft...",
    "author": {
      "_id": "67a1b2c3d4e5f6789012341",
      "name": "Jane Smith",
      "email": "jane@example.com"
    },
    "published": false
  }
]
```

---

### 3.2 Update Any Blog (Admin)

**Method:** `PUT`  
**URL:** `http://localhost:5000/admin/blogs/:id`  
**Example:** `http://localhost:5000/admin/blogs/67a1b2c3d4e5f6789012345`  
**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "title": "Kishanganj Tourism Guide (Admin Edited)",
  "content": "Updated by admin with additional information...",
  "tags": ["tourism", "guide", "admin-verified"],
  "published": true
}
```

**Expected Response (200):**
```json
{
  "_id": "67a1b2c3d4e5f6789012345",
  "title": "Kishanganj Tourism Guide (Admin Edited)",
  "content": "Updated by admin with additional information...",
  "author": {
    "_id": "67a1b2c3d4e5f6789012340",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "tags": ["tourism", "guide", "admin-verified"],
  "published": true,
  "updatedAt": "2026-01-30T13:00:00.000Z"
}
```

---

### 3.3 Delete Any Blog (Admin)

**Method:** `DELETE`  
**URL:** `http://localhost:5000/admin/blogs/:id`  
**Example:** `http://localhost:5000/admin/blogs/67a1b2c3d4e5f6789012345`  
**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Expected Response (200):**
```json
{
  "message": "Blog deleted successfully"
}
```

---

### 3.4 Delete Any Comment from Any Blog (Admin) ⭐ NEW

**Method:** `DELETE`  
**URL:** `http://localhost:5000/admin/blogs/:id/comments/:commentId`  
**Example:** `http://localhost:5000/admin/blogs/67a1b2c3d4e5f6789012345/comments/67a1b2c3d4e5f6789012347`  
**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Expected Response (200):**
```json
{
  "message": "Comment deleted successfully by admin",
  "commentCount": 5
}
```

**Important Notes:**
- Admin can delete **ANY** comment on **ANY** blog (no ownership check)
- Users can only delete their own comments (see section 2.9)
- Useful for moderating inappropriate or spam comments

---

## 4️⃣ HOTEL TESTS (PUBLIC)

### 4.1 Get All Hotels (Public)

**Method:** `GET`  
**URL:** `http://localhost:5000/hotels`  
**Headers:** None required

**Expected Response (200):**
```json
[
  {
    "_id": "67a1b2c3d4e5f6789012350",
    "name": "Hotel Kishanganj Palace",
    "location": "Main Road, Kishanganj",
    "price": 2500,
    "description": "Luxury hotel in the heart of Kishanganj",
    "amenities": ["WiFi", "AC", "Restaurant", "Parking"],
    "rating": 4.5,
    "contact": "+91 98765 43210",
    "email": "palace@kishanganj.com",
    "image": "https://example.com/hotel1.jpg",
    "createdAt": "2026-01-30T10:00:00.000Z"
  }
]
```

---

### 4.2 Get Single Hotel (Public)

**Method:** `GET`  
**URL:** `http://localhost:5000/hotels/:id`  
**Example:** `http://localhost:5000/hotels/67a1b2c3d4e5f6789012350`  
**Headers:** None required

**Expected Response (200):**
```json
{
  "_id": "67a1b2c3d4e5f6789012350",
  "name": "Hotel Kishanganj Palace",
  "location": "Main Road, Kishanganj",
  "price": 2500,
  "description": "Luxury hotel in the heart of Kishanganj with modern amenities and excellent service.",
  "amenities": ["WiFi", "AC", "Restaurant", "Parking", "Room Service"],
  "rating": 4.5,
  "contact": "+91 98765 43210",
  "email": "palace@kishanganj.com",
  "image": "https://example.com/hotel1.jpg",
  "createdAt": "2026-01-30T10:00:00.000Z",
  "updatedAt": "2026-01-30T10:00:00.000Z"
}
```

---

## 5️⃣ HOTEL TESTS (ADMIN)

### 5.1 Get All Hotels (Admin)

**Method:** `GET`  
**URL:** `http://localhost:5000/admin/hotels`  
**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Expected Response (200):**
```json
[
  {
    "_id": "67a1b2c3d4e5f6789012350",
    "name": "Hotel Kishanganj Palace",
    "location": "Main Road, Kishanganj",
    "price": 2500,
    "rating": 4.5
  }
]
```

---

### 5.2 Create Hotel (Admin)

**Method:** `POST`  
**URL:** `http://localhost:5000/admin/hotels`  
**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "name": "Royal Guest House",
  "location": "Station Road, Kishanganj",
  "price": 1500,
  "description": "Comfortable guest house near railway station with basic amenities and friendly service.",
  "amenities": ["WiFi", "AC", "Parking", "24x7 Check-in"],
  "rating": 4.0,
  "contact": "+91 98765 43211",
  "email": "royal@kishanganj.com",
  "image": "https://example.com/hotel2.jpg"
}
```

**Expected Response (201):**
```json
{
  "_id": "67a1b2c3d4e5f6789012351",
  "name": "Royal Guest House",
  "location": "Station Road, Kishanganj",
  "price": 1500,
  "description": "Comfortable guest house near railway station...",
  "amenities": ["WiFi", "AC", "Parking", "24x7 Check-in"],
  "rating": 4.0,
  "contact": "+91 98765 43211",
  "email": "royal@kishanganj.com",
  "image": "https://example.com/hotel2.jpg",
  "createdAt": "2026-01-30T14:00:00.000Z",
  "updatedAt": "2026-01-30T14:00:00.000Z"
}
```

---

### 5.3 Update Hotel (Admin)

**Method:** `PUT`  
**URL:** `http://localhost:5000/admin/hotels/:id`  
**Example:** `http://localhost:5000/admin/hotels/67a1b2c3d4e5f6789012351`  
**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "name": "Royal Guest House & Restaurant",
  "location": "Station Road, Kishanganj",
  "price": 1800,
  "description": "Upgraded guest house with restaurant facility!",
  "amenities": ["WiFi", "AC", "Parking", "24x7 Check-in", "Restaurant"],
  "rating": 4.2,
  "contact": "+91 98765 43211",
  "email": "royal@kishanganj.com",
  "image": "https://example.com/hotel2-updated.jpg"
}
```

**Expected Response (200):**
```json
{
  "_id": "67a1b2c3d4e5f6789012351",
  "name": "Royal Guest House & Restaurant",
  "location": "Station Road, Kishanganj",
  "price": 1800,
  "description": "Upgraded guest house with restaurant facility!",
  "amenities": ["WiFi", "AC", "Parking", "24x7 Check-in", "Restaurant"],
  "rating": 4.2,
  "contact": "+91 98765 43211",
  "email": "royal@kishanganj.com",
  "image": "https://example.com/hotel2-updated.jpg",
  "updatedAt": "2026-01-30T15:00:00.000Z"
}
```

---

### 5.4 Delete Hotel (Admin)

**Method:** `DELETE`  
**URL:** `http://localhost:5000/admin/hotels/:id`  
**Example:** `http://localhost:5000/admin/hotels/67a1b2c3d4e5f6789012351`  
**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Expected Response (200):**
```json
{
  "message": "Hotel deleted successfully"
}
```

---

## 🧪 COMPLETE TEST SEQUENCE

### Step-by-Step Testing Order:

1. **Create Admin** (Run script first)
2. **Admin Login** → Get admin token
3. **Register User** → Get user token
4. **User Login** → Verify user login
5. **Create Blog** (as user) → Get blog ID
6. **Get All Blogs** (public) → Verify blog appears
7. **Update Own Blog** (as user)
8. **Get My Blogs** (as user)
9. **Get All Blogs** (as admin) → See all blogs
10. **Update Any Blog** (as admin)
11. **Create Hotel** (as admin) → Get hotel ID
12. **Get All Hotels** (public) → Verify hotel appears
13. **Update Hotel** (as admin)
14. **Delete Blog** (as admin)
15. **Delete Hotel** (as admin)

---

## 📝 QUICK REFERENCE - Sample Data

### User Registration:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "test123"
}
```

### Blog Creation:
```json
{
  "title": "Amazing Places in Kishanganj",
  "content": "Discover the hidden gems of Kishanganj including beautiful landscapes, historical monuments, and local culture.",
  "tags": ["tourism", "travel", "kishanganj"],
  "published": true
}
```

### Hotel Creation:
```json
{
  "name": "Budget Inn Kishanganj",
  "location": "Near Bus Stand, Kishanganj",
  "price": 800,
  "description": "Affordable accommodation with clean rooms",
  "amenities": ["WiFi", "Parking"],
  "rating": 3.5,
  "contact": "+91 12345 67890",
  "email": "budget@kishanganj.com"
}
```

---

## ⚠️ Common Errors

### 401 Unauthorized:
```json
{
  "message": "No token provided"
}
```
**Fix:** Add `Authorization: Bearer YOUR_TOKEN` header

### 403 Forbidden:
```json
{
  "message": "Access denied. Admin only."
}
```
**Fix:** Use admin token, not user token

### 404 Not Found:
```json
{
  "message": "Blog not found"
}
```
**Fix:** Check the ID in the URL

### 400 Bad Request:
```json
{
  "success": false,
  "error": {
    "message": "Title and content are required"
  }
}
```
**Fix:** Include all required fields in request body

---

## ✅ Success Indicators

All tests should show:
- ✅ Correct status codes (200, 201, etc.)
- ✅ Valid JSON responses
- ✅ Data persisted in database
- ✅ Author field auto-populated
- ✅ Timestamps generated automatically
- ✅ Authentication working correctly

---

**Happy Testing!** 🚀

**Server:** `http://localhost:5000`  
**Admin Email:** `admin@kishanganj.com`  
**Admin Password:** `admin123`
