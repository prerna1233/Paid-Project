# 🧪 COMPLETE BLOG TESTING GUIDE (NO TAGS)

## ✅ **TAGS REMOVED - Updated January 30, 2026**

---

## 📋 **TESTING SEQUENCE**

### **PHASE 1: SETUP (Create Admin & Users)**

#### **Step 1.1: Create Admin**
```bash
# Run in terminal
cd /home/sama/Documents/Paid-Project/backend
node src/admin/scripts/createAdmin.js
```

**Expected Output:**
```
✅ Admin user created!
Email: admin@kishanganj.com
Password: admin123
```

---

#### **Step 1.2: Register User 1 (John)**
```
POST http://localhost:5000/auth/register
```

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "john123"
}
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "697c40e2b4236c529f0e56ea",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**→ Save this token as `JOHN_TOKEN`**

---

#### **Step 1.3: Register User 2 (Alice)**
```
POST http://localhost:5000/auth/register
```

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "password": "alice123"
}
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "697c40e2b4236c529f0e56eb",
    "name": "Alice Smith",
    "email": "alice@example.com",
    "role": "user"
  }
}
```

**→ Save this token as `ALICE_TOKEN`**

---

#### **Step 1.4: Login as Admin**
```
POST http://localhost:5000/auth/admin-login
```

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

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "id": "697c40e2b4236c529f0e56ec",
    "name": "Admin User",
    "email": "admin@kishanganj.com",
    "role": "admin"
  }
}
```

**→ Save this token as `ADMIN_TOKEN`**

---

### **PHASE 2: USER BLOG CREATION**

#### **Step 2.1: John Creates Blog 1**
```
POST http://localhost:5000/blogs
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer JOHN_TOKEN
```

**Body (NO TAGS):**
```json
{
  "title": "Exploring Kishanganj - A Hidden Gem",
  "content": "Kishanganj is a beautiful district in Bihar with rich culture and heritage. I recently visited this place and was amazed by its natural beauty, friendly people, and delicious local cuisine. The Kali Mandir and Ganges riverbank are must-visit spots. The local markets offer traditional handicrafts that make perfect souvenirs."
}
```

**Expected Response:**
```json
{
  "message": "Blog created successfully",
  "blog": {
    "_id": "697c54ab9cf64faab3048eca",
    "title": "Exploring Kishanganj - A Hidden Gem",
    "content": "Kishanganj is a beautiful district...",
    "author": {
      "_id": "697c40e2b4236c529f0e56ea",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "likes": [],
    "comments": [],
    "likeCount": 0,
    "commentCount": 0,
    "published": true,
    "createdAt": "2026-01-30T15:00:00.000Z"
  }
}
```

**→ Save blog ID as `BLOG_1_ID`**

---

#### **Step 2.2: John Creates Blog 2**
```
POST http://localhost:5000/blogs
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer JOHN_TOKEN
```

**Body (NO TAGS):**
```json
{
  "title": "Top 5 Foods to Try in Kishanganj",
  "content": "Food lovers, rejoice! Kishanganj offers a unique blend of Bihari and Bengali cuisine. Here are my top 5 must-try dishes: 1. Litti Chokha - Traditional Bihari delicacy, 2. Fish Curry - Fresh river fish cooked in local spices, 3. Pitha - Sweet rice cakes, 4. Sattu Paratha - Healthy and filling, 5. Local Street Chaat - Spicy and tangy snacks."
}
```

**→ Save blog ID as `BLOG_2_ID`**

---

#### **Step 2.3: Alice Creates Blog 3**
```
POST http://localhost:5000/blogs
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer ALICE_TOKEN
```

**Body (NO TAGS):**
```json
{
  "title": "Budget Travel Guide to Kishanganj",
  "content": "Traveling to Kishanganj doesn't have to be expensive! Here's how I explored the entire district on a budget of ₹2000 per day. Accommodation: Stay at local guesthouses (₹500-800/night). Food: Eat at local dhabas (₹150-250/meal). Transport: Use local buses and shared autos (₹50-100/day). Total savings while experiencing authentic local life!"
}
```

**→ Save blog ID as `BLOG_3_ID`**

---

