# 📝 BLOG TESTING - DIRECT COPY & PASTE

## 🔐 STEP 1: LOGIN (Get Token)

**URL:**
```
http://localhost:5000/auth/admin-login
```

**Method:** POST

**Body:**
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

**→ COPY THE TOKEN!**

---

## ➕ STEP 2: ADD NEW BLOG

**URL:**
```
http://localhost:5000/admin/blogs
```

**Method:** POST

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body - Option 1:**
```json
{
  "title": "Discover the Hidden Gems of Kishanganj - Complete Travel Guide 2026",
  "content": "Kishanganj is a beautiful city in Bihar with rich cultural heritage and stunning natural landscapes. This comprehensive guide will take you through the must-visit places, best hotels, authentic local cuisine, and hidden spots that most tourists miss. From ancient temples to serene lakes, from bustling markets to peaceful countryside - Kishanganj has something for every traveler. The city is known for its warm hospitality, delicious food, and vibrant festivals. Whether you're a history buff, nature lover, or foodie, this guide will help you plan the perfect trip.",
  "author": "Admin User",
  "category": "Travel Guide",
  "tags": ["Kishanganj", "Travel", "Tourism", "Bihar", "Hidden Gems", "Travel Guide"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
}
```

**Body - Option 2:**
```json
{
  "title": "Traditional Cuisine of Kishanganj - A Food Lover's Paradise",
  "content": "Experience the authentic flavors of Kishanganj cuisine that will tantalize your taste buds. From the famous Litti Chokha to mouth-watering sweets like Khaja and Thekua, the food culture here is incredibly diverse and rich. Street food lovers will be delighted with Samosas, Kachoris, and Jalebis available at every corner. Traditional dishes are prepared using age-old recipes passed down through generations. Don't miss the special biryani, kebabs, and the unique fish preparations that Kishanganj is famous for.",
  "author": "Admin User",
  "category": "Food & Cuisine",
  "tags": ["Food", "Cuisine", "Kishanganj", "Traditional Food", "Street Food", "Litti Chokha"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
}
```

**Body - Option 3:**
```json
{
  "title": "Top 15 Tourist Attractions in Kishanganj You Cannot Miss",
  "content": "Planning a trip to Kishanganj? Here's your ultimate guide to the top 15 must-visit places. Start with the historic Kali Mandir, known for its beautiful architecture and spiritual significance. Visit the scenic Kanwar Lake, perfect for bird watching and boating. Explore the ancient Ramakrishna Mission Ashram for peace and meditation. Don't miss the bustling local markets like Naya Bazaar and Old Market for shopping traditional items. The Thakurganj area offers beautiful countryside views and authentic village experiences.",
  "author": "Admin User",
  "category": "Tourism",
  "tags": ["Tourism", "Kishanganj", "Tourist Places", "Attractions", "Sightseeing", "Travel"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1488646953014-85cb44e25828"
}
```

**Body - Option 4 (Quick Test):**
```json
{
  "title": "Test Blog - DELETE ME",
  "content": "This is a test blog for testing add, edit, and delete functionality. You can safely delete this blog after testing.",
  "author": "Test Admin",
  "category": "Test",
  "tags": ["Test", "Demo"],
  "isPublished": false,
  "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
}
```

**→ COPY THE `_id` FROM RESPONSE!**

---

## 📋 STEP 3: GET ALL BLOGS

**URL:**
```
http://localhost:5000/admin/blogs
```

**Method:** GET

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## 📋 STEP 4: GET SINGLE BLOG

**URL (Replace BLOG_ID):**
```
http://localhost:5000/admin/blogs/BLOG_ID
```

**Example:**
```
http://localhost:5000/admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
```

**Method:** GET

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## ✏️ STEP 5: EDIT BLOG

**URL (Replace BLOG_ID):**
```
http://localhost:5000/admin/blogs/BLOG_ID
```

**Example:**
```
http://localhost:5000/admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
```

**Method:** PUT

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body - Option 1 (Update Everything):**
```json
{
  "title": "Discover the Hidden Gems of Kishanganj - UPDATED 2026 Edition",
  "content": "UPDATED CONTENT: Kishanganj has evolved tremendously in 2026 with new hotels, restaurants, and tourist attractions. This updated guide covers all the latest developments including the new heritage walk, renovated temples, modern cafes, and improved infrastructure. The city now has better connectivity with new roads and public transport. Recently opened museums and cultural centers showcase the rich history.",
  "author": "Senior Admin",
  "category": "Travel Guide - Updated",
  "tags": ["Kishanganj", "Travel", "2026", "Updated", "Latest", "New Guide"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
}
```

**Body - Option 2 (Update Title Only):**
```json
{
  "title": "Top 20 Tourist Attractions in Kishanganj - Extended Guide"
}
```

**Body - Option 3 (Update Content Only):**
```json
{
  "content": "Updated: This blog has been revised with the latest information as of January 2026. All details including prices, timings, and contact information have been verified and updated. New sections added on safety tips, local transportation, and budget planning."
}
```

**Body - Option 4 (Unpublish):**
```json
{
  "isPublished": false
}
```

**Body - Option 5 (Publish):**
```json
{
  "isPublished": true
}
```

