# 🚀 POSTMAN QUICK REFERENCE

## 📋 All Endpoints at a Glance

| # | Method | Endpoint | Auth Required | Description |
|---|--------|----------|---------------|-------------|
| **AUTHENTICATION** |
| 1 | POST | `/auth/register` | ❌ No | Register new user |
| 2 | POST | `/auth/login` | ❌ No | User login |
| 3 | POST | `/auth/admin-login` | ❌ No | Admin login |
| **PUBLIC BLOG ROUTES** |
| 4 | GET | `/blogs` | ❌ No | Get all published blogs |
| 5 | GET | `/blogs/:id` | ❌ No | Get single blog |
| **USER BLOG ROUTES** |
| 6 | POST | `/blogs` | ✅ User | Create blog |
| 7 | GET | `/blogs/user/my-blogs` | ✅ User | Get my blogs |
| 8 | PUT | `/blogs/:id` | ✅ User | Update own blog |
| 9 | DELETE | `/blogs/:id` | ✅ User | Delete own blog |
| **ADMIN BLOG ROUTES** |
| 10 | GET | `/admin/blogs` | 👑 Admin | Get all blogs |
| 11 | PUT | `/admin/blogs/:id` | 👑 Admin | Update any blog |
| 12 | DELETE | `/admin/blogs/:id` | 👑 Admin | Delete any blog |
| **PUBLIC HOTEL ROUTES** |
| 13 | GET | `/hotels` | ❌ No | Get all hotels |
| 14 | GET | `/hotels/:id` | ❌ No | Get single hotel |
| **ADMIN HOTEL ROUTES** |
| 15 | GET | `/admin/hotels` | 👑 Admin | Get all hotels |
| 16 | POST | `/admin/hotels` | 👑 Admin | Create hotel |
| 17 | PUT | `/admin/hotels/:id` | 👑 Admin | Update hotel |
| 18 | DELETE | `/admin/hotels/:id` | 👑 Admin | Delete hotel |

---

## 🔑 Admin Credentials

```
Email: admin@kishanganj.com
Password: admin123
```

---

## 📦 Copy-Paste Sample Data

### 1. Register User
```
POST http://localhost:5000/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "john123"
}
```

### 2. Login User
```
POST http://localhost:5000/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "john123"
}
```

### 3. Admin Login
```
POST http://localhost:5000/auth/admin-login
Content-Type: application/json

{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

### 4. Create Blog (User)
```
POST http://localhost:5000/blogs
Authorization: Bearer YOUR_USER_TOKEN
Content-Type: application/json

{
  "title": "Top 10 Tourist Places in Kishanganj",
  "content": "Kishanganj offers amazing attractions including historical sites, natural beauty, and cultural experiences. Here are the must-visit places...",
  "tags": ["tourism", "travel", "kishanganj"],
  "published": true
}
```

### 5. Update Blog (User)
```
PUT http://localhost:5000/blogs/BLOG_ID
Authorization: Bearer YOUR_USER_TOKEN
Content-Type: application/json

{
  "title": "Top 15 Tourist Places in Kishanganj (Updated)",
  "content": "Updated with 5 more amazing places to visit...",
  "tags": ["tourism", "travel", "updated"],
  "published": true
}
```

### 6. Get All Blogs (Public)
```
GET http://localhost:5000/blogs
```

### 7. Get All Blogs (Admin)
```
GET http://localhost:5000/admin/blogs
Authorization: Bearer YOUR_ADMIN_TOKEN
```

### 8. Update Any Blog (Admin)
```
PUT http://localhost:5000/admin/blogs/BLOG_ID
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json

{
  "title": "Official Tourism Guide (Admin Verified)",
  "content": "This content has been verified and approved by admin...",
  "tags": ["official", "verified"],
  "published": true
}
```

### 9. Delete Blog (Admin)
```
DELETE http://localhost:5000/admin/blogs/BLOG_ID
Authorization: Bearer YOUR_ADMIN_TOKEN
```

### 10. Create Hotel (Admin)
```
POST http://localhost:5000/admin/hotels
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json

