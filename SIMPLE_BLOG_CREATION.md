# ✅ SIMPLE BLOG CREATION - ONLY TITLE & CONTENT

## 🎯 YOU ONLY NEED TO SEND:
- ✅ `title` (required)
- ✅ `content` (required)
- ❌ `tags` (optional - defaults to empty array)
- ❌ `published` (optional - defaults to true)
- ❌ `author` (auto-populated from your login)

---

## 🔐 STEP 1: LOGIN AS USER

**URL:**
```
http://localhost:5000/auth/login
```

**Method:** POST

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**OR Register First:**
```
POST http://localhost:5000/auth/register
Body: {"name":"John Doe","email":"john@example.com","password":"password123"}
```

**→ COPY THE TOKEN!**

---

## ➕ STEP 2: CREATE BLOG (SIMPLE - ONLY 2 FIELDS!)

**URL:**
```
http://localhost:5000/blogs
```

**Method:** POST

**Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN
```

### ✅ MINIMUM DATA (Just Title & Content):

**Body:**
```json
{
  "title": "My First Blog",
  "content": "This is my blog content about Kishanganj"
}
```

That's it! No tags, no author, no published field needed!

---

## 📦 MORE EXAMPLES (Still Just Title & Content)

### Example 1: Short Blog
```json
{
  "title": "Quick Update",
  "content": "Just visited Kishanganj. Amazing place!"
}
```

### Example 2: Medium Blog
```json
{
  "title": "Kishanganj Travel Guide",
  "content": "Kishanganj is a beautiful city in Bihar. I spent 3 days exploring the local markets, temples, and trying delicious food. Highly recommend visiting!"
}
```

### Example 3: Long Blog
```json
{
  "title": "Complete Guide to Kishanganj Tourism",
  "content": "Kishanganj is a hidden gem in Bihar with rich cultural heritage and natural beauty. During my recent visit, I discovered amazing places including historic temples, scenic lakes, and vibrant markets. The local cuisine is delicious, especially the street food. People are warm and welcoming. This blog covers all the must-visit places, best hotels, and local tips for travelers."
}
```

### Example 4: Food Blog
```json
{
  "title": "Best Food in Kishanganj",
  "content": "The food scene in Kishanganj is incredible! From traditional Litti Chokha to modern cafes, there's something for everyone. I tried the local street food which was amazing. Don't miss the sweets shops!"
}
```

### Example 5: Experience Blog
```json
{
  "title": "My Weekend in Kishanganj",
  "content": "Last weekend I visited Kishanganj and had an amazing time. The city exceeded my expectations with its beautiful temples and friendly locals."
}
```

---

## 🎨 OPTIONAL: Add Tags and Published Status

If you want, you can also send optional fields:

```json
{
  "title": "My Blog Title",
  "content": "My blog content here",
  "tags": ["Travel", "Kishanganj"],
  "published": true
}
```

But these are **OPTIONAL**! Defaults:
- `tags` defaults to `[]` (empty array)
- `published` defaults to `true`
- `author` automatically set from your login token

---

## 📋 QUICK COPY-PASTE TESTS

### Test 1: Minimal (Just 2 fields)
```
POST http://localhost:5000/blogs
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body:
{
  "title": "Test Blog",
  "content": "This is a test blog post"
}
```

### Test 2: With Optional Tags
```
POST http://localhost:5000/blogs
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body:
{
  "title": "Kishanganj Guide",
  "content": "Complete travel guide to Kishanganj",
  "tags": ["Travel", "Guide"]
}
```

### Test 3: Unpublished Draft
```
POST http://localhost:5000/blogs
Headers: 
  Content-Type: application/json
  Authorization: Bearer YOUR_TOKEN
Body:
{
  "title": "Draft Blog",
  "content": "This is a draft, not yet ready to publish",
  "published": false
}
```

---

## ✅ EXPECTED RESPONSE

```json
{
  "_id": "65b9c8d7e4f2a1b3c5d6e7f8",
  "title": "My First Blog",
  "content": "This is my blog content about Kishanganj",
  "tags": [],
  "published": true,
  "author": {
    "_id": "65b9c8d7e4f2a1b3c5d6e7f7",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "createdAt": "2026-01-30T10:00:00.000Z",
  "updatedAt": "2026-01-30T10:00:00.000Z"
}
```

Notice:
- ✅ `tags` is `[]` (auto-filled)
- ✅ `published` is `true` (auto-filled)
- ✅ `author` is populated from your token (auto-filled)

---

## 🎯 COMPLETE WORKFLOW

### 1. Register/Login
```
POST http://localhost:5000/auth/register
Body: {"name":"Jane","email":"jane@example.com","password":"pass123"}
```

### 2. Create Blog (Just Title & Content!)
```
POST http://localhost:5000/blogs
Headers: Authorization: Bearer YOUR_TOKEN
Body: {"title":"My Blog","content":"Blog content here"}
```

### 3. View Your Blogs
```
GET http://localhost:5000/blogs/my
Headers: Authorization: Bearer YOUR_TOKEN
```

### 4. View All Public Blogs
```
GET http://localhost:5000/blogs
(No token needed)
```

---

## 📋 FIELD REQUIREMENTS

| Field | Required? | Default | Auto-populated? |
|-------|-----------|---------|-----------------|
| `title` | ✅ YES | - | ❌ No |
| `content` | ✅ YES | - | ❌ No |
| `tags` | ❌ No | `[]` | ✅ Yes |
| `published` | ❌ No | `true` | ✅ Yes |
| `author` | ❌ No | - | ✅ Yes (from token) |

---

## 🚨 ERROR HANDLING

### Missing Title or Content:
```
Request: {"title":"My Blog"}
Response: {"message":"Title and content are required"}
```

### No Token:
```
Response: 401 Unauthorized
Solution: Add Authorization header with token
```

### Invalid Token:
```
Response: 401 Unauthorized
Solution: Login again to get fresh token
```

---

## 💡 PRO TIPS

### 1. Keep It Simple
Just send title and content:
```json
{
  "title": "Simple Blog",
  "content": "Simple content"
}
```

### 2. Add Tags Later
Create blog first, add tags when editing:
```json
{
  "title": "My Blog",
  "content": "Content here"
}
```

Then update:
```json
{
  "tags": ["Travel", "Food"]
}
```

### 3. Save as Draft
Create unpublished:
```json
{
  "title": "Draft",
  "content": "Work in progress",
  "published": false
}
```

### 4. Multi-line Content
Use `\n` for line breaks:
```json
{
  "title": "Multi-line Blog",
  "content": "First paragraph.\n\nSecond paragraph.\n\nThird paragraph."
}
```

---

## 🔑 SAMPLE USER CREDENTIALS

```
Email: john@example.com
Password: password123
```

Or create your own:
```
Name: Your Name
Email: your@email.com
Password: yourpassword
```

---

## 📝 QUICK EXAMPLES FOR TESTING

### 1-Liner Blog:
```json
{"title":"Quick Note","content":"Just a quick update"}
```

### Simple Blog:
```json
{"title":"Kishanganj Visit","content":"I visited Kishanganj last week. It was amazing!"}
```

### Detailed Blog:
```json
{"title":"Complete Kishanganj Guide","content":"Kishanganj is a beautiful city in Bihar with many attractions. The local food is delicious and people are friendly. I recommend staying for at least 2-3 days to explore everything."}
```

---

**That's it! Just send title and content, everything else is automatic!** ✅
