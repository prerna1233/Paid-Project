# Blog Likes & Comments Feature Guide

## Overview
This guide covers the new social interaction features for blogs:
- **Like/Unlike**: Users can like or unlike blog posts
- **Comments**: Users can add and delete their own comments
- **Authentication Required**: All interactions require user authentication

## Prerequisites
1. User must be registered and logged in
2. Must have a valid JWT token
3. Blog must exist

---

## 1. Like/Unlike a Blog

### Endpoint
```
POST http://localhost:5000/api/blogs/:id/like
```

### Authentication
Required - Add token to Headers:
```
Authorization: Bearer your_jwt_token_here
```

### How It Works
- First POST: Adds user to likes array (Like)
- Second POST: Removes user from likes array (Unlike)
- One endpoint toggles between like and unlike

### Example Request
```bash
# Like a blog
POST http://localhost:5000/api/blogs/676f40b2e1234567890abcde/like

Headers:
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

### Error Responses
```json
// Blog not found
{
  "message": "Blog not found"
}

// No token provided
{
  "message": "No token, authorization denied"
}

// Invalid token
{
  "message": "Token is not valid"
}
```

---

## 2. Add Comment to Blog

### Endpoint
```
POST http://localhost:5000/api/blogs/:id/comments
```

### Authentication
Required - Add token to Headers:
```
Authorization: Bearer your_jwt_token_here
```

### Request Body
```json
{
  "text": "This is an amazing blog post! Very informative."
}
```

### Example Request
```bash
POST http://localhost:5000/api/blogs/676f40b2e1234567890abcde/comments

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

