# Blog Likes & Comments - System Architecture

## 📊 Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER REQUEST                             │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    AUTH MIDDLEWARE                               │
│  • Validates JWT Token                                           │
│  • Extracts User ID from Token                                   │
│  • Attaches user to req.user                                     │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BLOG CONTROLLER                               │
│  • likeBlog()                                                    │
│  • addComment()                                                  │
│  • deleteComment()                                               │
│  • getBlogWithInteractions()                                     │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BLOG SERVICE                                  │
│  • Business Logic Layer                                          │
│  • Database Operations                                           │
│  • Authorization Checks                                          │
│  • Data Validation                                               │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BLOG MODEL (MongoDB)                          │
│  • Schema Definition                                             │
│  • likes: [User ObjectIds]                                       │
│  • comments: [{user, text, createdAt}]                           │
│  • Virtual Fields: likeCount, commentCount                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Like/Unlike Flow

```
User clicks "Like" button
         │
         ▼
POST /blogs/:id/like
         │
         ▼
Auth Middleware validates token
         │
         ▼
Controller extracts blogId, userId
         │
         ▼
Service checks if user already liked
         │
    ┌────┴────┐
    │         │
    ▼         ▼
  Liked    Not Liked
    │         │
    ▼         ▼
 Remove     Add user
 user from   to likes
 likes[]     array
    │         │
    └────┬────┘
         │
         ▼
    Save blog
         │
         ▼
Return { liked: true/false, likeCount: N }
         │
         ▼
Update UI with new like status
```

---

## 💬 Add Comment Flow

```
User types comment and clicks "Post"
         │
         ▼
POST /blogs/:id/comments
Body: { text: "comment" }
         │
         ▼
Auth Middleware validates token
         │
         ▼
Controller validates comment text
         │
         ▼
Service creates comment object:
{
  user: userId,
  text: commentText,
  createdAt: new Date()
}
         │
         ▼
Push to blog.comments array
         │
         ▼
Save blog & populate user details
         │
         ▼
Return { comment: {...}, commentCount: N }
         │
         ▼
Display new comment in UI
```

---

## 🗑️ Delete Comment Flow

```
User clicks "Delete" on their comment
         │
         ▼
DELETE /blogs/:id/comments/:commentId
         │
         ▼
Auth Middleware validates token
         │
         ▼
Service finds comment in blog
         │
         ▼
Check: comment.user === req.user.id?
         │
    ┌────┴────┐
    │         │
    ▼         ▼
   Yes        No
    │         │
    ▼         ▼
 Remove    Return
 comment    403
    │      Error
    ▼
Save blog
    │
    ▼
Return { message: "deleted", commentCount: N }
    │
    ▼
Remove comment from UI
```

---

## 📱 Get Blog with Interactions Flow

```
User views blog detail page
         │
         ▼
GET /blogs/:id/interactions
         │
         ▼
No authentication required (Public)
         │
         ▼
Service fetches blog by ID
         │
         ▼
Populate references:
• blog.author → User (name, email)
• blog.likes → [User] (name, email)
• blog.comments.user → User (name, email)
         │
         ▼
Calculate virtual fields:
• likeCount = likes.length
• commentCount = comments.length
         │
         ▼
Return complete blog object
         │
         ▼
Display blog with:
• Like button (with count)
• Comment section (with all comments)
• User names/emails
```

---

## 🗄️ Database Schema Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                        BLOG COLLECTION                           │
├─────────────────────────────────────────────────────────────────┤
│  _id: ObjectId                                                   │
│  title: String                                                   │
│  content: String                                                 │
│  author: ObjectId ──────────┐                                    │
│  tags: [String]             │                                    │
│  published: Boolean         │                                    │
│                             │                                    │
│  ┌──────────────────────┐   │                                    │
│  │ LIKES (NEW)          │   │                                    │
│  │ Array of ObjectIds   │   │                                    │
│  ├──────────────────────┤   │                                    │
│  │ • 67a1...340         │───┼───┐                                │
│  │ • 67a1...341         │───┼───┼───┐                            │
│  │ • 67a1...342         │───┼───┼───┼───┐                        │
│  └──────────────────────┘   │   │   │   │                        │
│                             │   │   │   │                        │
│  ┌──────────────────────┐   │   │   │   │                        │
│  │ COMMENTS (NEW)       │   │   │   │   │                        │
│  │ Array of Subdocs     │   │   │   │   │                        │
│  ├──────────────────────┤   │   │   │   │                        │
│  │ Comment 1:           │   │   │   │   │                        │
│  │ • user: ObjectId ────┼───┼───┘   │   │                        │
│  │ • text: String       │   │       │   │                        │
│  │ • createdAt: Date    │   │       │   │                        │
│  ├──────────────────────┤   │       │   │                        │
│  │ Comment 2:           │   │       │   │                        │
│  │ • user: ObjectId ────┼───┼───────┘   │                        │
│  │ • text: String       │   │           │                        │
│  │ • createdAt: Date    │   │           │                        │
│  └──────────────────────┘   │           │                        │
│                             │           │                        │
│  createdAt: Date            │           │                        │
│  updatedAt: Date            │           │                        │
└─────────────────────────────┼───────────┼───────────────────────┘
                              │           │
                              ▼           ▼
┌─────────────────────────────────────────────────────────────────┐
│                        USER COLLECTION                           │
├─────────────────────────────────────────────────────────────────┤
│  _id: ObjectId (Referenced by blog.author, likes, comments)     │
│  name: String                                                    │
│  email: String                                                   │
│  password: String (hashed)                                       │
│  role: String (user/admin)                                       │
│  createdAt: Date                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔐 Authorization Matrix

