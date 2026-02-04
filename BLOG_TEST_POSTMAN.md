# 📝 BLOG TESTING - POSTMAN READY

## 🔐 STEP 1: LOGIN & GET TOKEN

**URL:**
```
http://localhost:5000/auth/admin-login
```

**Method:** `POST`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

**→ COPY THE TOKEN FROM RESPONSE!**

---

## 📋 STEP 2: GET ALL BLOGS

**URL:**
```
http://localhost:5000/admin/blogs
```

**Method:** `GET`

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body:** None

**→ COPY A BLOG `_id` FROM RESPONSE!**

---

## 📋 STEP 3: GET SINGLE BLOG

**URL:**
```
http://localhost:5000/admin/blogs/PASTE_BLOG_ID_HERE
```

**Method:** `GET`

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body:** None

---

## ✏️ STEP 4: EDIT BLOG

**URL:**
```
http://localhost:5000/admin/blogs/PASTE_BLOG_ID_HERE
```

**Method:** `PUT`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

### DATA OPTION 1: Update Title Only
```json
{
  "title": "Updated Blog Title - January 2026 Edition"
}
```

### DATA OPTION 2: Update Content Only
```json
{
  "content": "This blog has been updated with the latest information for 2026. All details including tourist attractions, hotels, and restaurants have been verified and revised. New sections added covering safety tips, local transportation options, and budget-friendly travel hacks."
}
```

### DATA OPTION 3: Update Title & Content
```json
{
  "title": "Complete Travel Guide to Kishanganj - Updated 2026",
  "content": "Kishanganj has transformed significantly in recent years. This comprehensive 2026 guide covers everything you need to know - from the best time to visit, top hotels and restaurants, must-see attractions, local customs, transportation tips, and hidden gems that locals love. Whether you're a budget traveler or seeking luxury, this guide has you covered."
}
```

### DATA OPTION 4: Update Category & Tags
```json
{
  "category": "Travel & Tourism",
  "tags": ["Kishanganj", "Travel Guide", "Bihar Tourism", "2026", "Complete Guide", "Must Visit"]
}
```

### DATA OPTION 5: Unpublish Blog
```json
{
  "isPublished": false
}
```

### DATA OPTION 6: Publish Blog
```json
{
  "isPublished": true
}
```

### DATA OPTION 7: Update Author
```json
{
  "author": "Senior Travel Editor"
}
```

### DATA OPTION 8: Update Image
```json
{
  "image": "https://images.unsplash.com/photo-1503220317375-aaad61436b1b"
}
```

### DATA OPTION 9: Update Multiple Fields
```json
{
  "title": "Kishanganj Tourism Guide - Best Places to Visit",
  "author": "Admin Team",
  "category": "Tourism",
  "tags": ["Kishanganj", "Tourism", "Travel", "Bihar", "Attractions"],
  "isPublished": true
}
```

### DATA OPTION 10: Complete Update (All Fields)
```json
{
  "title": "Discover Kishanganj - The Ultimate Travel Guide 2026",
  "content": "Welcome to Kishanganj, a beautiful city in Bihar that offers a perfect blend of culture, heritage, and natural beauty. This ultimate guide covers everything from historic temples and scenic lakes to delicious local cuisine and comfortable accommodations. Explore the vibrant markets, experience traditional festivals, and create unforgettable memories in this hidden gem of India.",
  "author": "Admin Editorial Team",
  "category": "Complete Travel Guide",
  "tags": ["Kishanganj", "Ultimate Guide", "Travel", "Tourism", "Bihar", "Complete Guide", "2026"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
}
```

---

## 🗑️ STEP 5: DELETE BLOG

**URL:**
```
http://localhost:5000/admin/blogs/PASTE_BLOG_ID_HERE
```

**Method:** `DELETE`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body:** None (Leave empty)

---

## 🎯 COMPLETE TESTING SEQUENCE

```
1. POST /auth/admin-login
   → Get token: eyJhbGci...

2. GET /admin/blogs
   → Get list, copy blog ID: 65b9c8d7e4f2a1b3c5d6e7f8

3. GET /admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
   → View blog details

4. PUT /admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
   Body: Use Option 1 (Update title)
   → Blog updated successfully

5. GET /admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
   → Verify title changed

6. PUT /admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
   Body: Use Option 5 (Unpublish)
   → Blog unpublished

7. DELETE /admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
   → Blog deleted successfully

8. GET /admin/blogs
   → Confirm blog no longer in list
```

---

## 📋 QUICK REFERENCE - COPY & PASTE