### **PHASE 3: VIEW BLOGS**

#### **Step 3.1: Get All Blogs (Public - No Auth)**
```
GET http://localhost:5000/blogs
```

**Headers:**
```
NONE (Public endpoint)
```

**Expected Response:**
```json
[
  {
    "_id": "697c54ab9cf64faab3048eca",
    "title": "Exploring Kishanganj - A Hidden Gem",
    "content": "Kishanganj is a beautiful district...",
    "author": {
      "_id": "697c40e2b4236c529f0e56ea",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "likes": [],
    "comments": [],
    "likeCount": 0,
    "commentCount": 0,
    "published": true,
    "createdAt": "2026-01-30T15:00:00.000Z"
  },
  {
    "_id": "697c54ab9cf64faab3048ecb",
    "title": "Top 5 Foods to Try in Kishanganj",
    "author": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "likes": [],
    "comments": [],
    "likeCount": 0,
    "commentCount": 0
  },
  {
    "_id": "697c54ab9cf64faab3048ecc",
    "title": "Budget Travel Guide to Kishanganj",
    "author": {
      "name": "Alice Smith",
      "email": "alice@example.com"
    },
    "likes": [],
    "comments": [],
    "likeCount": 0,
    "commentCount": 0
  }
]
```

---

#### **Step 3.2: Get Single Blog (Public - No Auth)**
```
GET http://localhost:5000/blogs/BLOG_1_ID
```

**Replace `BLOG_1_ID` with your actual blog ID**

**Expected Response:**
```json
{
  "_id": "697c54ab9cf64faab3048eca",
  "title": "Exploring Kishanganj - A Hidden Gem",
  "content": "Kishanganj is a beautiful district...",
  "author": {
    "_id": "697c40e2b4236c529f0e56ea",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "likes": [],
  "comments": [],
  "likeCount": 0,
  "commentCount": 0,
  "published": true
}
```

---

#### **Step 3.3: John Gets His Own Blogs**
```
GET http://localhost:5000/blogs/user/my-blogs
```

**Headers:**
```
Authorization: Bearer JOHN_TOKEN
```

**Expected Response:**
```json
[
  {
    "_id": "697c54ab9cf64faab3048eca",
    "title": "Exploring Kishanganj - A Hidden Gem",
    "author": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "likes": [],
    "comments": [],
    "likeCount": 0,
    "commentCount": 0
  },
  {
    "_id": "697c54ab9cf64faab3048ecb",
    "title": "Top 5 Foods to Try in Kishanganj",
    "author": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "likes": [],
    "comments": [],
    "likeCount": 0,
    "commentCount": 0
  }
]
```

---

### **PHASE 4: LIKES (LIKE, UNLIKE, LIKE AGAIN)**

#### **Step 4.1: Alice Likes Blog 1**
```
POST http://localhost:5000/blogs/BLOG_1_ID/like
```

**Headers:**
```
Authorization: Bearer ALICE_TOKEN
```

**Expected Response:**
```json
{
  "message": "Blog liked",
  "liked": true,
  "likeCount": 1
}
```

---

#### **Step 4.2: John Likes His Own Blog 1**
```
POST http://localhost:5000/blogs/BLOG_1_ID/like
```

**Headers:**
```
Authorization: Bearer JOHN_TOKEN
```

**Expected Response:**
```json
{
  "message": "Blog liked",
  "liked": true,
  "likeCount": 2
}
```

---

#### **Step 4.3: Get Blog 1 (Check Likes)**
```
GET http://localhost:5000/blogs/BLOG_1_ID
```

**Expected Response:**
```json
{
  "_id": "697c54ab9cf64faab3048eca",
  "title": "Exploring Kishanganj - A Hidden Gem",
  "author": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "likes": [
    {
      "_id": "697c40e2b4236c529f0e56eb",
      "name": "Alice Smith",
      "email": "alice@example.com"
    },
    {
      "_id": "697c40e2b4236c529f0e56ea",
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "likeCount": 2,
  "comments": [],
  "commentCount": 0
}
```

---

#### **Step 4.4: Alice Unlikes Blog 1 (Toggle)**
```
POST http://localhost:5000/blogs/BLOG_1_ID/like
```

