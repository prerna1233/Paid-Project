# Quick Admin Testing Guide

## 🎯 Your Existing Data:
- **Blog ID:** `6982f593791dedeb8a26e3bf`
- **Comment ID:** `6982f5d9791dedeb8a26e3c3`
- **User ID:** `6982f1345735803ec1e25cb2`

---

## Step 1: Login as Admin

```
POST http://localhost:5000/auth/admin-login

Body (JSON):
{
  "email": "your_admin_email@example.com",
  "password": "your_admin_password"
}
```

**Copy the token from response!**

---

## Step 2: Set Authorization in Postman

For ALL requests below, add this header:
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

---

## 🧪 Admin Blog Tests

### Test 1: Get All Blogs (Including Unpublished)
```
GET http://localhost:5000/admin/blogs
```
✅ Admin sees ALL blogs (published + unpublished)

---

### Test 2: Update ANY User's Blog
```
PUT http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf

Body (JSON):
{
  "title": "Admin Updated This",
  "content": "Modified by admin",
  "published": true
}
```
✅ Admin can edit anyone's blog (not just their own)

---

### Test 3: Delete ANY Comment
```
DELETE http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf/comments/6982f5d9791dedeb8a26e3c3
```
✅ Admin can delete any comment (even if they didn't write it)

---

### Test 4: Delete ANY Blog
```
DELETE http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf
```
✅ Admin can delete anyone's blog

⚠️ **Warning:** This will delete the blog permanently!

---

## 🏨 Admin Hotel Tests

### Test 5: Get All Hotels
```
GET http://localhost:5000/admin/hotels
```
✅ Admin can view all hotels

---

### Test 6: Create Hotel
```
POST http://localhost:5000/admin/hotels

Body (JSON):
{
  "name": "Test Hotel Bihar",
  "location": "Patna, Bihar",
  "description": "Beautiful hotel in Patna",
  "price": 5000,
  "rating": 4.5,
  "facilities": ["WiFi", "Pool", "Restaurant"],
  "image": "https://example.com/hotel.jpg"
}
```
✅ Only admin can create hotels

---

### Test 7: Update Hotel
```
PUT http://localhost:5000/admin/hotels/YOUR_HOTEL_ID

Body (JSON):
{
  "name": "Updated Hotel Name",
  "price": 6000,
  "rating": 5.0
}
```
✅ Only admin can update hotels

---

### Test 8: Delete Hotel
```
DELETE http://localhost:5000/admin/hotels/YOUR_HOTEL_ID
```
✅ Only admin can delete hotels

---

## 📋 Testing Order:

1. ✅ **Admin Login** → Get token
2. ✅ **Get All Blogs** → See all blogs
3. ✅ **Update Blog** → Edit any user's blog
4. ✅ **Delete Comment** → Remove any comment
5. ✅ **Get All Hotels** → View hotels
6. ✅ **Create Hotel** → Add new hotel
7. ✅ **Update Hotel** → Modify hotel
8. ✅ **Delete Hotel** → Remove hotel
9. ✅ **Delete Blog** → Remove blog (test last!)

---

## 🎯 Admin Powers Summary:

| What Admin Can Do | Endpoint |
|-------------------|----------|
| View ALL blogs | GET /admin/blogs |
| Update ANY blog | PUT /admin/blogs/:id |
| Delete ANY comment | DELETE /admin/blogs/:id/comments/:commentId |
| Delete ANY blog | DELETE /admin/blogs/:id |
| View all hotels | GET /admin/hotels |
| Create hotel | POST /admin/hotels |
| Update hotel | PUT /admin/hotels/:id |
| Delete hotel | DELETE /admin/hotels/:id |

---

## ⚠️ Important:
- All admin routes require: `Authorization: Bearer YOUR_ADMIN_TOKEN`
- Without token: `401 Unauthorized`
- With regular user token: `403 Forbidden - Admin access required`

---

## 🚀 Start Testing:
1. Open Postman
2. Login as admin (get token)
3. Copy token and add to Authorization header
4. Test each endpoint above

**That's it!** Test these 8 endpoints to verify all admin authorities! 🎉