### Login:
```
POST http://localhost:5000/auth/admin-login
Body: {"email":"admin@kishanganj.com","password":"admin123"}
```

### Get All Blogs:
```
GET http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
```

### Get Single Blog:
```
GET http://localhost:5000/admin/blogs/BLOG_ID
Headers: Authorization: Bearer YOUR_TOKEN
```

### Edit Blog (Simple):
```
PUT http://localhost:5000/admin/blogs/BLOG_ID
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: {"title":"Updated Title"}
```

### Edit Blog (Complete):
```
PUT http://localhost:5000/admin/blogs/BLOG_ID
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: {"title":"New Title","content":"New content here","isPublished":true}
```

### Delete Blog:
```
DELETE http://localhost:5000/admin/blogs/BLOG_ID
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
```

---

## 🎨 MORE UPDATE DATA SAMPLES

### Update to Food Blog Style:
```json
{
  "title": "Best Local Cuisine in Kishanganj - A Food Lover's Guide",
  "content": "Discover the authentic flavors of Kishanganj! From traditional Litti Chokha to modern fusion restaurants, this guide covers the best places to eat. Don't miss the street food scene, local sweets, and traditional thalis that will make your taste buds dance.",
  "category": "Food & Cuisine",
  "tags": ["Food", "Kishanganj", "Cuisine", "Restaurants", "Street Food"]
}
```

### Update to Cultural Blog Style:
```json
{
  "title": "Cultural Heritage of Kishanganj - Festivals and Traditions",
  "content": "Immerse yourself in the rich cultural tapestry of Kishanganj. Experience vibrant festivals like Chhath Puja, Durga Puja, and local celebrations. Learn about traditional art forms, folk dances, and customs that have been preserved for generations.",
  "category": "Culture & Heritage",
  "tags": ["Culture", "Kishanganj", "Festivals", "Heritage", "Traditions", "Art"]
}
```

### Update to Hotel Review Style:
```json
{
  "title": "Top Hotels in Kishanganj - Where to Stay",
  "content": "Finding the perfect accommodation in Kishanganj is easy with this comprehensive review. From luxury hotels with modern amenities to budget-friendly guesthouses, we've reviewed the best options for every type of traveler.",
  "category": "Accommodation",
  "tags": ["Hotels", "Accommodation", "Kishanganj", "Stay", "Reviews"]
}
```

### Update to Adventure Blog Style:
```json
{
  "title": "Adventure Activities in Kishanganj - Outdoor Experiences",
  "content": "Looking for adventure? Kishanganj offers trekking trails, boating, bird watching, and nature walks. Explore the countryside, visit nearby villages, and experience the thrill of outdoor activities in this beautiful region.",
  "category": "Adventure & Activities",
  "tags": ["Adventure", "Kishanganj", "Outdoor", "Activities", "Trekking", "Nature"]
}
```

---

## ⚠️ IMPORTANT NOTES

1. **Admin CANNOT CREATE blogs** - Only GET, EDIT, DELETE
2. **Always include token** in Authorization header
3. **You need a valid blog ID** - Get it from GET /admin/blogs first
4. **Partial updates work** - You don't need to send all fields
5. **Use quotes for strings** - `"title":"value"` not `title:value`

---

## ✅ EXPECTED RESPONSES

### Successful GET All:
```json
[
  {
    "_id": "65b9c8d7e4f2a1b3c5d6e7f8",
    "title": "Blog Title",
    "content": "Blog content...",
    "author": "Author Name",
    "category": "Category",
    "tags": ["tag1", "tag2"],
    "isPublished": true,
    "image": "https://...",
    "createdAt": "2026-01-30T10:00:00.000Z",
    "updatedAt": "2026-01-30T10:00:00.000Z"
  }
]
```

### Successful Update:
```json
{
  "message": "Blog updated successfully",
  "blog": {
    "_id": "65b9c8d7e4f2a1b3c5d6e7f8",
    "title": "Updated Title",
    ...
  }
}
```

### Successful Delete:
```json
{
  "message": "Blog deleted successfully"
}
```

---

## 🚨 TROUBLESHOOTING

### Error: 401 Unauthorized
- Missing token or wrong token
- Login again and copy fresh token

### Error: 404 Not Found
- Wrong URL (use `/admin/blogs` not `/createBlogs`)
- Or blog ID doesn't exist

### Error: Blog not found
- Wrong blog ID
- Blog already deleted
- Do GET /admin/blogs to get valid IDs

---

## 🔑 CREDENTIALS

```
Email: admin@kishanganj.com
Password: admin123
```

---

**Everything ready! Just copy-paste into Postman!** 🚀