| Action | Endpoint | User Auth | Admin | Notes |
|--------|----------|-----------|-------|-------|
| Like Blog | POST /blogs/:id/like | ✅ Required | ✅ Can like | Any authenticated user |
| Unlike Blog | POST /blogs/:id/like | ✅ Required | ✅ Can unlike | Same endpoint, toggle |
| Add Comment | POST /blogs/:id/comments | ✅ Required | ✅ Can comment | Any authenticated user |
| Delete Own Comment | DELETE /blogs/:id/comments/:id | ✅ Required | ✅ Can delete own | User must own comment |
| Delete Others' Comment | DELETE /blogs/:id/comments/:id | ❌ Forbidden | ⚠️ Future feature | Not yet implemented |
| View Interactions | GET /blogs/:id/interactions | ✅ Public | ✅ Public | No auth needed |

---

## 🎯 Frontend Integration Points

### 1. Blog List Page
```
GET /blogs
│
└─> Display blogs with basic info
    • Don't fetch likes/comments (not needed)
    • Use regular blog endpoint for faster load
```

### 2. Blog Detail Page
```
GET /blogs/:id/interactions
│
└─> Display full blog with social proof
    • Show like count and button
    • Show all comments
    • Check if current user liked (user ID in likes array)
```

### 3. Like Button Component
```javascript
// Pseudo-code
function LikeButton({ blogId, initialLiked, initialCount }) {
  const [liked, setLiked] = useState(initialLiked);
  const [count, setCount] = useState(initialCount);
  
  const handleLike = async () => {
    const response = await fetch(`/blogs/${blogId}/like`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    const data = await response.json();
    setLiked(data.liked);
    setCount(data.likeCount);
  };
  
  return <button onClick={handleLike}>
    {liked ? '❤️' : '🤍'} {count}
  </button>;
}
```

### 4. Comment Section Component
```javascript
// Pseudo-code
function CommentSection({ blogId, initialComments }) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  
  const handleAddComment = async () => {
    const response = await fetch(`/blogs/${blogId}/comments`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newComment })
    });
    
    const data = await response.json();
    setComments([...comments, data.comment]);
    setNewComment('');
  };
  
  const handleDeleteComment = async (commentId) => {
    await fetch(`/blogs/${blogId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    setComments(comments.filter(c => c._id !== commentId));
  };
  
  return (
    <div>
      <input value={newComment} onChange={e => setNewComment(e.target.value)} />
      <button onClick={handleAddComment}>Post</button>
      
      {comments.map(comment => (
        <div key={comment._id}>
          <p>{comment.user.name}: {comment.text}</p>
          {isOwnComment(comment) && (
            <button onClick={() => handleDeleteComment(comment._id)}>
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
```

---

## 📊 Performance Considerations

### Embedded vs Referenced Comments

**Current Implementation: Embedded (Subdocuments)**
```
Pros:
✅ Faster reads (no joins)
✅ Simpler queries
✅ Atomic updates
✅ Better for small-medium comment counts

Cons:
❌ Document size limit (16MB)
❌ Less flexible for complex features
❌ Comments always loaded with blog
```

**Alternative: Separate Collection (Not implemented)**
```
Pros:
✅ No document size limit
✅ More flexible
✅ Can query comments independently

Cons:
❌ Slower reads (requires join)
❌ More complex queries
❌ Additional collection to manage
```

### Virtual Fields vs Stored Counts

**Current Implementation: Virtual Fields**
```
likeCount: computed from likes.length
commentCount: computed from comments.length

Pros:
✅ Always accurate
✅ No data duplication
✅ Automatic updates

Cons:
❌ Computed on every read
❌ Can't sort by count efficiently
```

---

## 🚀 Scalability Notes

### Current Capacity
- **Likes per blog:** Unlimited (array can grow indefinitely)
- **Comments per blog:** ~1000-5000 comments (before hitting 16MB limit)
- **Concurrent operations:** Mongoose handles concurrency

### When to Refactor
Consider separating comments to own collection if:
- Comments per blog exceed 1000
- Need comment pagination
- Need complex comment features (replies, threading)
- Need to query comments independently

### Optimization Tips
1. Add indexes on blog.likes for faster lookups
2. Add indexes on blog.comments.user for faster filtering
3. Use projection to exclude likes/comments when not needed
4. Implement pagination for comments (future)

---

## 🧪 Testing Checklist

### Functional Tests
- [ ] Like a blog (first time)
- [ ] Unlike a blog (second time)
- [ ] Multiple users like same blog
- [ ] Add comment with valid text
- [ ] Add multiple comments
- [ ] Delete own comment
- [ ] Try to delete other's comment (should fail)
- [ ] Get blog with interactions

### Edge Cases
- [ ] Like non-existent blog
- [ ] Comment on non-existent blog
- [ ] Add empty comment (should fail)
- [ ] Delete non-existent comment
- [ ] Unauthenticated like attempt
- [ ] Unauthenticated comment attempt

### Authorization Tests
- [ ] User A likes blog → Success
- [ ] User B likes same blog → Success
- [ ] User A comments → Success
- [ ] User B tries to delete User A's comment → Fail
- [ ] User A deletes own comment → Success

---

**Documentation Version:** 1.0  
**Last Updated:** December 27, 2024  
**Status:** ✅ Complete and Ready for Integration
