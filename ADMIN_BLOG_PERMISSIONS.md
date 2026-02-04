# 📝 ADMIN BLOG PERMISSIONS - GET, EDIT, DELETE ONLY

## ⚠️ IMPORTANT: ADMIN CANNOT CREATE BLOGS
Admins can only:
- ✅ GET (View) blogs
- ✅ EDIT (Update) blogs
- ✅ DELETE (Remove) blogs
- ❌ CREATE (Add) new blogs

---

## 🔐 STEP 1: LOGIN

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

## 📋 STEP 2: GET ALL BLOGS

**URL:**
```
http://localhost:5000/admin/blogs
```

**Method:** GET

**Headers:**
```
Authorization: Bearer YOUR_TOKEN_HERE
```

**No Body Needed**

**→ COPY A BLOG `_id` TO EDIT OR DELETE**

---

## 📋 STEP 3: GET SINGLE BLOG

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

**No Body Needed**

---

## ✏️ STEP 4: EDIT BLOG

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

### Edit Options:

**Option 1 - Update Title:**
```json
{
  "title": "Updated Blog Title - 2026 Edition"
}
```

**Option 2 - Update Content:**
```json
{
  "content": "This blog has been updated with the latest information for 2026. All details have been verified and revised."
}
```

**Option 3 - Update Title & Content:**
```json
{
  "title": "Complete Travel Guide to Kishanganj - Updated",
  "content": "Kishanganj has evolved tremendously. This updated guide covers all the latest developments including new hotels, restaurants, and tourist attractions. The city now has better connectivity and improved infrastructure."
}
```

**Option 4 - Update Category & Tags:**
```json
{
  "category": "Travel & Tourism",
  "tags": ["Kishanganj", "Travel", "Bihar", "Tourism", "2026", "Updated Guide"]
}
```

**Option 5 - Update Publish Status (Unpublish):**
```json
{
  "isPublished": false
}
```

**Option 6 - Update Publish Status (Publish):**
```json
{
  "isPublished": true
}
```

**Option 7 - Update Author:**
```json
{
  "author": "Senior Admin Editor"
}
```

**Option 8 - Update Image:**
```json
{
  "image": "https://images.unsplash.com/photo-1503220317375-aaad61436b1b"
}
```

**Option 9 - Update Everything:**
```json
{
  "title": "Discover Kishanganj - Complete Guide 2026",
  "content": "Updated comprehensive guide to Kishanganj covering all aspects of travel, tourism, accommodation, food, and culture. This 2026 edition includes the latest information on new attractions, hotels, and restaurants.",
  "author": "Admin Team",
  "category": "Complete Travel Guide",
  "tags": ["Kishanganj", "Complete Guide", "2026", "Travel", "Tourism"],
  "isPublished": true,
  "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
}
```

---

## 🗑️ STEP 5: DELETE BLOG

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

## 🎯 COMPLETE TESTING WORKFLOW

### Step 1: Login
```
POST http://localhost:5000/auth/admin-login
Body: {"email":"admin@kishanganj.com","password":"admin123"}
→ Copy token
```

### Step 2: Get All Blogs
```
GET http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
→ See all existing blogs, copy a blog _id
```

### Step 3: Get Single Blog
```
GET http://localhost:5000/admin/blogs/BLOG_ID
Headers: Authorization: Bearer YOUR_TOKEN
→ View full details of one blog
```

### Step 4: Edit That Blog
```
PUT http://localhost:5000/admin/blogs/BLOG_ID
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: Pick any option from "Edit Options" above
→ Update the blog
```

### Step 5: Verify Update
```
GET http://localhost:5000/admin/blogs/BLOG_ID
Headers: Authorization: Bearer YOUR_TOKEN
→ Confirm changes were saved
```

### Step 6: Delete That Blog
```
DELETE http://localhost:5000/admin/blogs/BLOG_ID
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
→ Remove the blog
```

### Step 7: Verify Deletion
```
GET http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
→ Confirm blog is removed from list
```

---

## 📋 QUICK COPY-PASTE FORMAT

