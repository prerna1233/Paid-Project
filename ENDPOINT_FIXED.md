# ✅ FIXED - Correct Postman Endpoint

## 🎯 The Correct URL to Use

### ❌ WRONG (was causing 404):
```
http://localhost:5000/auth/admin-login
```

### ✅ CORRECT (now working):
```
http://localhost:5000/auth/admin-login
```

**Both endpoints now work!** I've added support for both:
- `/auth/admin-login` (hyphen)
- `/auth/admin/login` (slash)

---

## 🚀 Step-by-Step in Postman

### STEP 1: Admin Login

**Method:** `POST`

**URL:** 
```
http://localhost:5000/auth/admin-login
```

**Headers:**
```
Content-Type: application/json
```

**Body (raw JSON):**
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

**Click Send** ✅

---

### ✅ Expected Response:

```json
{
  "message": "Admin login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY4YTNiMmM0ZDVlNmY3ZzhoOWkwajEiLCJpYXQiOjE3MDY2MTIzNDUsImV4cCI6MTcwNjY5ODc0NX0.xyz123...",
  "admin": {
    "_id": "65f8a3b2c4d5e6f7g8h9i0j1",
    "name": "Admin User",
    "email": "admin@kishanganj.com",
    "role": "admin",
    "isAdmin": true
  }
}
```

**⚠️ COPY THE TOKEN VALUE!**

---

### STEP 2: Use Token in Other Requests

**Example - Get All Hotels:**

**Method:** `GET`

**URL:**
```
http://localhost:5000/admin/hotels
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

Replace `YOUR_TOKEN_HERE` with the token you copied!

---

## 📋 What I Fixed

### 1. ✅ Route Updated
- Added `/auth/admin-login` endpoint (with hyphen)
- Kept `/auth/admin/login` for compatibility

### 2. ✅ Admin Controller Updated
- Now checks both `role: "admin"` and `isAdmin: true`
- Returns proper response format
- Better error messages

### 3. ✅ Admin User Updated
- Set `role: "admin"` in database
- Set `isAdmin: true`
- Password updated and confirmed

---

## 🎯 Quick Test

**Copy this curl command and run in terminal:**

```bash
curl -X POST http://localhost:5000/auth/admin-login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@kishanganj.com",
    "password": "admin123"
  }'
```

**Expected:** You should see JSON response with token!

---

## 🔍 If Still Having Issues

### Check Backend is Running:
```bash
cd /home/sama/Documents/Paid-Project/backend
npm run dev
```

Should see:
```
✅ Routes registered:
  Public Routes:
    - /auth (and /api/auth)
```

### Check MongoDB Connected:
Look for:
```
✅ MongoDB Connected
```

### Check Port:
Make sure backend is on port 5000

---

## 📝 Summary

**Problem:** 404 - Endpoint not found

**Cause:** 
- Route was `/auth/admin/login` (with slash)
- You were calling `/auth/admin-login` (with hyphen)

**Solution:** 
- ✅ Added both endpoints
- ✅ Updated admin user in database
- ✅ Fixed admin controller logic

**Now working:** Both endpoints respond correctly! 🎉

---

**Try the Postman request again with the correct URL!** 🚀
