# 📝 ADD BLOG AS USER (Not Admin)

## 🔐 STEP 1: REGISTER A USER (If you don't have one)

**URL:**
```
http://localhost:5000/auth/register
```

**Method:** POST

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**→ COPY THE TOKEN!**

---

## 🔐 STEP 2: OR LOGIN AS EXISTING USER

**URL:**
```
http://localhost:5000/auth/login
```

**Method:** POST

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**→ COPY THE TOKEN!**

---

## ➕ STEP 3: ADD NEW BLOG AS USER

**URL:**
```
http://localhost:5000/blogs
```

**Method:** POST

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_USER_TOKEN_HERE
```

**Body - Option 1 (Simple):**
```json
{
  "title": "My First Blog Post",
  "content": "This is my first blog post about Kishanganj. I recently visited this beautiful city and want to share my experience.",
  "tags": ["Kishanganj", "Travel", "Personal"],
  "published": true
}
```

**Body - Option 2 (Travel Blog):**
```json
{
  "title": "Discovering the Hidden Gems of Kishanganj",
  "content": "Kishanganj is a beautiful city in Bihar with rich cultural heritage and stunning natural landscapes. During my recent visit, I explored ancient temples, enjoyed local cuisine, and met wonderful people. The city offers a perfect blend of history, culture, and natural beauty. I highly recommend visiting the Kali Mandir and trying the local street food.",
  "tags": ["Kishanganj", "Travel", "Tourism", "Bihar"],
  "published": true
}
```

**Body - Option 3 (Food Blog):**
```json
{
  "title": "Best Street Food in Kishanganj - A Food Lover's Guide",
  "content": "As a food enthusiast, I was amazed by the variety and taste of street food in Kishanganj. From crispy samosas to delicious Litti Chokha, every bite was a burst of flavors. The local markets come alive in the evening with food stalls offering traditional delicacies. Don't miss the sweet shops selling fresh jalebis and traditional sweets.",
  "tags": ["Food", "Kishanganj", "Street Food", "Cuisine"],
  "published": true
}
```

**Body - Option 4 (Experience Blog):**
```json
{
  "title": "My Weekend Trip to Kishanganj - A Personal Experience",
  "content": "Last weekend, I took a spontaneous trip to Kishanganj and it turned out to be one of my best travel decisions. The warm hospitality of locals, beautiful landscapes, and peaceful atmosphere made my stay memorable. I stayed at a budget-friendly hotel, visited local attractions, and tried authentic Bihari cuisine. This blog shares my complete experience and tips for fellow travelers.",
  "tags": ["Travel", "Weekend Trip", "Kishanganj", "Personal Experience"],
  "published": true
}
```

**Body - Option 5 (Culture Blog):**
```json
{
  "title": "Festivals and Traditions of Kishanganj",
  "content": "I had the opportunity to witness the vibrant festival celebrations in Kishanganj. The city celebrates Chhath Puja, Durga Puja, and other festivals with great enthusiasm. Traditional art forms, folk dances, and music are still an integral part of the culture. This blog explores the rich cultural heritage and traditions that make Kishanganj unique.",
  "tags": ["Culture", "Festivals", "Kishanganj", "Traditions"],
  "published": true
}
```

**Body - Option 6 (Quick Test):**
```json
{
  "title": "Test Blog Post",
  "content": "This is a test blog post to check if users can create blogs successfully.",
  "tags": ["Test"],
  "published": false
}
```

---

## 📋 STEP 4: GET YOUR BLOGS

**URL:**
```
http://localhost:5000/blogs/my
```

**Method:** GET

**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN_HERE
```

**This will show all blogs YOU created**

---

## ✏️ STEP 5: EDIT YOUR OWN BLOG

**URL:**
```
http://localhost:5000/blogs/BLOG_ID
```

