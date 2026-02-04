# 🚀 QUICK START - Login via Postman

## ✅ Admin User Created Successfully!

**Credentials:**
- Email: `admin@kishanganj.com`
- Password: `admin123`

---

## 🎯 Now Follow These Steps in Postman:

### Step 1: Admin Login

**Create New Request:**
1. Method: `POST`
2. URL: `http://localhost:5000/auth/admin-login`
3. Headers → Add:
   ```
   Content-Type: application/json
   ```
4. Body → Select `raw` → Select `JSON` → Paste:
   ```json
   {
     "email": "admin@kishanganj.com",
     "password": "admin123"
   }
   ```
5. Click **Send**

**You'll get response like:**
```json
{
  "message": "Admin login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY...",
  "admin": {
    "_id": "...",
    "name": "Admin User",
    "email": "admin@kishanganj.com",
    "isAdmin": true
  }
}
```

**⚠️ IMPORTANT: Copy the entire `token` value!**

---

### Step 2: Test Admin API with Token

**Create New Request:**
1. Method: `GET`
2. URL: `http://localhost:5000/admin/hotels`
3. Headers → Add TWO headers:
   ```
   Content-Type: application/json
   Authorization: Bearer YOUR_TOKEN_HERE
   ```
   
   **⚠️ Replace `YOUR_TOKEN_HERE` with the token from Step 1!**
   
   Example:
   ```
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY...
   ```

4. Click **Send**

**Expected Response:** List of hotels (no 401 error!)

---

## 📋 Complete Admin API Collection

### 1️⃣ Admin Login (Get Token)
```
POST http://localhost:5000/auth/admin-login

Headers:
Content-Type: application/json

Body:
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

### 2️⃣ Get All Hotels
```
GET http://localhost:5000/admin/hotels

Headers:
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

### 3️⃣ Add Hotel
```
POST http://localhost:5000/admin/hotels

Headers:
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

Body:
{
  "name": "Test Hotel",
  "location": "Kishanganj",
  "price": 2000,
  "description": "A beautiful hotel",
  "amenities": ["WiFi", "AC", "Parking"],
  "rating": 4.5,
  "contact": "9876543210",
  "image": "data:image/jpeg;base64,/9j/4AAQSkZJRg..."
}
```

### 4️⃣ Update Hotel
```
PUT http://localhost:5000/admin/hotels/HOTEL_ID

Headers:
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

Body:
{
  "name": "Updated Hotel Name",
  "price": 2500
}
```

### 5️⃣ Delete Hotel
```
DELETE http://localhost:5000/admin/hotels/HOTEL_ID

Headers:
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

### 6️⃣ Get All Blogs
```
GET http://localhost:5000/admin/blogs

Headers:
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

### 7️⃣ Update Blog
```
PUT http://localhost:5000/admin/blogs/BLOG_ID

Headers:
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

Body:
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

### 8️⃣ Delete Blog
```
DELETE http://localhost:5000/admin/blogs/BLOG_ID

Headers:
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

---

## 🎯 Important Notes

### About Authorization Header:
- Format: `Authorization: Bearer YOUR_TOKEN`
- Space between "Bearer" and token
- No quotes around the token
- Copy entire token (it's very long!)

### Token Expires:
- If you get 401 after some time, login again to get new token
- Token typically expires after 24 hours

### Testing Workflow:
1. Login → Get Token
2. Copy Token
3. Use Token in all other requests
4. When token expires, login again

---

## 🔍 Common Issues & Fixes

### ❌ 401 Unauthorized
**Problem:** Token not sent or invalid

**Fix:** 
- Check Authorization header is present
- Format: `Bearer YOUR_TOKEN` (with space)
- Copy full token (don't truncate)

### ❌ "No token provided"
**Problem:** Authorization header missing

**Fix:** 
- Add header: `Authorization: Bearer TOKEN`

### ❌ "Invalid credentials"
**Problem:** Wrong email/password

**Fix:** 
- Use: `admin@kishanganj.com` / `admin123`

### ❌ Can't connect to server
**Problem:** Backend not running

**Fix:** 
```bash
cd backend
npm run dev
```

---

## ✅ Quick Verification

Run these in order:

1. **Login:**
   ```
   POST http://localhost:5000/auth/admin-login
   → Should return token
   ```

2. **Get Hotels:**
   ```
   GET http://localhost:5000/admin/hotels
   + Authorization header with token
   → Should return hotel list (not 401)
   ```

3. **Success!** 🎉
   You can now access all admin APIs!

---

## 💡 Pro Tip: Save Token as Environment Variable

In Postman:
1. Click "Environments" → "Add"
2. Create variable: `admin_token`
3. After login, manually paste token value
4. Use in requests: `{{admin_token}}`

Then your Authorization header becomes:
```
Authorization: Bearer {{admin_token}}
```

---

**That's it! You're ready to test all admin APIs via Postman!** 🚀

**Next Step:** 
1. Open Postman
2. POST to `/auth/admin-login`
3. Copy token
4. Use token in other requests
5. Test your APIs! ✅
