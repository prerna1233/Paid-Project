# 🚀 POSTMAN - COPY & PASTE READY

## 🔐 STEP 1: LOGIN (Get Token)

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

**📋 COPY THE TOKEN FROM RESPONSE!**

---

## 🏨 STEP 2: GET ALL HOTELS

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

*(Replace YOUR_TOKEN_HERE with actual token)*

**Body:** None

---

## ➕ STEP 3: ADD NEW HOTEL

**Method:** `POST`

**URL:**
```
http://localhost:5000/admin/hotels
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body (raw JSON) - OPTION 1:**
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

**Body (raw JSON) - OPTION 2:**
```json
{
  "name": "Grand Kishanganj Hotel",
  "location": "Near Railway Station",
  "price": 5000,
  "description": "Premium hotel with world-class facilities including spa, gym, and fine dining restaurant",
  "amenities": ["WiFi", "AC", "TV", "Parking", "Restaurant", "Gym", "Spa", "24/7 Room Service"],
  "rating": 4.7,
  "contact": "9123456789",
  "email": "contact@grandkishanganj.com",
  "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
}
```

**Body (raw JSON) - OPTION 3:**
```json
{
  "name": "Comfort Inn Kishanganj",
  "location": "Main Market Area",
  "price": 1500,
  "description": "Clean and affordable accommodation perfect for budget travelers",
  "amenities": ["WiFi", "AC", "TV", "Parking"],
  "rating": 4.0,
  "contact": "9876543210",
  "email": "info@comfortinn.com",
  "image": "https://images.unsplash.com/photo-1611892440504-42a792e24d32"
}
```

**Body (raw JSON) - OPTION 4:**
```json
{
  "name": "Heritage Homestay",
  "location": "Old City Area",
  "price": 2500,
  "description": "Traditional homestay experience with modern comfort and authentic local cuisine",
  "amenities": ["WiFi", "AC", "Breakfast", "Parking", "Traditional Meals"],
  "rating": 4.5,
  "contact": "9988776655",
  "email": "stay@heritage.com",
  "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
}
```

---

## ✏️ STEP 4: UPDATE HOTEL

**Method:** `PUT`

**URL:** (Replace HOTEL_ID with actual ID from GET response)
```
http://localhost:5000/admin/hotels/HOTEL_ID
```

**Example:**
```
http://localhost:5000/admin/hotels/65b9c8d7e4f2a1b3c5d6e7f8
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**📋 HOW TO GET HOTEL_ID:**
1. First do GET request to `http://localhost:5000/admin/hotels`
2. Copy the `_id` from any hotel in the response
3. Replace HOTEL_ID in URL above with that `_id`

**Body (raw JSON) - OPTION 1 (Update Everything):**
```json
{
  "name": "Royal Palace Hotel - UPDATED",
  "location": "Kishanganj Premium Area",
  "price": 4000,
  "description": "Newly renovated luxury hotel with updated facilities and world-class amenities",
  "amenities": ["WiFi", "AC", "TV", "Parking", "Pool", "Spa", "Gym", "Restaurant", "Conference Hall"],
  "rating": 4.9,
  "contact": "9876543210",
  "email": "info@royalpalace-updated.com",
  "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
}
```

**Body (raw JSON) - OPTION 2 (Update Only Price & Rating):**
```json
{
  "price": 4500,
  "rating": 4.9
}
```

**Body (raw JSON) - OPTION 3 (Update Name & Description):**
```json
{
  "name": "Grand Royal Palace Hotel",
  "description": "Premium luxury hotel with exceptional service and 5-star amenities"
}
```

**Body (raw JSON) - OPTION 4 (Add More Amenities):**
```json
{
  "amenities": ["WiFi", "AC", "TV", "Parking", "Swimming Pool", "Spa", "Gym", "Restaurant", "Bar", "Conference Hall", "Laundry", "Airport Shuttle"]
}
```

---

## 🗑️ STEP 5: DELETE HOTEL

**Method:** `DELETE`

**URL:** (Replace HOTEL_ID with actual ID)
```
http://localhost:5000/admin/hotels/HOTEL_ID
```

**Example:**
```
http://localhost:5000/admin/hotels/65b9c8d7e4f2a1b3c5d6e7f8
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body:** None

**📋 HOW TO DELETE:**
1. First do GET request to see all hotels
2. Pick a hotel you want to delete
3. Copy its `_id` 
4. Replace HOTEL_ID in URL with that `_id`
5. Send DELETE request
6. Do GET again to confirm it's deleted

**⚠️ WARNING:** This will permanently delete the hotel from database!

---

## 📝 STEP 6: GET ALL BLOGS

**Method:** `GET`

**URL:**
```
http://localhost:5000/admin/blogs
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body:** None