**Body - Option 6 (Update Tags):**
```json
{
  "tags": ["Kishanganj", "Tourism", "Travel Guide", "Bihar Tourism", "Must Visit", "2026", "Complete Guide"]
}
```

---

## 🗑️ STEP 6: DELETE BLOG

**URL (Replace BLOG_ID):**
```
http://localhost:5000/admin/blogs/BLOG_ID
```

**Example:**
```
http://localhost:5000/admin/blogs/65b9c8d7e4f2a1b3c5d6e7f8
```

**Method:** DELETE

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE
```

**Body:** NONE

---

## 🎯 COMPLETE REQUESTS - READY TO PASTE

### 1. LOGIN
```
Method: POST
URL: http://localhost:5000/auth/admin-login
Body: {"email":"admin@kishanganj.com","password":"admin123"}
```

### 2. ADD BLOG
```
Method: POST
URL: http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
Body: {"title":"Test Blog - DELETE ME","content":"This is a test blog for testing functionality.","author":"Test Admin","category":"Test","tags":["Test","Demo"],"isPublished":false,"image":"https://images.unsplash.com/photo-1499750310107-5fef28a66643"}
```

### 3. GET ALL BLOGS
```
Method: GET
URL: http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
```

### 4. EDIT BLOG
```
Method: PUT
URL: http://localhost:5000/admin/blogs/BLOG_ID
Headers: Authorization: Bearer YOUR_TOKEN
Body: {"title":"Updated Blog Title","content":"Updated content here","isPublished":true}
```

### 5. DELETE BLOG
```
Method: DELETE
URL: http://localhost:5000/admin/blogs/BLOG_ID
Headers: Authorization: Bearer YOUR_TOKEN
Body: NONE
```

---

## 📖 MORE BLOG DATA SAMPLES

### Culture Blog:
```json
{
  "title": "Cultural Heritage of Kishanganj - Traditions, Art, and Festivals",
  "content": "Dive deep into the rich cultural tapestry of Kishanganj, where ancient traditions blend seamlessly with modern life. The city celebrates numerous festivals throughout the year including Durga Puja, Chhath Puja, Eid, and Holi with great enthusiasm. Traditional art forms like Madhubani painting, Tikuli art, and folk dances like Jat-Jatin and Jhijhiya are still practiced and celebrated.",
  "author": "Admin User",
  "category": "Culture & Heritage",
  "tags": ["Culture", "Heritage", "Kishanganj", "Festivals", "Traditional Art", "Madhubani"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be"
}
```

### Hotel Guide Blog:
```json
{
  "title": "Best Hotels in Kishanganj - Where to Stay for Every Budget",
  "content": "Finding the perfect accommodation in Kishanganj is easy with this comprehensive hotel guide. For luxury travelers, we recommend hotels with 5-star amenities, swimming pools, and spa services. Mid-range options offer comfortable rooms with modern facilities at affordable prices. Budget travelers will find clean and safe hostels and guesthouses perfect for backpackers.",
  "author": "Admin User",
  "category": "Accommodation",
  "tags": ["Hotels", "Accommodation", "Kishanganj", "Stay", "Lodging", "Travel"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945"
}
```

### Adventure Blog:
```json
{
  "title": "Adventure Activities in Kishanganj - Thrills Beyond Tourism",
  "content": "Kishanganj isn't just about sightseeing - it's an adventure destination too! Experience thrilling trekking trails through lush green hills, enjoy boating in pristine lakes, and try your hand at fishing in local rivers. Nature walks and bird watching at Kanwar Lake offer peaceful experiences. Visit nearby villages for authentic rural experiences and farm stays.",
  "author": "Admin User",
  "category": "Adventure",
  "tags": ["Adventure", "Activities", "Kishanganj", "Trekking", "Outdoor", "Nature"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1551632811-561732d1e306"
}
```

### Shopping Blog:
```json
{
  "title": "Shopping in Kishanganj - From Traditional Crafts to Modern Markets",
  "content": "Discover the best shopping destinations in Kishanganj for traditional crafts, textiles, and local specialties. The city's markets are treasure troves of handwoven silk, bamboo handicrafts, and traditional jewelry. Naya Bazaar is perfect for clothes and accessories, while the Old Market specializes in spices and food items. Don't miss buying authentic Madhubani paintings and Tikuli art.",
  "author": "Admin User",
  "category": "Shopping",
  "tags": ["Shopping", "Kishanganj", "Handicrafts", "Markets", "Souvenirs", "Local Products"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
}
```

---

## 🔄 TESTING SEQUENCE

```
1. POST /auth/admin-login
   → Get token

2. POST /admin/blogs
   → Create blog → Get _id

3. GET /admin/blogs
   → See your new blog in list

4. GET /admin/blogs/{_id}
   → Get single blog details

5. PUT /admin/blogs/{_id}
   → Update the blog

6. GET /admin/blogs/{_id}
   → Verify update

7. DELETE /admin/blogs/{_id}
   → Delete blog

8. GET /admin/blogs
   → Confirm deletion
```

---

## 🔑 ADMIN CREDENTIALS

```
Email: admin@kishanganj.com
Password: admin123
```

---

**Just copy-paste URLs and data directly into Postman!** 🚀