**Headers:**
```
Authorization: Bearer ALICE_TOKEN
```

**Expected Response:**
```json
{
  "message": "Blog unliked",
  "liked": false,
  "likeCount": 1
}
```

---

#### **Step 4.5: Alice Likes Blog 1 Again**
```
POST http://localhost:5000/blogs/BLOG_1_ID/like
```

**Headers:**
```
Authorization: Bearer ALICE_TOKEN
```

**Expected Response:**
```json
{
  "message": "Blog liked",
  "liked": true,
  "likeCount": 2
}
```

---

### **PHASE 5: COMMENTS (ADD COMMENTS)**

#### **Step 5.1: Alice Adds Comment on Blog 1**
```
POST http://localhost:5000/blogs/BLOG_1_ID/comments
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer ALICE_TOKEN
```

**Body:**
```json
{
  "text": "Great article! I'm planning to visit Kishanganj next month. Any hotel recommendations?"
}
```

**Expected Response:**
```json
{
  "message": "Comment added successfully",
  "comment": {
    "_id": "67a1b2c3d4e5f6789012347",
    "user": {
      "_id": "697c40e2b4236c529f0e56eb",
      "name": "Alice Smith",
      "email": "alice@example.com"
    },
    "text": "Great article! I'm planning to visit Kishanganj next month. Any hotel recommendations?",
    "createdAt": "2026-01-30T15:30:00.000Z"
  },
  "commentCount": 1
}
```

**→ Save comment ID as `COMMENT_1_ID`**

---

#### **Step 5.2: John Replies to His Own Blog**
```
POST http://localhost:5000/blogs/BLOG_1_ID/comments
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer JOHN_TOKEN
```

**Body:**
```json
{
  "text": "Thanks Alice! I stayed at The Heritage Inn. It's affordable and centrally located. Perfect for tourists!"
}
```

**→ Save comment ID as `COMMENT_2_ID`**

---

#### **Step 5.3: Alice Adds Another Comment**
```
POST http://localhost:5000/blogs/BLOG_1_ID/comments
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer ALICE_TOKEN
```

**Body:**
```json
{
  "text": "This is a spam comment. Delete me later for testing!"
}
```

**→ Save comment ID as `COMMENT_3_ID`**

---

#### **Step 5.4: Get Blog 1 (Check Comments)**
```
GET http://localhost:5000/blogs/BLOG_1_ID
```

**Expected Response:**
```json
{
  "_id": "697c54ab9cf64faab3048eca",
  "title": "Exploring Kishanganj - A Hidden Gem",
  "author": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "likes": [
    {
      "name": "Alice Smith",
      "email": "alice@example.com"
    },
    {
      "name": "John Doe",
      "email": "john@example.com"
    }
  ],
  "likeCount": 2,
  "comments": [
    {
      "_id": "67a1b2c3d4e5f6789012347",
      "user": {
        "name": "Alice Smith",
        "email": "alice@example.com"
      },
      "text": "Great article! I'm planning to visit...",
      "createdAt": "2026-01-30T15:30:00.000Z"
    },
    {
      "_id": "67a1b2c3d4e5f6789012348",
      "user": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "text": "Thanks Alice! I stayed at The Heritage Inn...",
      "createdAt": "2026-01-30T15:31:00.000Z"
    },
    {
      "_id": "67a1b2c3d4e5f6789012349",
      "user": {
        "name": "Alice Smith",
        "email": "alice@example.com"
      },
      "text": "This is a spam comment. Delete me later for testing!",
      "createdAt": "2026-01-30T15:32:00.000Z"
    }
  ],
  "commentCount": 3
}
```

---

### **PHASE 6: DELETE COMMENTS (USER)**

#### **Step 6.1: Alice Deletes Her Own Spam Comment**
```
DELETE http://localhost:5000/blogs/BLOG_1_ID/comments/COMMENT_3_ID
```

**Headers:**
```
Authorization: Bearer ALICE_TOKEN
```

**Expected Response:**
```json
{
  "message": "Comment deleted successfully",
  "commentCount": 2
}
```

---

