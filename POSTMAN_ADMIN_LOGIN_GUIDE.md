# 🔐 Admin Login via Postman - Complete Guide

## Step 1: Create Admin User in Database

Run this in your backend terminal:

```bash
cd /home/sama/Documents/Paid-Project/backend
node createAdmin.js
```

**Expected Output:**
```
✅ Admin user created!
═══════════════════════════════════
📝 Admin Credentials:
═══════════════════════════════════
Email: admin@kishanganj.com
Password: admin123
═══════════════════════════════════
```

---

## Step 2: Login as Admin via Postman

### 🎯 Admin Login Request

**Method:** `POST`  
**URL:** `http://localhost:5000/auth/admin-login`  
**Headers:**
```
Content-Type: application/json
```

**Body:** (Select "raw" → "JSON")
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

**Expected Response:** (200 OK)
```json
{
  "message": "Admin login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "_id": "65f8a3b2c4d5e6f7g8h9i0j1",
    "name": "Admin User",
    "email": "admin@kishanganj.com",
    "isAdmin": true
  }
}
```

**⚠️ COPY THE TOKEN!** You'll need it for all admin requests.

---

## Step 3: Use Token for Admin Requests

### Example: Get All Hotels (Admin)

**Method:** `GET`  
**URL:** `http://localhost:5000/admin/hotels`  
**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Replace `YOUR_TOKEN_HERE` with the actual token from Step 2!**

**Expected Response:** (200 OK)
```json
[
  {
    "_id": "...",
    "name": "Hotel Sunshine",
    "location": "Kishanganj",
    "price": 2000,
    "image": "data:image/jpeg;base64,...",
    ...
  }
]
```

---

## 📋 All Admin API Endpoints

### 1. Admin Login
```
POST http://localhost:5000/auth/admin-login
Body: { "email": "admin@kishanganj.com", "password": "admin123" }
```

### 2. Get All Hotels
```
GET http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
```

### 3. Add New Hotel
```
POST http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
Body: {
  "name": "Hotel Name",
  "location": "Location",
  "price": 2000,
  "description": "Description",
  "amenities": ["WiFi", "AC", "Parking"],
  "image": "data:image/jpeg;base64,..."
}
```

### 4. Update Hotel
```
PUT http://localhost:5000/admin/hotels/:hotelId
Headers: Authorization: Bearer YOUR_TOKEN
Body: {
  "name": "Updated Name",
  "price": 2500,
  ...
}
```

### 5. Delete Hotel
```
DELETE http://localhost:5000/admin/hotels/:hotelId
Headers: Authorization: Bearer YOUR_TOKEN
```

### 6. Get All Blogs
```
GET http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
```

### 7. Update Blog
```
PUT http://localhost:5000/admin/blogs/:blogId
Headers: Authorization: Bearer YOUR_TOKEN
Body: {
  "title": "Updated Title",
  "content": "Updated content",
  ...
}
```

### 8. Delete Blog
```
DELETE http://localhost:5000/admin/blogs/:blogId
Headers: Authorization: Bearer YOUR_TOKEN
```

---

## 🎯 Quick Postman Setup

### Option 1: Manual Setup

1. **Create New Request** in Postman
2. **Set Method:** POST
3. **Set URL:** `http://localhost:5000/auth/admin-login`
4. **Go to Headers:**
   - Key: `Content-Type`
   - Value: `application/json`
5. **Go to Body:**
   - Select: `raw`
   - Select: `JSON`
   - Paste:
     ```json
     {
       "email": "admin@kishanganj.com",
       "password": "admin123"
     }
     ```
6. **Click Send**
7. **Copy the token** from response

### Option 2: Using Environment Variables (Recommended)

1. **Create Environment** in Postman
2. **Add Variables:**
   - `base_url` = `http://localhost:5000`
   - `admin_token` = (will be set after login)

3. **Login Request:**
   ```
   POST {{base_url}}/auth/admin-login
   ```

4. **In Tests tab**, add this script to auto-save token:
   ```javascript
   if (pm.response.code === 200) {
       const response = pm.response.json();
       pm.environment.set("admin_token", response.token);
       console.log("Token saved:", response.token);
   }
   ```

5. **For other requests**, use:
   ```
   GET {{base_url}}/admin/hotels
   Headers: Authorization: Bearer {{admin_token}}
   ```

---

## 🔍 Troubleshooting

### Issue: 401 Unauthorized
**Cause:** Token missing or invalid

**Fix:**
1. Make sure you're sending the token in header
2. Format: `Authorization: Bearer YOUR_TOKEN`
3. No extra spaces, no quotes around token

### Issue: "No token provided"
**Cause:** Authorization header not set

**Fix:** Add header:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Issue: "Invalid credentials"
**Cause:** Wrong email or password

**Fix:** Use exact credentials:
- Email: `admin@kishanganj.com`
- Password: `admin123`

### Issue: "User not found"
**Cause:** Admin user not created in database

**Fix:** Run `node createAdmin.js` first!

---

## 📸 Postman Screenshot Guide

### 1. Admin Login Request:
```
Method: POST
URL: http://localhost:5000/auth/admin-login

Headers:
  Content-Type: application/json

Body (raw JSON):
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}

Click: Send

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {...}
}

✅ COPY THIS TOKEN!
```

### 2. Get Hotels Request:
```
Method: GET
URL: http://localhost:5000/admin/hotels

Headers:
  Content-Type: application/json
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
                       ↑ PASTE TOKEN HERE

Click: Send

Response:
[
  { "name": "Hotel 1", ... },
  { "name": "Hotel 2", ... }
]
```

---

## ⚡ Quick Test Commands

You can also test with curl in terminal:

### 1. Login:
```bash
curl -X POST http://localhost:5000/auth/admin-login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@kishanganj.com",
    "password": "admin123"
  }'
```

### 2. Get Hotels (replace TOKEN):
```bash
curl -X GET http://localhost:5000/admin/hotels \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🎯 Summary

1. **Create Admin:** `node createAdmin.js`
2. **Login in Postman:** POST to `/auth/admin-login`
3. **Copy Token** from response
4. **Use Token** in Authorization header for all admin requests
5. **Format:** `Authorization: Bearer YOUR_TOKEN`

---

## ✅ Verification Checklist

- [ ] Admin user created in database
- [ ] Backend server running on port 5000
- [ ] Postman request to `/auth/admin-login` returns token
- [ ] Token copied and saved
- [ ] Token added to Authorization header
- [ ] `/admin/hotels` request works (no 401 error)
- [ ] Can see hotels data in response

---

**That's it! You can now use Postman to test all admin APIs!** 🎉

No need for frontend login pages - just use the token from Postman.
