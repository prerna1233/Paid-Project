# 🚀 Quick Reference: Blog Likes & Comments API

## Base URL
```
http://localhost:5000
```

---

## 1. LIKE/UNLIKE BLOG

### Endpoint
```
POST http://localhost:5000/blogs/:id/like
```

### Example
```
POST http://localhost:5000/blogs/67a1b2c3d4e5f6789012345/like
```

### Headers
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Response (Liked)
```json
{
  "message": "Blog liked",
  "liked": true,
  "likeCount": 5
}
```

### Response (Unliked)
```json
{
  "message": "Blog unliked",
  "liked": false,
  "likeCount": 4
}
```

---

## 2. ADD COMMENT

### Endpoint
```
POST http://localhost:5000/blogs/:id/comments
```

### Example
```
POST http://localhost:5000/blogs/67a1b2c3d4e5f6789012345/comments
```

### Headers
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
```

### Body
```json
{
  "text": "Great article! Very informative."
}
```

### Response
```json
{
  "message": "Comment added successfully",
  "comment": {
    "_id": "67a1b2c3d4e5f6789012347",
    "user": {
      "_id": "67a1b2c3d4e5f6789012340",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "text": "Great article! Very informative.",
    "createdAt": "2026-01-30T13:00:00.000Z"
  },
  "commentCount": 3
}
```

---

## 3. DELETE COMMENT

### Endpoint
```
DELETE http://localhost:5000/blogs/:id/comments/:commentId
```

### Example
```
DELETE http://localhost:5000/blogs/67a1b2c3d4e5f6789012345/comments/67a1b2c3d4e5f6789012347
```

### Headers
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Response
```json
{
  "message": "Comment deleted successfully",
  "commentCount": 2
}
```

**Note:** Can only delete your own comments!

---

## 4. GET BLOG WITH FULL INTERACTIONS

### Endpoint
```
GET http://localhost:5000/blogs/:id/interactions
```

### Example
```
GET http://localhost:5000/blogs/67a1b2c3d4e5f6789012345/interactions
```

### Headers
```
None (Public endpoint)
```

### Response
```json
{
  "_id": "67a1b2c3d4e5f6789012345",
  "title": "Exploring Kishanganj",
  "content": "Kishanganj is a beautiful city...",
  "author": {
    "_id": "67a1b2c3d4e5f6789012340",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "likes": [
    {
      "_id": "67a1b2c3d4e5f6789012341",
      "name": "Alice Smith",
      "email": "alice@example.com"
    }
  ],
  "comments": [
    {
      "_id": "67a1b2c3d4e5f6789012347",
      "user": {
        "_id": "67a1b2c3d4e5f6789012343",
        "name": "Carol White",
        "email": "carol@example.com"
      },
      "text": "Very informative!",
      "createdAt": "2026-01-30T13:00:00.000Z"
    }
  ],
  "likeCount": 1,
  "commentCount": 1,
  "createdAt": "2026-01-30T10:00:00.000Z"
}
```

---

## Testing Workflow

### Step 1: Login
```bash
POST http://localhost:5000/auth/login
Body: { "email": "john@example.com", "password": "john123" }
# Save the token
```

### Step 2: Get All Blogs (Now includes EVERYTHING!)
```bash
GET http://localhost:5000/blogs

# Response includes:
# ✅ Author name & email
# ✅ All likes with user names & emails
# ✅ All comments with user names, emails & text
# ✅ Like count & comment count
```

### Step 3: Like the Blog
```bash
POST http://localhost:5000/blogs/YOUR_BLOG_ID/like
Headers: Authorization: Bearer YOUR_TOKEN
```

### Step 4: Add Comment
```bash
POST http://localhost:5000/blogs/YOUR_BLOG_ID/comments
Headers: 
  Authorization: Bearer YOUR_TOKEN
  Content-Type: application/json
Body: { "text": "Great blog!" }
```

### Step 5: Verify Changes
```bash
GET http://localhost:5000/blogs/YOUR_BLOG_ID

# Your like and comment will be visible!
```

---

## 🎉 IMPORTANT UPDATE

### ALL Blog Endpoints Now Include Full Interactions!

**What Changed:**
- ✅ `GET /blogs` - Now includes likes & comments
- ✅ `GET /blogs/:id` - Now includes likes & comments
- ✅ `GET /blogs/user/my-blogs` - Now includes likes & comments
- ✅ `GET /admin/blogs` - Now includes likes & comments

**You No Longer Need `/interactions` endpoint** - All data is included by default!

### Example Response (All Endpoints)
```json
{
  "_id": "67a1b2c3d4e5f6789012345",
  "title": "Exploring Kishanganj",
  "content": "Kishanganj is a beautiful city...",
  "author": {
    "_id": "67a1b2c3d4e5f6789012340",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "likes": [
    {
      "_id": "67a1b2c3d4e5f6789012341",
      "name": "Alice Smith",
      "email": "alice@example.com"
    }
  ],
  "comments": [
    {
      "_id": "67a1b2c3d4e5f6789012347",
      "user": {
        "_id": "67a1b2c3d4e5f6789012343",
        "name": "Carol White",
        "email": "carol@example.com"
      },
      "text": "Very informative!",
      "createdAt": "2026-01-30T13:00:00.000Z"
    }
  ],
  "likeCount": 1,
  "commentCount": 1,
  "createdAt": "2026-01-30T10:00:00.000Z"
}
```

---

## Sample Test Data

### User Credentials
```json
{
  "email": "john@example.com",
  "password": "john123"
}
```

### Comment Examples
```json
{ "text": "Great article! Very informative." }
{ "text": "I visited these places last year, amazing!" }
{ "text": "Thanks for sharing this wonderful guide." }
{ "text": "Looking forward to visiting Kishanganj soon!" }
{ "text": "The cultural heritage is truly fascinating." }
```

---

## Common Errors

### 401 Unauthorized
```json
{ "message": "No token, authorization denied" }
```
**Solution:** Add Authorization header with valid JWT token

### 403 Forbidden
```json
{ "message": "Unauthorized to delete this comment" }
```
**Solution:** You can only delete your own comments

### 400 Bad Request
```json
{ "message": "Comment text is required" }
```
**Solution:** Provide non-empty text in request body

### 404 Not Found
```json
{ "message": "Blog not found" }
```
**Solution:** Use a valid blog ID

---

## Quick Copy-Paste Commands

### Like Blog
```bash
curl -X POST http://localhost:5000/blogs/YOUR_BLOG_ID/like \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Add Comment
```bash
curl -X POST http://localhost:5000/blogs/YOUR_BLOG_ID/comments \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"text":"Great article!"}'
```

### Delete Comment
```bash
curl -X DELETE http://localhost:5000/blogs/YOUR_BLOG_ID/comments/COMMENT_ID \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Get Full Interactions
```bash
curl http://localhost:5000/blogs/YOUR_BLOG_ID/interactions
```

---

## All Endpoints Summary

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/blogs/:id/like` | ✅ Yes (User) | Toggle like/unlike |
| POST | `/blogs/:id/comments` | ✅ Yes (User) | Add comment |
| DELETE | `/blogs/:id/comments/:commentId` | ✅ Yes (User) | Delete own comment |
| DELETE | `/admin/blogs/:id/comments/:commentId` | ✅ Yes (Admin) | Delete any comment ⭐ NEW |
| GET | `/blogs/:id/interactions` | ❌ No | Get blog with all likes & comments |

---

## 5. DELETE ANY COMMENT (ADMIN ONLY) ⭐ NEW

### Endpoint
```
DELETE http://localhost:5000/admin/blogs/:id/comments/:commentId
```

### Example
```
DELETE http://localhost:5000/admin/blogs/67a1b2c3d4e5f6789012345/comments/67a1b2c3d4e5f6789012347
```

### Headers
```
Authorization: Bearer ADMIN_JWT_TOKEN
```

### Response
```json
{
  "message": "Comment deleted successfully by admin",
  "commentCount": 2
}
```

### Important Notes
- **Admin only** - Requires admin authentication
- Can delete **ANY** comment on **ANY** blog
- No ownership check (unlike user delete comment)
- Useful for content moderation

### Admin Login
```bash
POST http://localhost:5000/auth/admin-login
Body: { "email": "admin@example.com", "password": "admin123" }
# Use the admin token for this endpoint
```

---

**For detailed documentation, see:** `BLOG_LIKES_COMMENTS_GUIDE.md`
