# 🏨 HOTEL EDIT & DELETE - POSTMAN TESTING

## ⚠️ PREREQUISITES

### 1. Start Backend:
```bash
cd /home/sama/Documents/Paid-Project/backend
npm run dev
```

### 2. Get Your Token First:

**URL:** `http://localhost:5000/auth/admin-login`
**Method:** POST
**Body:**
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```
**→ COPY THE TOKEN!**

### 3. Get Hotel ID:

**URL:** `http://localhost:5000/admin/hotels`
**Method:** GET
**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```
**→ COPY A HOTEL `_id` FROM THE RESPONSE!**

---

## ✏️ EDIT HOTEL (UPDATE)

### 🔗 URL FORMAT:
```
http://localhost:5000/admin/hotels/PASTE_HOTEL_ID_HERE
```

### 📝 EXAMPLE URL (Replace the ID):
```
http://localhost:5000/admin/hotels/65b9c8d7e4f2a1b3c5d6e7f8
```

### 🎯 METHOD:
```
PUT
```

### 📋 HEADERS:
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## 📦 EDIT DATA OPTIONS

### OPTION 1: Update Full Hotel Details
```json
{
  "name": "Royal Palace Hotel - RENOVATED",
  "location": "Kishanganj Premium District",
  "price": 4500,
  "description": "Newly renovated 5-star luxury hotel with modern amenities, rooftop restaurant, and infinity pool. Perfect for business and leisure travelers.",
  "amenities": ["WiFi", "AC", "TV", "Parking", "Swimming Pool", "Spa", "Gym", "Restaurant", "Bar", "Conference Hall", "Room Service"],
  "rating": 4.9,
  "contact": "9876543210",
  "email": "contact@royalpalace.com",
  "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
}
```

### OPTION 2: Update Only Price
```json
{
  "price": 5000
}
```

### OPTION 3: Update Price & Rating
```json
{
  "price": 4200,
  "rating": 4.8
}
```

### OPTION 4: Update Name & Description
```json
{
  "name": "Grand Royal Palace Hotel & Spa",
  "description": "Experience luxury redefined with our world-class facilities and exceptional hospitality"
}
```

### OPTION 5: Update Amenities Only
```json
{
  "amenities": ["Free WiFi", "AC", "Smart TV", "Free Parking", "Infinity Pool", "Luxury Spa", "24/7 Gym", "Multi-Cuisine Restaurant", "Rooftop Bar", "Business Center", "Laundry Service", "Airport Shuttle"]
}
```

### OPTION 6: Update Location & Contact
```json
{
  "location": "Near Railway Station, Kishanganj",
  "contact": "9123456789",
  "email": "info@grandpalace.com"
}
```

### OPTION 7: Lower Price (Discount)
```json
{
  "price": 2500,
  "description": "Special winter discount! Luxury stay at affordable prices"
}
```

### OPTION 8: Premium Upgrade
```json
{
  "name": "Royal Palace Premium Resort",
  "price": 6500,
  "description": "Ultimate luxury resort experience with private villas and butler service",
  "amenities": ["Private Villa", "Butler Service", "Infinity Pool", "Spa", "Fine Dining", "Golf Course", "Helicopter Service"],
  "rating": 5.0
}
```

---

## 🗑️ DELETE HOTEL

### 🔗 URL FORMAT:
```
http://localhost:5000/admin/hotels/PASTE_HOTEL_ID_HERE
```

### 📝 EXAMPLE URL (Replace the ID):
```
http://localhost:5000/admin/hotels/65b9c8d7e4f2a1b3c5d6e7f8
```

### 🎯 METHOD:
```
DELETE
```

### 📋 HEADERS:
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

### 📦 BODY:
```
NONE - Leave body empty for DELETE
```

---

## 🎯 COMPLETE TESTING WORKFLOW

### Step 1: Login
```
POST http://localhost:5000/auth/admin-login
Body: {"email":"admin@kishanganj.com","password":"admin123"}
```
**→ Copy token**

---

### Step 2: See All Hotels
```
GET http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
```
**→ Copy a hotel's `_id`**

---

### Step 3: Edit That Hotel
```
PUT http://localhost:5000/admin/hotels/PASTE_ID_HERE
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: Pick any option from above (e.g., Option 1)
```
**→ Should get success response with updated data**

---

### Step 4: Verify Update
```
GET http://localhost:5000/admin/hotels/PASTE_ID_HERE
Headers: Authorization: Bearer YOUR_TOKEN
```
**→ Should see the updated information**

---

### Step 5: See All Hotels Again
```
GET http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
```
**→ Confirm the hotel shows updated details**

---

### Step 6: Delete That Hotel
```
DELETE http://localhost:5000/admin/hotels/PASTE_ID_HERE
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: NONE
```
**→ Should get "Hotel deleted successfully"**

---

### Step 7: Verify Deletion
```
GET http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
```
**→ Hotel should no longer appear in list**

---

## 📋 QUICK COPY-PASTE FORMAT

### ✏️ EDIT REQUEST:
```
Method: PUT
URL: http://localhost:5000/admin/hotels/HOTEL_ID_HERE
Headers:
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body:
{
  "name": "Updated Hotel Name",
  "price": 4000,
  "description": "Updated description",
  "rating": 4.8
}
```

### 🗑️ DELETE REQUEST:
```
Method: DELETE
URL: http://localhost:5000/admin/hotels/HOTEL_ID_HERE
Headers:
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: NONE
```

---

## 💡 TESTING TIPS

### 1. Create Test Hotel First:
Before testing edit/delete, add a test hotel:
```
POST http://localhost:5000/admin/hotels
Body:
{
  "name": "Test Hotel - DELETE ME",
  "location": "Test Location",
  "price": 1000,
  "description": "This is a test hotel for edit/delete testing",
  "amenities": ["WiFi", "AC"],
  "rating": 3.5,
  "contact": "9999999999",
  "email": "test@test.com",
  "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945"
}
```
**→ Use this hotel's ID for testing**

### 2. Test Partial Updates:
You don't need to send all fields. Try updating just one field:
```json
{
  "price": 3000
}
```

### 3. Test Multiple Updates:
Edit the same hotel multiple times with different data options to see all changes

### 4. Verify Before Delete:
Always do a GET request before DELETE to see what you're deleting

### 5. Confirm After Delete:
Do another GET request after DELETE to confirm it's gone

---

## 🚨 COMMON ERRORS

### ❌ Error: "Hotel not found"
**Reason:** Wrong hotel ID or hotel already deleted
**Solution:** Do GET /admin/hotels to get a valid ID

### ❌ Error: 401 Unauthorized
**Reason:** Missing or invalid token
**Solution:** Login again and copy fresh token

### ❌ Error: "Cannot PUT/DELETE"
**Reason:** Backend not running
**Solution:** Run `npm run dev` in backend folder

### ❌ Error: Validation Error
**Reason:** Invalid data type (e.g., price as string instead of number)
**Solution:** Make sure price is number, not "3000" in quotes

---

## ✅ EXPECTED RESPONSES

### Successful Update (PUT):
```json
{
  "message": "Hotel updated successfully",
  "hotel": {
    "_id": "65b9c8d7e4f2a1b3c5d6e7f8",
    "name": "Royal Palace Hotel - RENOVATED",
    "location": "Kishanganj Premium District",
    "price": 4500,
    "description": "Newly renovated 5-star luxury hotel...",
    "amenities": ["WiFi", "AC", "TV", ...],
    "rating": 4.9,
    "contact": "9876543210",
    "email": "contact@royalpalace.com",
    "image": "https://...",
    "createdAt": "2026-01-30T10:00:00.000Z",
    "updatedAt": "2026-01-30T12:30:00.000Z"
  }
}
```

### Successful Delete (DELETE):
```json
{
  "message": "Hotel deleted successfully"
}
```

### Error Response:
```json
{
  "error": "Hotel not found"
}
```
or
```json
{
  "error": "Unauthorized"
}
```

---

## 🎓 COMPLETE EXAMPLE FLOW

```
1. POST /auth/admin-login
   → Get token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

2. GET /admin/hotels
   → See hotel with _id: 65b9c8d7e4f2a1b3c5d6e7f8

3. PUT /admin/hotels/65b9c8d7e4f2a1b3c5d6e7f8
   Body: {"price": 5000, "rating": 4.9}
   → Success: Hotel updated

4. GET /admin/hotels/65b9c8d7e4f2a1b3c5d6e7f8
   → Verify: price is now 5000, rating is 4.9

5. DELETE /admin/hotels/65b9c8d7e4f2a1b3c5d6e7f8
   → Success: Hotel deleted

6. GET /admin/hotels
   → Confirm: Hotel no longer in list
```

---

## 🔑 CREDENTIALS REMINDER

```
Email: admin@kishanganj.com
Password: admin123
```

---

**Ready to test! Just copy-paste the URLs and data into Postman!** 🚀