---

## ➕ STEP 7: ADD NEW BLOG

**Method:** `POST`

**URL:**
```
http://localhost:5000/admin/blogs
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body (raw JSON) - OPTION 1:**
```json
{
  "title": "Discover the Beauty of Kishanganj",
  "content": "Kishanganj is a hidden gem in Bihar with rich cultural heritage and natural beauty. From its historic landmarks to delicious local cuisine, this city has something for everyone. Experience the warmth of local hospitality and explore the untouched natural landscapes.",
  "author": "Admin User",
  "category": "Travel",
  "tags": ["Kishanganj", "Travel", "Culture", "Bihar"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
}
```

**Body (raw JSON) - OPTION 2:**
```json
{
  "title": "Top 10 Places to Visit in Kishanganj",
  "content": "Explore the best tourist attractions in Kishanganj including ancient temples, scenic lakes, and local markets. This guide will help you plan the perfect trip to this beautiful destination. Don't miss the famous local festivals and traditional cuisine.",
  "author": "Admin User",
  "category": "Tourism",
  "tags": ["Tourism", "Kishanganj", "Travel Guide", "Attractions"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
}
```

**Body (raw JSON) - OPTION 3:**
```json
{
  "title": "Traditional Cuisine of Kishanganj",
  "content": "Discover the authentic flavors of Kishanganj cuisine. From spicy Litti Chokha to sweet delicacies, the food culture here is rich and diverse. Learn about traditional cooking methods and must-try dishes when you visit.",
  "author": "Admin User",
  "category": "Food",
  "tags": ["Food", "Cuisine", "Kishanganj", "Traditional"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
}
```

---

## ✏️ STEP 8: UPDATE BLOG

**Method:** `PUT`

**URL:** (Replace BLOG_ID with actual ID from GET response)
```
http://localhost:5000/admin/blogs/BLOG_ID
```

**Example:**
```
http://localhost:5000/admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**📋 HOW TO GET BLOG_ID:**
1. First do GET request to `http://localhost:5000/admin/blogs`
2. Copy the `_id` from any blog in the response
3. Replace BLOG_ID in URL above with that `_id`

**Body (raw JSON) - OPTION 1 (Update Everything):**
```json
{
  "title": "Discover the Beauty of Kishanganj - UPDATED 2026",
  "content": "Kishanganj is a hidden gem in Bihar with rich cultural heritage and natural beauty. Updated guide for 2026 includes new tourist spots, hotels, and local experiences. From its historic landmarks to delicious local cuisine, this city has something for everyone.",
  "author": "Admin User",
  "category": "Travel Guide",
  "tags": ["Kishanganj", "Travel", "Culture", "Bihar", "Tourism", "2026"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
}
```

**Body (raw JSON) - OPTION 2 (Update Only Title & Content):**
```json
{
  "title": "Top 15 Places to Visit in Kishanganj - Updated Guide",
  "content": "Explore the expanded list of best tourist attractions in Kishanganj including ancient temples, scenic lakes, shopping malls, and local markets. This comprehensive 2026 guide will help you plan the perfect trip."
}
```

**Body (raw JSON) - OPTION 3 (Update Publish Status):**
```json
{
  "isPublished": false
}
```

**Body (raw JSON) - OPTION 4 (Update Category & Tags):**
```json
{
  "category": "Travel & Tourism",
  "tags": ["Kishanganj", "Bihar Tourism", "Travel Guide", "Must Visit", "Heritage", "Culture"]
}
```

---

## 🗑️ STEP 9: DELETE BLOG

**Method:** `DELETE`

**URL:** (Replace BLOG_ID with actual ID)
```
http://localhost:5000/admin/blogs/BLOG_ID
```

**Example:**
```
http://localhost:5000/admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body:** None

**📋 HOW TO DELETE:**
1. First do GET request to see all blogs
2. Pick a blog you want to delete
3. Copy its `_id` 
4. Replace BLOG_ID in URL with that `_id`
5. Send DELETE request
6. Do GET again to confirm it's deleted

**⚠️ WARNING:** This will permanently delete the blog from database!

---

## 🔄 ALTERNATIVE LOGIN URLS (Try if first doesn't work)

**URL Option 1:**
```
http://localhost:5000/auth/admin-login
```

**URL Option 2:**
```
http://localhost:5000/auth/admin/login
```

**URL Option 3:**
```
http://localhost:5000/api/auth/admin-login
```

**URL Option 4:**
```
http://localhost:5000/api/auth/admin/login
```

---

## 📋 ALL AVAILABLE ENDPOINTS

### Auth Routes:
```
POST http://localhost:5000/auth/register
POST http://localhost:5000/auth/login
POST http://localhost:5000/auth/admin-login
POST http://localhost:5000/auth/admin/login
```

### Admin Hotel Routes:
```
GET    http://localhost:5000/admin/hotels
POST   http://localhost:5000/admin/hotels
GET    http://localhost:5000/admin/hotels/:id
PUT    http://localhost:5000/admin/hotels/:id
DELETE http://localhost:5000/admin/hotels/:id
```

### Admin Blog Routes:
```
GET    http://localhost:5000/admin/blogs
POST   http://localhost:5000/admin/blogs
GET    http://localhost:5000/admin/blogs/:id
PUT    http://localhost:5000/admin/blogs/:id
DELETE http://localhost:5000/admin/blogs/:id
```

### Public Routes:
```
GET    http://localhost:5000/hotels
GET    http://localhost:5000/hotels/:id
GET    http://localhost:5000/blogs
GET    http://localhost:5000/blogs/:id
```

---

## 🎯 QUICK COPY - FULL REQUEST EXAMPLES

### ✅ COMPLETE REQUEST 1: LOGIN
```
Method: POST
URL: http://localhost:5000/auth/admin-login
Headers: Content-Type: application/json
Body: {"email":"admin@kishanganj.com","password":"admin123"}
```

### ✅ COMPLETE REQUEST 2: ADD HOTEL
```
Method: POST
URL: http://localhost:5000/admin/hotels
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: {"name":"Royal Palace Hotel","location":"Kishanganj City Center","price":3500,"description":"Luxury hotel with modern amenities","amenities":["WiFi","AC","TV","Parking"],"rating":4.8,"contact":"9876543210","email":"info@royalpalace.com","image":"https://images.unsplash.com/photo-1566073771259-6a8506099945"}
```

### ✅ COMPLETE REQUEST 3: GET HOTELS
```
Method: GET
URL: http://localhost:5000/admin/hotels
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: None
```

---

## 🔑 CREDENTIALS

```
Email: admin@kishanganj.com
Password: admin123
```

---

## ⚠️ BEFORE TESTING

Make sure backend is running:
```bash
cd /home/sama/Documents/Paid-Project/backend
npm run dev
```

Wait for: `Server running on port 5000`

---

**Everything is ready to copy-paste into Postman!** 🚀

---

## 🎯 COMPLETE TESTING WORKFLOW

### 🏨 HOTEL TESTING (Full CRUD):

**1️⃣ Login & Get Token**
```
POST http://localhost:5000/auth/admin-login
Body: {"email":"admin@kishanganj.com","password":"admin123"}
→ Copy the token from response
```

**2️⃣ Get All Hotels (Before Adding)**
```
GET http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
→ See current hotels list
```

**3️⃣ Add New Hotel**
```
POST http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
Body: Use any hotel data from Step 3 above
→ Copy the _id from response
```

**4️⃣ Get All Hotels (After Adding)**
```
GET http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
→ Confirm new hotel appears in list
```

**5️⃣ Update The Hotel**
```
PUT http://localhost:5000/admin/hotels/PASTE_ID_HERE
Headers: Authorization: Bearer YOUR_TOKEN
Body: Use any update data from Step 4 above
→ See updated response
```

**6️⃣ Get Single Hotel**
```
GET http://localhost:5000/admin/hotels/PASTE_ID_HERE
Headers: Authorization: Bearer YOUR_TOKEN
→ Confirm updates were saved
```

**7️⃣ Delete The Hotel**
```
DELETE http://localhost:5000/admin/hotels/PASTE_ID_HERE
Headers: Authorization: Bearer YOUR_TOKEN
→ Should get "Hotel deleted successfully"
```

**8️⃣ Get All Hotels (After Deleting)**
```
GET http://localhost:5000/admin/hotels
Headers: Authorization: Bearer YOUR_TOKEN
→ Confirm hotel is removed from list
```

---

### 📝 BLOG TESTING (Full CRUD):

**1️⃣ Get All Blogs (Before Adding)**
```
GET http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
```

**2️⃣ Add New Blog**
```
POST http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
Body: Use any blog data from Step 7 above
→ Copy the _id from response
```

**3️⃣ Get All Blogs (After Adding)**
```
GET http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
→ Confirm new blog appears
```

**4️⃣ Update The Blog**
```
PUT http://localhost:5000/admin/blogs/PASTE_ID_HERE
Headers: Authorization: Bearer YOUR_TOKEN
Body: Use any update data from Step 8 above
```

**5️⃣ Delete The Blog**
```
DELETE http://localhost:5000/admin/blogs/PASTE_ID_HERE
Headers: Authorization: Bearer YOUR_TOKEN
```

**6️⃣ Get All Blogs (After Deleting)**
```
GET http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
→ Confirm blog is removed
```

---

## 📋 COMPLETE URL REFERENCE

### 🔐 Authentication:
```
POST   /auth/register              - Register new user
POST   /auth/login                 - User login
POST   /auth/admin-login           - Admin login
```

### 🏨 Admin Hotels (Requires Token):
```
GET    /admin/hotels               - Get all hotels
POST   /admin/hotels               - Create new hotel
GET    /admin/hotels/:id           - Get single hotel
PUT    /admin/hotels/:id           - Update hotel
DELETE /admin/hotels/:id           - Delete hotel
```

### 📝 Admin Blogs (Requires Token):
```
GET    /admin/blogs                - Get all blogs
POST   /admin/blogs                - Create new blog
GET    /admin/blogs/:id            - Get single blog
PUT    /admin/blogs/:id            - Update blog
DELETE /admin/blogs/:id            - Delete blog
```

### 🌐 Public Routes (No Token Needed):
```
GET    /hotels                     - Public hotels list
GET    /hotels/:id                 - Public hotel details
GET    /blogs                      - Public blogs list
GET    /blogs/:id                  - Public blog details
```

---

## ✅ TESTING CHECKLIST

### Before Starting:
- [ ] Backend running: `cd backend && npm run dev`
- [ ] See "Server running on port 5000" in terminal
- [ ] MongoDB connected successfully

### Authentication:
- [ ] Admin login successful
- [ ] Token received and copied
- [ ] Token added to Authorization header

### Hotels CRUD:
- [ ] ✅ CREATE: Add new hotel
- [ ] 📖 READ: Get all hotels
- [ ] 📖 READ: Get single hotel by ID
- [ ] ✏️ UPDATE: Update hotel details
- [ ] 🗑️ DELETE: Delete hotel

### Blogs CRUD:
- [ ] ✅ CREATE: Add new blog
- [ ] 📖 READ: Get all blogs
- [ ] 📖 READ: Get single blog by ID
- [ ] ✏️ UPDATE: Update blog details
- [ ] 🗑️ DELETE: Delete blog

### Error Testing:
- [ ] Try without token (should get 401)
- [ ] Try with wrong token (should get 401)
- [ ] Try to access non-existent ID (should get 404)
- [ ] Try to update with invalid data (should get error)

---

## 🚨 COMMON ERRORS & SOLUTIONS

### ❌ "Cannot POST /auth/admin-login"
**Solution:** Backend not running. Run: `cd backend && npm run dev`

### ❌ 401 Unauthorized
**Solutions:**
- Token missing in Authorization header
- Token expired (login again)
- Wrong format: Should be `Bearer TOKEN` (with space)

### ❌ 404 Not Found
**Solutions:**
- Check URL spelling
- Make sure you replaced HOTEL_ID or BLOG_ID with actual ID
- Verify endpoint exists in backend routes

### ❌ 500 Internal Server Error
**Solutions:**
- Check backend terminal for error details
- Verify MongoDB is running
- Check if required fields are included in request body

### ❌ "ValidationError"
**Solutions:**
- Check if all required fields are included
- Verify data types (price should be number, not string)
- Check that email format is valid

---

## 💡 POSTMAN TIPS

### Save Your Token:
1. In Postman, go to Environment
2. Create variable: `admin_token`
3. Use `{{admin_token}}` in Authorization header
4. No need to copy-paste token every time!

### Organize Requests:
1. Create Collection: "Kishanganj Admin API"
2. Create Folders: "Auth", "Hotels", "Blogs"
3. Save each request in appropriate folder
4. Add descriptions and examples

### Use Tests Tab:
Add this to Tests tab to auto-save token:
```javascript
if (pm.response.code === 200) {
    const response = pm.response.json();
    if (response.token) {
        pm.environment.set("admin_token", response.token);
    }
}
```

---

## 🎓 QUICK REFERENCE

### Request Structure:
```
METHOD URL
Headers:
  - Content-Type: application/json
  - Authorization: Bearer TOKEN (for protected routes)
Body (for POST/PUT):
  - Select "raw"
  - Select "JSON"
  - Paste JSON data
```

### Response Codes:
- `200` - Success
- `201` - Created successfully
- `400` - Bad request (invalid data)
- `401` - Unauthorized (missing/invalid token)
- `404` - Not found
- `500` - Server error

---

**🎉 You're all set! Start testing!** 🚀