### 📋 GET ALL BLOGS:
```
Method: GET
URL: http://localhost:5000/admin/blogs
Headers: Authorization: Bearer YOUR_TOKEN
```

### 📋 GET SINGLE BLOG:
```
Method: GET
URL: http://localhost:5000/admin/blogs/BLOG_ID
Headers: Authorization: Bearer YOUR_TOKEN
```

### ✏️ EDIT BLOG:
```
Method: PUT
URL: http://localhost:5000/admin/blogs/BLOG_ID
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: {"title":"Updated Title","content":"Updated content"}
```

### 🗑️ DELETE BLOG:
```
Method: DELETE
URL: http://localhost:5000/admin/blogs/BLOG_ID
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body: NONE
```

---

## 📋 ALL ADMIN BLOG ENDPOINTS

```
GET    http://localhost:5000/admin/blogs           ✅ Get all blogs
GET    http://localhost:5000/admin/blogs/:id       ✅ Get single blog
PUT    http://localhost:5000/admin/blogs/:id       ✅ Edit/Update blog
DELETE http://localhost:5000/admin/blogs/:id       ✅ Delete blog

POST   http://localhost:5000/admin/blogs           ❌ NOT ALLOWED (Cannot create)
```

---

## ✅ ADMIN CAN DO:

### For HOTELS:
- ✅ GET (View all hotels)
- ✅ CREATE (Add new hotels)
- ✅ EDIT (Update hotels)
- ✅ DELETE (Remove hotels)

### For BLOGS:
- ✅ GET (View all blogs)
- ✅ EDIT (Update blogs)
- ✅ DELETE (Remove blogs)
- ❌ CREATE (Cannot add new blogs)

---

## 💡 TESTING TIPS

### 1. First Check What Blogs Exist:
```
GET http://localhost:5000/admin/blogs
```
This shows you all available blogs to edit or delete

### 2. Practice on Test Blogs:
Look for blogs with titles like "Test" or "Demo" to practice editing/deleting

### 3. Partial Updates Work:
You don't need to send all fields. Update just what you need:
```json
{
  "title": "New Title Only"
}
```

### 4. Toggle Publish Status:
Quickly publish/unpublish:
```json
{
  "isPublished": false
}
```

### 5. Always Verify:
After editing, do a GET request to confirm changes

---

## 🚨 COMMON ERRORS

### ❌ Error: "Blog not found"
**Reason:** Wrong blog ID or blog doesn't exist
**Solution:** Do GET /admin/blogs to see available blog IDs

### ❌ Error: 401 Unauthorized
**Reason:** Missing or expired token
**Solution:** Login again and get fresh token

### ❌ Error: 403 Forbidden
**Reason:** Trying to create a blog (not allowed)
**Solution:** Admin can only edit/delete, not create

### ❌ Error: 404 Not Found
**Reason:** Wrong URL
**Solution:** Use `/admin/blogs` not `/createBlogs` or other variations

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
    "content": "Updated content...",
    ...
    "updatedAt": "2026-01-30T12:30:00.000Z"
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

## 🔑 ADMIN CREDENTIALS

```
Email: admin@kishanganj.com
Password: admin123
```

---

## 🎓 EXAMPLE TESTING FLOW

```
1. Login → Get Token
   POST /auth/admin-login

2. View All Blogs
   GET /admin/blogs
   Result: See 5 blogs, pick blog with _id: 65b9c8d7...

3. View Single Blog
   GET /admin/blogs/65b9c8d7...
   Result: See full details

4. Edit Blog Title
   PUT /admin/blogs/65b9c8d7...
   Body: {"title": "Updated Title"}
   Result: Blog updated

5. Verify Update
   GET /admin/blogs/65b9c8d7...
   Result: Title is now "Updated Title"

6. Unpublish Blog
   PUT /admin/blogs/65b9c8d7...
   Body: {"isPublished": false}
   Result: Blog unpublished

7. Delete Blog
   DELETE /admin/blogs/65b9c8d7...
   Result: Blog deleted

8. Verify Deletion
   GET /admin/blogs
   Result: Only 4 blogs remain
```

---

**Ready to test! Admin can GET, EDIT, and DELETE blogs!** ✅