Body:
{
  "text": "Great article! I learned a lot about Bihar's culture."
}
```

### Success Response
```json
{
  "message": "Comment added successfully",
  "comment": {
    "_id": "676f50c3e1234567890abcdf",
    "user": {
      "_id": "676f30a1e1234567890abcdd",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "text": "Great article! I learned a lot about Bihar's culture.",
    "createdAt": "2024-12-27T10:30:00.000Z"
  },
  "commentCount": 3
}
```

### Validation Errors
```json
// Empty comment text
{
  "message": "Comment text is required"
}

// Blog not found
{
  "message": "Blog not found"
}
```

---

## 3. Delete Own Comment

### Endpoint
```
DELETE http://localhost:5000/api/blogs/:id/comments/:commentId
```

### Authentication
Required - Add token to Headers:
```
Authorization: Bearer your_jwt_token_here
```

### Important Notes
- Users can ONLY delete their own comments
- Cannot delete other users' comments
- Blog author can delete any comment (future enhancement)

### Example Request
```bash
DELETE http://localhost:5000/api/blogs/676f40b2e1234567890abcde/comments/676f50c3e1234567890abcdf

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Success Response
```json
{
  "message": "Comment deleted successfully",
  "commentCount": 2
}
```

### Error Responses
```json
// Comment not found
{
  "message": "Comment not found"
}

// Unauthorized (trying to delete someone else's comment)
{
  "message": "Unauthorized to delete this comment"
}

// Blog not found
{
  "message": "Blog not found"
}
```

---

## 4. Get Blog with Full Interactions

### Endpoint
```
GET http://localhost:5000/api/blogs/:id/interactions
```

### Authentication
Not required (Public endpoint)

### What It Returns
- Blog details
- Full list of users who liked (name, email)
- All comments with user details (name, email, timestamp)
- Like count (virtual field)
- Comment count (virtual field)

### Example Request
```bash
GET http://localhost:5000/api/blogs/676f40b2e1234567890abcde/interactions
```

### Success Response
```json
{
  "_id": "676f40b2e1234567890abcde",
  "title": "Exploring Bihar's Rich Cultural Heritage",
  "content": "Bihar is a land of ancient history...",
  "author": {
    "_id": "676f30a1e1234567890abcdd",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "tags": ["culture", "Bihar", "heritage"],
  "published": true,
  "likes": [
    {
      "_id": "676f30a1e1234567890abcdd",
      "name": "Alice Smith",
      "email": "alice@example.com"
    },
    {
      "_id": "676f30a2e1234567890abcde",
      "name": "Bob Johnson",
      "email": "bob@example.com"
    }
  ],
  "comments": [
    {
      "_id": "676f50c3e1234567890abcdf",
      "user": {
        "_id": "676f30a3e1234567890abcdf",
        "name": "Carol White",
        "email": "carol@example.com"
      },
      "text": "Very informative article!",
      "createdAt": "2024-12-27T10:15:00.000Z"
    },
    {
      "_id": "676f50c4e1234567890abce0",
      "user": {
        "_id": "676f30a1e1234567890abcdd",
        "name": "Alice Smith",
        "email": "alice@example.com"
      },
      "text": "I visited these places last year, beautiful!",
      "createdAt": "2024-12-27T10:30:00.000Z"
    }
  ],
  "likeCount": 2,
  "commentCount": 2,
  "createdAt": "2024-12-27T09:00:00.000Z",
  "updatedAt": "2024-12-27T10:30:00.000Z"
}
```

---

## 5. Delete Any Comment (Admin Only) ⭐ NEW

### Endpoint
```
DELETE http://localhost:5000/admin/blogs/:id/comments/:commentId
```

### Authentication
Required - Add **ADMIN** token to Headers:
```
Authorization: Bearer your_admin_jwt_token_here
```

### Important Notes
- **Admin Only** - Regular users cannot access this endpoint
- Admin can delete **ANY** comment on **ANY** blog
- No ownership check required
- Useful for content moderation and removing inappropriate comments

### Example Request
```bash
DELETE http://localhost:5000/admin/blogs/676f40b2e1234567890abcde/comments/676f50c3e1234567890abcdf

Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (ADMIN TOKEN)
```

### Success Response
```json
{
  "message": "Comment deleted successfully by admin",
  "commentCount": 2
}
```

### Error Responses
```json
// Not admin user
{
  "message": "Access denied. Admin only."
}

// Comment not found
{
  "message": "Comment not found"
}

// Blog not found
{
  "message": "Blog not found"
}

// No admin token
{
  "message": "No token, authorization denied"
}
```

### Admin Login
```bash
# First, login as admin to get admin token
POST http://localhost:5000/auth/admin-login
Body: {
  "email": "admin@example.com",
  "password": "admin123"
}

# Response will include admin token
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "676f30a1e1234567890abcdd",
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin"  ← Admin role
  }
}

# Use this admin token for deleting any comment
```

---

## Complete Testing Workflow

### Step 1: Register and Login
```bash
# Register new user
POST http://localhost:5000/api/auth/signup
Body: {
  "name": "Test User",
  "email": "testuser@example.com",
  "password": "Test@123"
}

# Login to get token
POST http://localhost:5000/api/auth/login
Body: {
  "email": "testuser@example.com",
  "password": "Test@123"
}

# Save the token from response
```

### Step 2: Create or Get a Blog
```bash
# Get all blogs to find a blog ID
GET http://localhost:5000/api/blogs

# OR create your own blog
POST http://localhost:5000/api/blogs
Headers: Authorization: Bearer your_token
Body: {
  "title": "Test Blog for Interactions",
  "content": "This is a test blog...",
  "tags": ["test"],
  "published": true
}
```

### Step 3: Test Like Feature
```bash
# Like the blog (first time)
POST http://localhost:5000/api/blogs/YOUR_BLOG_ID/like
Headers: Authorization: Bearer your_token

# Response: { "message": "Blog liked", "liked": true, "likeCount": 1 }

# Unlike the blog (second time)
POST http://localhost:5000/api/blogs/YOUR_BLOG_ID/like
Headers: Authorization: Bearer your_token

# Response: { "message": "Blog unliked", "liked": false, "likeCount": 0 }
```

### Step 4: Test Comment Feature
```bash
# Add first comment
POST http://localhost:5000/api/blogs/YOUR_BLOG_ID/comments
Headers: Authorization: Bearer your_token
Body: {
  "text": "This is my first comment!"
}

# Add second comment
POST http://localhost:5000/api/blogs/YOUR_BLOG_ID/comments
Headers: Authorization: Bearer your_token
Body: {
  "text": "This is my second comment!"
}

# Get the comment ID from response
```

### Step 5: Test Delete Comment
```bash
# Delete your own comment (should succeed)
DELETE http://localhost:5000/api/blogs/YOUR_BLOG_ID/comments/COMMENT_ID
Headers: Authorization: Bearer your_token

# Try to delete someone else's comment (should fail)
DELETE http://localhost:5000/api/blogs/OTHER_BLOG_ID/comments/OTHER_COMMENT_ID
Headers: Authorization: Bearer your_token
```

### Step 6: View Full Interactions
```bash
# Get blog with all likes and comments
GET http://localhost:5000/api/blogs/YOUR_BLOG_ID/interactions

# No authentication needed
```

---

## Data Model Reference

### Blog Schema with Interactions
```javascript
{
  title: String,
  content: String,
  author: ObjectId (ref: User),
  tags: [String],
  published: Boolean,
  
  // NEW FIELDS
  likes: [ObjectId (ref: User)],  // Array of user IDs who liked
  comments: [{
    user: ObjectId (ref: User),
    text: String,
    createdAt: Date
  }],
  
  // VIRTUAL FIELDS (auto-calculated)
  likeCount: Number,
  commentCount: Number,
  
  createdAt: Date,
  updatedAt: Date
}
```

---

## Common Use Cases

### 1. User Likes a Blog
```
POST /api/blogs/676f40b2e1234567890abcde/like
Authorization: Bearer token123
→ Like added, counter increases
```

### 2. User Changes Mind and Unlikes
```
POST /api/blogs/676f40b2e1234567890abcde/like
Authorization: Bearer token123
→ Like removed, counter decreases
```

### 3. Multiple Users Comment
```
User A: POST /api/blogs/ID/comments → "Great article!"
User B: POST /api/blogs/ID/comments → "Very helpful!"
User C: POST /api/blogs/ID/comments → "Thanks for sharing!"
```

### 4. User Deletes Their Comment
```
User A: DELETE /api/blogs/ID/comments/COMMENT_ID_1
→ Success (own comment)

User B: DELETE /api/blogs/ID/comments/COMMENT_ID_1
→ Error (not their comment)
```

### 5. Display Blog with Social Proof
```
GET /api/blogs/ID/interactions
→ Shows blog + all likes + all comments
Perfect for displaying on frontend
```

---

## Error Handling Guide

### Authentication Errors
- **401 Unauthorized**: Token missing or invalid
- **Solution**: Login again to get new token

### Authorization Errors
- **403 Forbidden**: Trying to delete someone else's comment
- **Solution**: Only delete your own comments

### Not Found Errors
- **404 Not Found**: Blog or comment doesn't exist
- **Solution**: Verify IDs are correct

### Validation Errors
- **400 Bad Request**: Empty comment text
- **Solution**: Provide valid comment text (min 1 character)

---

## Performance Notes

1. **Like Toggle**: Uses single operation, very fast
2. **Comments**: Embedded in blog document for faster reads
3. **Virtual Fields**: Calculated on-the-fly, no extra storage
4. **Population**: `/interactions` endpoint populates all references (slower but complete)
5. **Regular GET**: `/blogs/:id` endpoint doesn't populate likes/comments (faster)

---

## Future Enhancements (Coming Soon)

- [ ] Edit comment feature
- [ ] Reply to comments (nested comments)
- [ ] Blog author can delete any comment on their blog
- [ ] Like/unlike notifications
- [ ] Comment notifications
- [ ] Pagination for comments
- [ ] Sort comments by date
- [ ] Report inappropriate comments
- [ ] Emoji reactions (beyond just like)

---

## Quick Reference Summary

| Action | Endpoint | Method | Auth Required |
|--------|----------|--------|---------------|
| Like/Unlike Blog | `/blogs/:id/like` | POST | Yes (User) |
| Add Comment | `/blogs/:id/comments` | POST | Yes (User) |
| Delete Own Comment | `/blogs/:id/comments/:commentId` | DELETE | Yes (User) |
| Delete Any Comment (Admin) | `/admin/blogs/:id/comments/:commentId` | DELETE | Yes (Admin) ⭐ |
| Get Full Interactions | `/blogs/:id/interactions` | GET | No (Public) |

**Pro Tip**: Use the `/interactions` endpoint for displaying blog detail pages with social proof (likes + comments). Use the regular `/blogs/:id` endpoint for listing pages where you don't need full interaction data.

**Admin Note**: Admins can delete any comment using the admin endpoint for content moderation purposes.

---

## Support

If you encounter any issues:
1. Check your JWT token is valid
2. Verify blog and comment IDs exist
3. Ensure you're only deleting your own comments
4. Check network tab for detailed error messages

Happy coding! 🚀
