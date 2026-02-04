# 🎯 Postman Testing Data - Ready to Copy & Paste

## ⚠️ FIRST: Start Backend

```bash
cd /home/sama/Documents/Paid-Project/backend
npm run dev
```

Wait for: `Server running on port 5000`

---

## 📮 REQUEST 1: Admin Login

### Setup:
- **Method:** `POST`
- **URL:** `http://localhost:5000/auth/admin-login`

### Headers:
```
Content-Type: application/json
```

### Body (Select "raw" → "JSON"):
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

### Expected Response:
```json
{
  "message": "Admin login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "_id": "...",
    "name": "Admin User",
    "email": "admin@kishanganj.com",
    "role": "admin",
    "isAdmin": true
  }
}
```

**⚠️ COPY THE TOKEN!** You'll need it for all other requests.

---

## 📮 REQUEST 2: Get All Hotels (Admin)

### Setup:
- **Method:** `GET`
- **URL:** `http://localhost:5000/admin/hotels`

### Headers:
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Replace `YOUR_TOKEN_HERE` with the token from Request 1!**

### No Body needed for GET request

### Expected Response:
```json
[
  {
    "_id": "...",
    "name": "Hotel Name",
    "location": "Kishanganj",
    "price": 2000,
    "description": "...",
    "amenities": ["WiFi", "AC"],
    "rating": 4.5,
    "contact": "9876543210",
    "image": "..."
  }
]
```

---

## 📮 REQUEST 3: Add New Hotel

### Setup:
- **Method:** `POST`
- **URL:** `http://localhost:5000/admin/hotels`

### Headers:
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

### Body (Select "raw" → "JSON"):
```json
{
  "name": "Royal Palace Hotel",
  "location": "Kishanganj City Center",
  "price": 3500,
  "description": "Luxury hotel with modern amenities and excellent service. Located in the heart of Kishanganj with easy access to major attractions.",
  "amenities": ["WiFi", "AC", "TV", "Parking", "Room Service", "Swimming Pool"],
  "rating": 4.8,
  "contact": "9876543210",
  "email": "info@royalpalace.com",
  "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945"
}
```

### Expected Response:
```json
{
  "message": "Hotel created successfully",
  "hotel": {
    "_id": "...",
    "name": "Royal Palace Hotel",
    ...
  }
}
```

---

## 📮 REQUEST 4: Update Hotel

### Setup:
- **Method:** `PUT`
- **URL:** `http://localhost:5000/admin/hotels/HOTEL_ID_HERE`

**Replace `HOTEL_ID_HERE` with an actual hotel `_id` from Request 2!**

### Headers:
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

### Body (Select "raw" → "JSON"):
```json
{
  "name": "Royal Palace Hotel - Updated",
  "price": 4000,
  "description": "Newly renovated luxury hotel",
  "rating": 4.9
}
```

### Expected Response:
```json
{
  "message": "Hotel updated successfully",
  "hotel": {
    "_id": "...",
    "name": "Royal Palace Hotel - Updated",
    "price": 4000,
    ...
  }
}
```

---

## 📮 REQUEST 5: Delete Hotel

### Setup:
- **Method:** `DELETE`
- **URL:** `http://localhost:5000/admin/hotels/HOTEL_ID_HERE`

### Headers:
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

### No Body needed

### Expected Response:
```json
{
  "message": "Hotel deleted successfully"
}
```

---

## 📮 REQUEST 6: Get All Blogs (Admin)

### Setup:
- **Method:** `GET`
- **URL:** `http://localhost:5000/admin/blogs`

### Headers:
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

### No Body needed

### Expected Response:
```json
[
  {
    "_id": "...",
    "title": "Blog Title",
    "content": "Blog content...",
    "author": {
      "_id": "...",
      "name": "Author Name"
    },
    "isPublished": true,
    "createdAt": "2024-01-30T10:00:00.000Z"
  }
]
```

---

## 📮 REQUEST 7: User Registration (Bonus)

### Setup:
- **Method:** `POST`
- **URL:** `http://localhost:5000/auth/register`

### Headers:
```
Content-Type: application/json
```

### Body (Select "raw" → "JSON"):
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Expected Response:
```json
{
  "token": "...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

## 📮 REQUEST 8: User Login (Bonus)

### Setup:
- **Method:** `POST`
- **URL:** `http://localhost:5000/auth/login`

### Headers:
```
Content-Type: application/json
```

### Body (Select "raw" → "JSON"):
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Expected Response:
```json
{
  "token": "...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

## 🎨 More Hotel Data Samples

### Luxury Hotel:
```json
{
  "name": "Grand Kishanganj Hotel",
  "location": "Near Railway Station",
  "price": 5000,
  "description": "Premium hotel with world-class facilities",
  "amenities": ["WiFi", "AC", "TV", "Parking", "Restaurant", "Gym", "Spa"],
  "rating": 4.7,
  "contact": "9123456789",
  "email": "contact@grandkishanganj.com",
  "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
}
```

### Budget Hotel:
```json
{
  "name": "Comfort Inn Kishanganj",
  "location": "Main Market Area",
  "price": 1500,
  "description": "Clean and affordable accommodation",
  "amenities": ["WiFi", "AC", "TV", "Parking"],
  "rating": 4.0,
  "contact": "9876543210",
  "email": "info@comfortinn.com",
  "image": "https://images.unsplash.com/photo-1611892440504-42a792e24d32"
}
```

### Boutique Hotel:
```json
{
  "name": "Heritage Homestay",
  "location": "Old City Area",
  "price": 2500,
  "description": "Traditional homestay experience with modern comfort",
  "amenities": ["WiFi", "AC", "Breakfast", "Parking"],
  "rating": 4.5,
  "contact": "9988776655",
  "email": "stay@heritage.com",
  "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
}
```

---

## 🎯 Quick Testing Workflow

1. **Start Backend** → `npm run dev`
2. **Request 1** → Admin Login → Copy Token
3. **Request 2** → Get Hotels (use token)
4. **Request 3** → Add Hotel (use token + hotel data)
5. **Request 2** → Get Hotels again (see new hotel)
6. **Request 4** → Update Hotel (use token + hotel ID)
7. **Request 5** → Delete Hotel (use token + hotel ID)

---

## 🔑 Admin Credentials

```
Email: admin@kishanganj.com
Password: admin123
```

---

## 📋 Authorization Header Format

**CORRECT:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**WRONG:**
```
Authorization: BearereyJhbGci...  (no space)
Authorization: "Bearer eyJ..."     (has quotes)
Bearer: eyJhbGci...                (wrong key)
```

---

## ✅ Testing Checklist

- [ ] Backend running on port 5000
- [ ] Admin login successful
- [ ] Token copied
- [ ] Get hotels works (no 401)
- [ ] Add hotel works
- [ ] Update hotel works
- [ ] Delete hotel works
- [ ] Get blogs works

---

**Copy and paste these directly into Postman!** 🚀
