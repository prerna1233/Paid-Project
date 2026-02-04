# 🚨 FIX: Backend Restart Instructions

## The Problem
```
❌ "Not Found - /auth/admin-login"
```

## The Solution
**Restart your backend server!**

---

## 📍 Method 1: Find & Restart

### Look for this terminal window:
```
┌────────────────────────────────────────┐
│ $ npm run dev                          │
│                                        │
│ > backend@1.0.0 dev                   │
│ > node server.js                      │
│                                        │
│ ✅ MongoDB Connected                   │
│ Server is running on port 5000        │
│ ▋                                      │  ← Cursor here
└────────────────────────────────────────┘
```

### In that terminal:
1. Press **Ctrl+C**
2. Type: **`npm run dev`**
3. Press **Enter**

---

## 📍 Method 2: Fresh Start

### In ANY terminal, run these commands:

```bash
# 1. Go to backend folder
cd /home/sama/Documents/Paid-Project/backend

# 2. Kill old process (if running)
pkill -f "node.*server.js"

# 3. Start fresh
npm run dev
```

---

## ✅ Success Looks Like:

After running `npm run dev`, you should see:

```
> backend@1.0.0 dev
> node server.js

✅ Routes registered:
  Public Routes:
    - /auth (and /api/auth)
    - /blogs (and /api/blogs)
    - /hotels (and /api/hotels)
  Admin Routes:
    - /admin/blogs (and /api/admin/blogs)
    - /admin/hotels (and /api/admin/hotels)

✅ MongoDB Connected
Server is running on port 5000
```

**Key:** Look for "Routes registered" - this confirms new routes loaded!

---

## 🧪 Quick Test

### In another terminal, run:
```bash
curl http://localhost:5000/auth/admin-login
```

**Before restart:** `Not Found`
**After restart:** `Cannot GET` (this is better! POST works)

---

## 🎯 Now Try Postman Again

After restart:

**POST** `http://localhost:5000/auth/admin-login`

Should work! ✅

---

## 💡 Pro Tip: Use Nodemon

So you don't have to restart manually:

```bash
npm install -g nodemon
```

Then in backend `package.json`:
```json
"scripts": {
  "dev": "nodemon server.js"
}
```

Now it auto-restarts when you save files! 🎉

---

**DO THIS NOW:**
1. Find terminal with backend
2. Press Ctrl+C
3. Run `npm run dev`
4. Wait for "Routes registered"
5. Try Postman again! ✅