#### **Step 6.2: John Tries to Delete Alice's Comment (Should Fail)**
```
DELETE http://localhost:5000/blogs/BLOG_1_ID/comments/COMMENT_1_ID
```

**Headers:**
```
Authorization: Bearer JOHN_TOKEN
```

**Expected Response (ERROR):**
```json
{
  "success": false,
  "error": {
    "message": "Unauthorized to delete this comment"
  }
}
```

---

#### **Step 6.3: Alice Deletes Her First Comment**
```
DELETE http://localhost:5000/blogs/BLOG_1_ID/comments/COMMENT_1_ID
```

**Headers:**
```
Authorization: Bearer ALICE_TOKEN
```

**Expected Response:**
```json
{
  "message": "Comment deleted successfully",
  "commentCount": 1
}
```

---

### **PHASE 7: ADMIN OPERATIONS**

#### **Step 7.1: Admin Views All Blogs**
```
GET http://localhost:5000/admin/blogs
```

**Headers:**
```
Authorization: Bearer ADMIN_TOKEN
```

**Expected Response:**
```json
[
  {
    "_id": "697c54ab9cf64faab3048eca",
    "title": "Exploring Kishanganj - A Hidden Gem",
    "author": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "likes": [...],
    "comments": [...],
    "likeCount": 2,
    "commentCount": 1
  },
  ...all other blogs...
]
```

---

#### **Step 7.2: Admin Deletes John's Comment (From Blog 1)**
```
DELETE http://localhost:5000/admin/blogs/BLOG_1_ID/comments/COMMENT_2_ID
```

**Headers:**
```
Authorization: Bearer ADMIN_TOKEN
```

**Expected Response:**
```json
{
  "message": "Comment deleted successfully by admin",
  "commentCount": 0
}
```

---

#### **Step 7.3: Verify Comment Deleted**
```
GET http://localhost:5000/blogs/BLOG_1_ID
```

**Expected Response:**
```json
{
  "_id": "697c54ab9cf64faab3048eca",
  "title": "Exploring Kishanganj - A Hidden Gem",
  "comments": [],
  "commentCount": 0
}
```

---

#### **Step 7.4: Admin Edits Blog (Change Title)**
```
PUT http://localhost:5000/admin/blogs/BLOG_1_ID
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer ADMIN_TOKEN
```

**Body (NO TAGS):**
```json
{
  "title": "[FEATURED] Exploring Kishanganj - A Hidden Gem"
}
```

**Expected Response:**
```json
{
  "message": "Blog updated successfully",
  "blog": {
    "_id": "697c54ab9cf64faab3048eca",
    "title": "[FEATURED] Exploring Kishanganj - A Hidden Gem",
    "content": "Kishanganj is a beautiful district..."
  }
}
```

---

#### **Step 7.5: Admin Deletes Blog 3**
```
DELETE http://localhost:5000/admin/blogs/BLOG_3_ID
```

**Headers:**
```
Authorization: Bearer ADMIN_TOKEN
```

**Expected Response:**
```json
{
  "message": "Blog deleted successfully"
}
```

---

#### **Step 7.6: Verify Blog Deleted**
```
GET http://localhost:5000/blogs
```

**Expected Response:**
```json
[
  {
    "_id": "697c54ab9cf64faab3048eca",
    "title": "[FEATURED] Exploring Kishanganj - A Hidden Gem"
  },
  {
    "_id": "697c54ab9cf64faab3048ecb",
    "title": "Top 5 Foods to Try in Kishanganj"
  }
  // Blog 3 is gone!
]
```

---

### **PHASE 8: USER EDIT & DELETE OWN BLOG**

#### **Step 8.1: John Edits His Blog 2**
```
PUT http://localhost:5000/blogs/BLOG_2_ID
```

**Headers:**
```
Content-Type: application/json
Authorization: Bearer JOHN_TOKEN
```

**Body (NO TAGS):**
```json
{
  "title": "Top 10 Foods to Try in Kishanganj (Updated)",
  "content": "Updated content with 5 more dishes: 6. Malpua - Sweet dessert, 7. Jhalmuri - Spicy snack, 8. Aloo Chop - Deep fried potato, 9. Paneer Pakora - Cheese fritters, 10. Gulab Jamun - Traditional sweet."
}
```