{
  "name": "Hotel Kishanganj Palace",
  "location": "Main Road, Kishanganj, Bihar",
  "price": 2500,
  "description": "Luxury hotel in the heart of Kishanganj with modern amenities and excellent service.",
  "amenities": ["WiFi", "AC", "Restaurant", "Parking", "Room Service"],
  "rating": 4.5,
  "contact": "+91 98765 43210",
  "email": "palace@kishanganj.com",
  "image": "https://example.com/hotel-palace.jpg"
}
```

### 11. Update Hotel (Admin)
```
PUT http://localhost:5000/admin/hotels/HOTEL_ID
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json

{
  "name": "Hotel Kishanganj Palace (Renovated)",
  "location": "Main Road, Kishanganj, Bihar",
  "price": 3000,
  "description": "Newly renovated luxury hotel with upgraded facilities.",
  "amenities": ["WiFi", "AC", "Restaurant", "Parking", "Room Service", "Gym", "Pool"],
  "rating": 4.8,
  "contact": "+91 98765 43210",
  "email": "palace@kishanganj.com",
  "image": "https://example.com/hotel-palace-new.jpg"
}
```

### 12. Get All Hotels (Public)
```
GET http://localhost:5000/hotels
```

### 13. Get Single Hotel (Public)
```
GET http://localhost:5000/hotels/HOTEL_ID
```

### 14. Delete Hotel (Admin)
```
DELETE http://localhost:5000/admin/hotels/HOTEL_ID
Authorization: Bearer YOUR_ADMIN_TOKEN
```

---

## 🎯 Testing Workflow

### Step 1: Setup
```bash
# Run server
cd /home/sama/Documents/Paid-Project/backend
npm start

# Create admin (in new terminal)
node src/admin/scripts/createAdmin.js
```

### Step 2: Get Tokens
1. Admin login → Save admin token
2. Register user → Save user token

### Step 3: Test Blogs
1. Create blog (as user)
2. Get all blogs (public)
3. Update blog (as user)
4. Get all blogs (as admin)
5. Update any blog (as admin)

### Step 4: Test Hotels
1. Create hotel (as admin)
2. Get all hotels (public)
3. Update hotel (as admin)
4. Delete hotel (as admin)

---

## 📊 Expected Status Codes

| Code | Meaning | When |
|------|---------|------|
| 200 | OK | Successful GET, PUT, DELETE |
| 201 | Created | Successful POST (create) |
| 400 | Bad Request | Missing required fields |
| 401 | Unauthorized | No token or invalid token |
| 403 | Forbidden | Not admin (for admin routes) |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Something went wrong |

---

## 🔥 3 Most Important Tests

### Test 1: Admin Flow
```
1. POST /auth/admin-login
2. POST /admin/hotels (create)
3. GET /hotels (verify public can see)
```

### Test 2: User Flow
```
1. POST /auth/register
2. POST /blogs (create)
3. GET /blogs/user/my-blogs (verify)
```

### Test 3: Admin Management
```
1. GET /admin/blogs (see all)
2. PUT /admin/blogs/:id (edit any)
3. DELETE /admin/blogs/:id (delete any)
```

---

## 💡 Pro Tips

1. **Save tokens in Postman Environment Variables**
   - Create variable: `admin_token`
   - Use in header: `Bearer {{admin_token}}`

2. **Save IDs after creation**
   - Copy `_id` from response
   - Use in DELETE/PUT requests

3. **Test in order**
   - Auth first
   - Create second
   - Read/Update/Delete last

4. **Check MongoDB**
   - Verify data is actually saved
   - Use MongoDB Compass or CLI

---

## ✅ All Tests Passing Checklist

- [ ] Server running on port 5000
- [ ] MongoDB connected
- [ ] Admin user created
- [ ] Can register new user
- [ ] Can login as user
- [ ] Can login as admin
- [ ] Can create blog (user)
- [ ] Can update own blog (user)
- [ ] Can delete own blog (user)
- [ ] Can see all blogs (admin)
- [ ] Can update any blog (admin)
- [ ] Can delete any blog (admin)
- [ ] Can create hotel (admin)
- [ ] Can update hotel (admin)
- [ ] Can delete hotel (admin)
- [ ] Public can view blogs
- [ ] Public can view hotels

---

**Base URL:** `http://localhost:5000`  
**Documentation:** See `POSTMAN_TESTING_GUIDE.md` for detailed examples

🎉 **Happy Testing!**