**Method:** PUT

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_USER_TOKEN_HERE
```

**Body:**
```json
{
  "title": "Updated Blog Title",
  "content": "Updated content here",
  "tags": ["Updated", "Tags"],
  "published": true
}
```

---

## 🗑️ STEP 6: DELETE YOUR OWN BLOG

**URL:**
```
http://localhost:5000/blogs/BLOG_ID
```

**Method:** DELETE

**Headers:**
```
Authorization: Bearer YOUR_USER_TOKEN_HERE
```

**Body:** None

---

## 🎯 COMPLETE TESTING WORKFLOW

### 1. Register User
```
POST http://localhost:5000/auth/register
Body: {"name":"John Doe","email":"john@example.com","password":"password123"}
→ Get user token
```

### 2. Add Blog as User
```
POST http://localhost:5000/blogs
Headers: Authorization: Bearer USER_TOKEN
Body: {"title":"My Blog","content":"Blog content here","tags":["Test"],"published":true}
→ Get blog _id
```

### 3. Get All Public Blogs
```
GET http://localhost:5000/blogs
→ See all published blogs (no token needed)
```

### 4. Get My Blogs Only
```
GET http://localhost:5000/blogs/my
Headers: Authorization: Bearer USER_TOKEN
→ See only your blogs
```

### 5. Edit Your Blog
```
PUT http://localhost:5000/blogs/BLOG_ID
Headers: Authorization: Bearer USER_TOKEN
Body: {"title":"Updated","content":"New content"}
```

### 6. Delete Your Blog
```
DELETE http://localhost:5000/blogs/BLOG_ID
Headers: Authorization: Bearer USER_TOKEN
```

---

## 📋 ALL USER BLOG ENDPOINTS

```
POST   http://localhost:5000/auth/register        - Register new user
POST   http://localhost:5000/auth/login           - User login
POST   http://localhost:5000/blogs                - Create blog (requires auth)
GET    http://localhost:5000/blogs                - Get all published blogs (public)
GET    http://localhost:5000/blogs/my             - Get my blogs only (requires auth)
GET    http://localhost:5000/blogs/:id            - Get single blog (public)
PUT    http://localhost:5000/blogs/:id            - Update own blog (requires auth)
DELETE http://localhost:5000/blogs/:id            - Delete own blog (requires auth)
```

---

## 📋 QUICK COPY-PASTE FORMAT

### Register User:
```
POST http://localhost:5000/auth/register
Body: {"name":"Jane Smith","email":"jane@example.com","password":"password123"}
```

### Login User:
```
POST http://localhost:5000/auth/login
Body: {"email":"jane@example.com","password":"password123"}
```

### Add Blog:
```
POST http://localhost:5000/blogs
Headers: Authorization: Bearer USER_TOKEN
Body: {"title":"My Kishanganj Experience","content":"I recently visited Kishanganj and it was amazing!","tags":["Travel","Kishanganj"],"published":true}
```

### Get My Blogs:
```
GET http://localhost:5000/blogs/my
Headers: Authorization: Bearer USER_TOKEN
```

### Edit Blog:
```
PUT http://localhost:5000/blogs/BLOG_ID
Headers: Authorization: Bearer USER_TOKEN
Body: {"content":"Updated content here"}
```

### Delete Blog:
```
DELETE http://localhost:5000/blogs/BLOG_ID
Headers: Authorization: Bearer USER_TOKEN
```

---

## 🎨 MORE BLOG DATA SAMPLES

### Personal Experience:
```json
{
  "title": "A Day in Kishanganj - My Personal Journey",
  "content": "Waking up to the sounds of a bustling city, I started my day exploring the local markets of Kishanganj. The vibrant colors, friendly faces, and aromatic street food created an unforgettable experience. I visited historic sites, interacted with locals, and learned about the rich cultural heritage. This blog shares my day-by-day experience.",
  "tags": ["Personal", "Kishanganj", "Travel Diary", "Experience"],
  "published": true
}
```

### Photography Blog:
```json
{
  "title": "Capturing Kishanganj Through My Lens",
  "content": "As a photography enthusiast, Kishanganj offered countless opportunities to capture stunning moments. From sunrise at the lake to the bustling evening markets, every frame told a story. This blog showcases the beauty of Kishanganj through photographs and shares tips for fellow photographers.",
  "tags": ["Photography", "Kishanganj", "Travel Photography", "Visual Story"],
  "published": true
}
```

### Budget Travel:
```json
{
  "title": "Kishanganj on a Budget - Complete Guide",
  "content": "Traveling to Kishanganj doesn't have to be expensive! I spent a wonderful week exploring the city on a tight budget. This guide covers affordable accommodation, cheap eats, free attractions, and money-saving tips. Proving that you don't need a fortune to have an amazing travel experience.",
  "tags": ["Budget Travel", "Kishanganj", "Travel Tips", "Backpacking"],
  "published": true
}
```

### Local Insights:
```json
{
  "title": "Things Locals Want You to Know About Kishanganj",
  "content": "During my stay, I befriended several locals who shared insider tips and hidden gems. This blog compiles their recommendations - from the best time to visit, local customs to respect, must-try dishes, and off-the-beaten-path locations. Get to know Kishanganj like a local!",
  "tags": ["Local Tips", "Kishanganj", "Insider Guide", "Travel"],
  "published": true
}
```

---

## ⚠️ IMPORTANT NOTES

### User Permissions:
- ✅ Users CAN create blogs
- ✅ Users CAN edit their own blogs
- ✅ Users CAN delete their own blogs
- ❌ Users CANNOT edit other users' blogs
- ❌ Users CANNOT delete other users' blogs

### Admin Permissions:
- ❌ Admin CANNOT create blogs
- ✅ Admin CAN edit ANY blog
- ✅ Admin CAN delete ANY blog
- ✅ Admin CAN view all blogs

---

## 🔑 SAMPLE CREDENTIALS

### For New User:
```
Name: John Doe
Email: john@example.com
Password: password123
```

### Or Create Your Own:
```
Name: Your Name
Email: your.email@example.com
Password: YourPassword123
```

---

## ✅ EXPECTED RESPONSES

### Successful Registration:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65b9c8d7e4f2a1b3c5d6e7f8",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Successful Blog Creation:
```json
{
  "message": "Blog created successfully",
  "blog": {
    "_id": "65b9c8d7e4f2a1b3c5d6e7f9",
    "title": "My First Blog Post",
    "content": "This is my first blog post...",
    "author": {
      "_id": "65b9c8d7e4f2a1b3c5d6e7f8",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "tags": ["Kishanganj", "Travel"],
    "published": true,
    "createdAt": "2026-01-30T...",
    "updatedAt": "2026-01-30T..."
  }
}
```

---

## 🚨 COMMON ERRORS

### Error: "Unauthorized"
- Token missing or invalid
- Login/register again to get fresh token

### Error: "Blog not found or unauthorized"
- Trying to edit/delete someone else's blog
- Check blog ID is correct
- Make sure you're the author

### Error: "Validation failed"
- Missing required fields (title, content)
- Make sure both title and content are provided

---

**Now users can create blogs!** 🎉
