# 🎯 Postman - 3 Simple Steps

## ⚠️ FIRST: Restart Backend

```bash
cd /home/sama/Documents/Paid-Project/backend
npm run dev
```

Wait for: `Server is running on port 5000`

---

## STEP 1: Login (Get Token)

### In Postman:

```
┌─────────────────────────────────────────────┐
│ Method: POST                                │
│ URL: http://localhost:5000/auth/admin-login│
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Headers Tab:                                │
│   Content-Type: application/json            │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Body Tab → raw → JSON:                      │
│                                             │
│   {                                         │
│     "email": "admin@kishanganj.com",        │
│     "password": "admin123"                  │
│   }                                         │
└─────────────────────────────────────────────┘

[Send]
```

### Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."  ← COPY THIS!
}
```

---

## STEP 2: Get Hotels (Use Token)

### In Postman (New Request):

```
┌─────────────────────────────────────────────┐
│ Method: GET                                 │
│ URL: http://localhost:5000/admin/hotels     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Headers Tab:                                │
│   Content-Type: application/json            │
│   Authorization: Bearer YOUR_TOKEN_HERE     │
│                         ↑                   │
│                   Paste token here!         │
└─────────────────────────────────────────────┘

[Send]
```

### Response:
```json
[
  {
    "name": "Hotel Name",
    "location": "Kishanganj",
    ...
  }
]
```

✅ **Success!** No 401 error!

---

## STEP 3: Add a Hotel

### In Postman (New Request):

```
┌─────────────────────────────────────────────┐
│ Method: POST                                │
│ URL: http://localhost:5000/admin/hotels     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Headers Tab:                                │
│   Content-Type: application/json            │
│   Authorization: Bearer YOUR_TOKEN          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ Body Tab → raw → JSON:                      │
│                                             │
│   {                                         │
│     "name": "Test Hotel",                   │
│     "location": "Kishanganj",               │
│     "price": 2000,                          │
│     "description": "Nice hotel",            │
│     "amenities": ["WiFi", "AC"],            │
│     "rating": 4.5,                          │
│     "contact": "9876543210",                │
│     "image": "https://via.placeholder.com/400"│
│   }                                         │
└─────────────────────────────────────────────┘

[Send]
```

---

## 🎯 Quick Copy-Paste

### Login Body:
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

### Add Hotel Body:
```json
{
  "name": "Test Hotel",
  "location": "Kishanganj",
  "price": 2000,
  "description": "A beautiful hotel",
  "amenities": ["WiFi", "AC", "TV", "Parking"],
  "rating": 4.5,
  "contact": "9876543210",
  "image": "https://via.placeholder.com/400"
}
```

---

## ✅ Checklist

Login Request:
- [ ] Method = POST
- [ ] URL = `http://localhost:5000/auth/admin-login`
- [ ] Header: `Content-Type: application/json`
- [ ] Body: raw → JSON → email/password
- [ ] Response has token ✅

Get Hotels Request:
- [ ] Method = GET
- [ ] URL = `http://localhost:5000/admin/hotels`
- [ ] Header: `Content-Type: application/json`
- [ ] Header: `Authorization: Bearer TOKEN`
- [ ] Response has hotels list ✅

---

## 🚨 Common Mistakes

❌ **"Bearer YOUR_TOKEN"** - Don't use literally "YOUR_TOKEN"
✅ **"Bearer eyJhbGci..."** - Use actual token

❌ **"BearereyJhbGci..."** - No space
✅ **"Bearer eyJhbGci..."** - Space after Bearer

❌ **'"Bearer eyJ..."'** - Quotes around it
✅ **'Bearer eyJ...'** - No quotes

---

**That's it! Just 3 steps!** 🎉

1. Login → Get token
2. Use token → Get hotels
3. Use token → Add hotel

**All admin APIs work the same way - just use the token!** 🚀
