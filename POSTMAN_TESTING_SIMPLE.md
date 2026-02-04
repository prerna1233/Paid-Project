# 🎯 Postman Testing Guide - Simple Steps

## ⚠️ IMPORTANT: Restart Your Backend First!

The routes were just updated, so you need to restart the backend server:

```bash
# Stop the current server (Press Ctrl+C in the terminal where it's running)
# Then start it again:
cd /home/sama/Documents/Paid-Project/backend
npm run dev
```

Wait for:
```
✅ MongoDB Connected
Server is running on port 5000
```

---

## 📮 STEP 1: Open Postman

1. Open Postman application
2. Click **"New"** button (top left)
3. Select **"HTTP Request"**

---

## 📮 STEP 2: Set Up Admin Login Request

### A. Set the Method and URL

**Top Bar:**
- **Method dropdown** (left side): Select `POST`
- **URL field**: Type `http://localhost:5000/auth/admin-login`

### B. Add Headers

1. Click the **"Headers"** tab (below URL bar)
2. Click **"Add"** or start typing
3. Add this header:
   - **Key**: `Content-Type`
   - **Value**: `application/json`

### C. Add Body

1. Click the **"Body"** tab (next to Headers)
2. Select **"raw"** radio button
3. From dropdown on right, select **"JSON"** (not Text)
4. In the text area, paste exactly this:

```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

### D. Send Request

Click the big blue **"Send"** button

---

## ✅ Expected Response

You should see this in the response section at the bottom:

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

**Status**: `200 OK` (shown in top right)

---

## 📋 STEP 3: Copy the Token

1. In the response, find the `"token"` value
2. It's a very long string starting with `eyJ...`
3. **Double-click** on the token value to select it
4. **Copy** it (Ctrl+C or Cmd+C)
5. **Paste it somewhere** (Notepad/Notes) - you'll need it!

---

## 📮 STEP 4: Test Getting Hotels

### Create a New Request:

1. Click **"New"** → **"HTTP Request"** (or click the + tab)

### A. Set Method and URL

- **Method**: `GET`
- **URL**: `http://localhost:5000/admin/hotels`

### B. Add Headers (IMPORTANT!)

Add TWO headers:

**Header 1:**
- Key: `Content-Type`
- Value: `application/json`

**Header 2:** ⚠️ **THIS IS THE KEY ONE!**
- Key: `Authorization`
- Value: `Bearer ` + YOUR_TOKEN

**Example:**
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY4YTNiMmM0ZDVlNmY3ZzhoOWkwajEiLCJpYXQiOjE3MDY2MTIzNDUsImV4cCI6MTcwNjY5ODc0NX0.xyz123...
```

⚠️ **Important:** 
- Type `Bearer` (capital B)
- Then a SPACE
- Then paste your token
- No quotes!

### C. Send Request

Click **"Send"**

---

## ✅ Expected Response

You should see a list of hotels:

```json
[
  {
    "_id": "65f123abc",
    "name": "Hotel Sunshine",
    "location": "Kishanganj",
    "price": 2000,
    ...
  }
]
```

**Status**: `200 OK`

**If you get `[]` (empty array)**: That's okay! It means no hotels yet. You can add one!

---

## 🎨 Visual Layout in Postman

```
┌─────────────────────────────────────────────────────────┐
│ POST ▼  http://localhost:5000/auth/admin-login    Send │
├─────────────────────────────────────────────────────────┤
│ Params  Authorization  Headers  Body  Pre-request  Tests│
│                                  ▼                       │
│ ○ none  ○ form-data  ○ x-www-form-urlencoded           │
│ ● raw   ○ binary     ○ GraphQL                          │
│                                              JSON ▼      │
│ ┌───────────────────────────────────────────────────┐  │
│ │ {                                                   │  │
│ │   "email": "admin@kishanganj.com",                │  │
│ │   "password": "admin123"                          │  │
│ │ }                                                   │  │
│ └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│ Response                                      200 OK    │
│ ┌───────────────────────────────────────────────────┐  │
│ │ {                                                   │  │
│ │   "token": "eyJhbGciOiJ...",                      │  │
│ │   "admin": { ... }                                │  │
│ │ }                                                   │  │
│ └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## 🔍 Troubleshooting

### ❌ Error: "Not Found - /auth/admin-login"

**Problem**: Backend not restarted after code changes

**Solution**: 
```bash
# In backend terminal:
# Press Ctrl+C to stop
npm run dev
```

---

### ❌ Error: "Cannot POST http://localhost:5000/auth/admin-login"

**Problem**: Backend not running

**Solution**: Start backend:
```bash
cd /home/sama/Documents/Paid-Project/backend
npm run dev
```

---

### ❌ Error: 401 Unauthorized (on /admin/hotels)

**Problem**: Token not added or wrong format

**Solution**: Check Authorization header:
- Format: `Bearer YOUR_TOKEN`
- Must have space between Bearer and token
- No quotes around token

---

### ❌ Error: "Invalid admin credentials"

**Problem**: Wrong password

**Solution**: Use exactly:
- Email: `admin@kishanganj.com`
- Password: `admin123`

---

## 📸 Screenshot Checklist

Before clicking Send, verify:

### For Login Request:
- [ ] Method is POST
- [ ] URL is `http://localhost:5000/auth/admin-login`
- [ ] Headers tab has `Content-Type: application/json`
- [ ] Body tab is selected
- [ ] "raw" is selected
- [ ] Dropdown shows "JSON"
- [ ] Body has email and password in JSON format

### For Hotels Request:
- [ ] Method is GET
- [ ] URL is `http://localhost:5000/admin/hotels`
- [ ] Headers has `Content-Type: application/json`
- [ ] Headers has `Authorization: Bearer TOKEN`
- [ ] Token is pasted after "Bearer " (with space)

---

## 🎯 Quick Test Commands

### Test 1: Check Backend is Running
```bash
curl http://localhost:5000/hotels
```
Should return some data (not error)

### Test 2: Test Login Endpoint
```bash
curl -X POST http://localhost:5000/auth/admin-login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@kishanganj.com","password":"admin123"}'
```
Should return JSON with token

---

## 📝 Summary

1. **Restart backend** (important!)
2. **Open Postman**
3. **POST** to `/auth/admin-login` with email/password
4. **Copy token** from response
5. **GET** to `/admin/hotels` with token in Authorization header
6. **Success!** 🎉

---

## 🚀 Next Steps After Successful Login

Once you get the token, you can test these endpoints:

- `GET /admin/hotels` - List hotels
- `POST /admin/hotels` - Add hotel
- `PUT /admin/hotels/:id` - Update hotel
- `DELETE /admin/hotels/:id` - Delete hotel
- `GET /admin/blogs` - List blogs
- `PUT /admin/blogs/:id` - Update blog
- `DELETE /admin/blogs/:id` - Delete blog

All need the Authorization header with your token!

---

**Start with STEP 1: Restart your backend, then try the login in Postman!** 🎉