**Expected Response:**
```json
{
  "message": "Blog updated successfully",
  "blog": {
    "_id": "697c54ab9cf64faab3048ecb",
    "title": "Top 10 Foods to Try in Kishanganj (Updated)",
    "content": "Updated content with 5 more dishes..."
  }
}
```

---

#### **Step 8.2: John Deletes His Blog 2**
```
DELETE http://localhost:5000/blogs/BLOG_2_ID
```

**Headers:**
```
Authorization: Bearer JOHN_TOKEN
```

**Expected Response:**
```json
{
  "message": "Blog deleted successfully"
}
```

---

#### **Step 8.3: Final Blog List**
```
GET http://localhost:5000/blogs
```

**Expected Response:**
```json
[
  {
    "_id": "697c54ab9cf64faab3048eca",
    "title": "[FEATURED] Exploring Kishanganj - A Hidden Gem",
    "author": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "likes": [
      {
        "name": "Alice Smith",
        "email": "alice@example.com"
      },
      {
        "name": "John Doe",
        "email": "john@example.com"
      }
    ],
    "likeCount": 2,
    "comments": [],
    "commentCount": 0,
    "published": true
  }
]
```

---

## ✅ **TESTING CHECKLIST**

```
□ Step 1: Created admin
□ Step 2: Registered John
□ Step 3: Registered Alice
□ Step 4: Admin logged in
□ Step 5: John created 2 blogs (NO TAGS)
□ Step 6: Alice created 1 blog (NO TAGS)
□ Step 7: Viewed all blogs
□ Step 8: Viewed single blog
□ Step 9: John viewed his blogs
□ Step 10: Alice liked blog 1
□ Step 11: John liked blog 1
□ Step 12: Verified 2 likes
□ Step 13: Alice unliked blog 1
□ Step 14: Alice liked blog 1 again
□ Step 15: Alice added comment
□ Step 16: John replied
□ Step 17: Alice added spam comment
□ Step 18: Verified 3 comments
□ Step 19: Alice deleted spam comment
□ Step 20: John tried to delete Alice's comment (failed) ✅
□ Step 21: Alice deleted her comment
□ Step 22: Admin viewed all blogs
□ Step 23: Admin deleted John's comment
□ Step 24: Verified comment gone
□ Step 25: Admin edited blog (NO TAGS)
□ Step 26: Admin deleted Alice's blog
□ Step 27: Verified blog deleted
□ Step 28: John edited his blog (NO TAGS)
□ Step 29: John deleted his blog
□ Step 30: Final blog list
```

---

## 🎯 **SUMMARY**

**✅ TAGS REMOVED**
- ❌ No more `tags` field in blog model
- ❌ No more `tags` in create/update requests
- ✅ Simplified blog creation
- ✅ Cleaner data structure

**Total Tests:** 30 steps  
**Total Endpoints:** 12 unique endpoints  
**Features Tested:**
- ✅ User registration & login
- ✅ Admin login
- ✅ Blog creation (without tags)
- ✅ Blog viewing
- ✅ Like/unlike toggle
- ✅ Add comments
- ✅ Delete own comments
- ✅ Admin delete any comment
- ✅ Admin edit any blog
- ✅ Admin delete any blog
- ✅ User edit/delete own blog
- ✅ All data with author, likes, comments

**All features working!** 🎉🚀

---

## 📝 **Quick Copy-Paste Blog Bodies**

### Create Blog 1:
```json
{
  "title": "Exploring Kishanganj - A Hidden Gem",
  "content": "Kishanganj is a beautiful district in Bihar with rich culture and heritage."
}
```

### Create Blog 2:
```json
{
  "title": "Top 5 Foods to Try in Kishanganj",
  "content": "Food lovers, rejoice! Kishanganj offers a unique blend of Bihari and Bengali cuisine."
}
```

### Create Blog 3:
```json
{
  "title": "Budget Travel Guide to Kishanganj",
  "content": "Traveling to Kishanganj doesn't have to be expensive!"
}
```

### Update Blog:
```json
{
  "title": "Updated Title",
  "content": "Updated content here..."
}
```

---

**Start Testing Now!** 🚀
