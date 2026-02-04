# ADMIN TESTING - ALL LINKS WITH DATA

## 🔐 1. ADMIN LOGIN

**URL:**
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

**➡️ SAVE THE TOKEN FROM RESPONSE!**

---

## 📝 2. GET ALL BLOGS (ADMIN VIEW)

**URL:**
```
GET http://localhost:5000/admin/blogs
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

---

## 📝 3. UPDATE ANY BLOG

**URL:**
```
PUT http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "title": "Bihar Tourism - Admin Updated",
  "content": "This blog post has been updated by admin. Bihar is a state in eastern India, home to ancient universities like Nalanda and sacred sites like Bodh Gaya.",
  "published": true
}
```

**Alternative Body (Unpublish):**
```json
{
  "title": "Draft Post",
  "published": false
}
```

---

## 💬 4. DELETE ANY COMMENT

**URL:**
```
DELETE http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf/comments/6982f5d9791dedeb8a26e3c3
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

**Other Comment IDs to Test:**
```
DELETE http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf/comments/6982f67f4c4db287ba92e849

DELETE http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf/comments/6982f68b4c4db287ba92e852

DELETE http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf/comments/6982f7413e709cd36f29772d
```

---

## 🏨 5. GET ALL HOTELS

**URL:**
```
GET http://localhost:5000/admin/hotels
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

---

## 🏨 6. CREATE HOTEL - LUXURY

**URL:**
```
POST http://localhost:5000/admin/hotels
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Royal Palace Hotel Patna",
  "location": "Fraser Road, Patna, Bihar 800001",
  "description": "Experience unparalleled luxury at Royal Palace Hotel, Patna's premier 5-star destination. Located in the heart of the city, we offer world-class amenities including an award-winning spa, rooftop infinity pool with panoramic city views, and three specialty restaurants serving international cuisine. Perfect for business executives and leisure travelers seeking the finest accommodation in Bihar.",
  "price": 7500,
  "rating": 4.8,
  "facilities": ["Free WiFi", "Infinity Swimming Pool", "Spa & Wellness Center", "Multi-cuisine Restaurant", "Rooftop Bar", "Fitness Center", "24/7 Room Service", "Valet Parking", "Business Center", "Conference Rooms", "Airport Shuttle", "Concierge Service"],
  "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
}
```

**➡️ SAVE THE HOTEL ID FROM RESPONSE!**

---

## 🏨 7. CREATE HOTEL - BUDGET

**URL:**
```
POST http://localhost:5000/admin/hotels
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Bihar Budget Inn",
  "location": "Temple Street, Bodh Gaya, Bihar 824231",
  "description": "Affordable and comfortable accommodation for pilgrims and budget travelers visiting the sacred Mahabodhi Temple. Clean, air-conditioned rooms with attached bathrooms, friendly staff, and complimentary breakfast. Walking distance to all major Buddhist sites and temples. Perfect for spiritual seekers and backpackers.",
  "price": 1500,
  "rating": 3.8,
  "facilities": ["Free WiFi", "Restaurant", "Free Parking", "24/7 Front Desk", "Room Service", "Laundry", "Travel Desk"],
  "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"
}
```

---

## 🏨 8. CREATE HOTEL - BUSINESS

**URL:**
```
POST http://localhost:5000/admin/hotels
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Bihar Business Hub Hotel",
  "location": "Airport Road, Gaya, Bihar 823001",
  "description": "Premier business hotel strategically located near Gaya Airport and major business districts. Designed for corporate travelers with state-of-the-art conference facilities, high-speed fiber internet, executive lounge, and 24-hour business center. Spacious rooms with work desks, complimentary breakfast buffet, and dedicated corporate check-in.",
  "price": 4500,
  "rating": 4.3,
  "facilities": ["Free High-speed WiFi", "Conference Rooms", "Business Center", "Executive Lounge", "Restaurant & Bar", "Fitness Center", "Airport Transfer", "Free Parking", "Laundry Service", "Meeting Rooms", "Projector & AV Equipment"],
  "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800"
}
```

---

## 🏨 9. CREATE HOTEL - HERITAGE

**URL:**
```
POST http://localhost:5000/admin/hotels
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Nalanda Heritage Resort",
  "location": "University Ruins Road, Nalanda, Bihar 803111",
  "description": "Step back in time at Nalanda Heritage Resort, beautifully restored property showcasing traditional Bihar architecture. Located minutes from the ancient Nalanda University ruins (UNESCO World Heritage Site). Enjoy cultural programs, guided heritage walks, traditional Bihari cuisine, and rooms decorated with local art. An immersive experience in Bihar's glorious past.",
  "price": 3500,
  "rating": 4.5,
  "facilities": ["Free WiFi", "Heritage Restaurant", "Cultural Evening Programs", "Guided Tours", "Library", "Garden & Courtyard", "Traditional Decor", "Parking", "Travel Assistance"],
  "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800"
}
```

---

## 🏨 10. CREATE HOTEL - RESORT

**URL:**
```
POST http://localhost:5000/admin/hotels
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Ganges View Resort & Spa",
  "location": "River Bank, Munger, Bihar 811201",
  "description": "Luxury riverside resort offering breathtaking views of the sacred Ganges River. Perfect getaway for relaxation and rejuvenation with daily yoga and meditation sessions, ayurvedic spa treatments, nature trails, and water sports. Spacious cottages with private balconies, organic farm-to-table restaurant, and infinity pool overlooking the river. Escape the city chaos in nature's lap.",
  "price": 6500,
  "rating": 4.7,
  "facilities": ["Free WiFi", "Riverside Swimming Pool", "Yoga & Meditation Center", "Ayurvedic Spa", "Organic Restaurant", "Water Sports", "Nature Trails", "Bonfire Area", "Kids Play Area", "Cycling", "Parking", "Airport Pickup"],
  "image": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800"
}
```

---

## 🏨 11. CREATE HOTEL - BOUTIQUE

**URL:**
```
POST http://localhost:5000/admin/hotels
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "name": "The Bihar Boutique",
  "location": "Exhibition Road, Patna, Bihar 800001",
  "description": "Intimate boutique hotel with just 20 elegantly designed rooms, each uniquely decorated with local Madhubani art. Personalized service, rooftop terrace with city views, artisan coffee shop, and curated library of Bihar literature. Perfect for travelers seeking authentic experiences and artistic ambiance. Located in the cultural heart of Patna.",
  "price": 5500,
  "rating": 4.6,
  "facilities": ["Free WiFi", "Rooftop Terrace", "Artisan Coffee Shop", "Art Gallery", "Library", "Personalized Service", "Restaurant", "Parking", "Room Service"],
  "image": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800"
}
```

---

## ✏️ 12. UPDATE HOTEL (FULL UPDATE)

**URL:**
```
PUT http://localhost:5000/admin/hotels/YOUR_HOTEL_ID_HERE
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Royal Palace Hotel & Spa - Premium",
  "location": "Fraser Road, Patna, Bihar 800001",
  "description": "Newly renovated ultra-luxury hotel with enhanced facilities. Now featuring Michelin-recommended restaurant, expanded spa with hydrotherapy, and exclusive presidential suite. Bihar's finest 5-star property.",
  "price": 9000,
  "rating": 5.0,
  "facilities": ["Free WiFi", "Infinity Pool", "Award-winning Spa", "Michelin Restaurant", "Sky Bar", "Fitness Center", "Presidential Suite", "Helipad", "Butler Service", "Valet Parking", "24/7 Concierge"],
  "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
}
```

---

## ✏️ 13. UPDATE HOTEL (PRICE & RATING ONLY)

**URL:**
```
PUT http://localhost:5000/admin/hotels/YOUR_HOTEL_ID_HERE
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "price": 8500,
  "rating": 4.9
}
```

---

## ✏️ 14. UPDATE HOTEL (NAME ONLY)

**URL:**
```
PUT http://localhost:5000/admin/hotels/YOUR_HOTEL_ID_HERE
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
Content-Type: application/json
```

**Body:**
```json
{
  "name": "Grand Royal Palace Hotel"
}
```

---

## 🗑️ 15. DELETE HOTEL

**URL:**
```
DELETE http://localhost:5000/admin/hotels/YOUR_HOTEL_ID_HERE
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

---

## 🗑️ 16. DELETE BLOG (TEST LAST!)

**URL:**
```
DELETE http://localhost:5000/admin/blogs/6982f593791dedeb8a26e3bf
```

**Headers:**
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

⚠️ **WARNING: This permanently deletes the blog!**

---

## 📊 TESTING ORDER

1. ✅ **Admin Login** → Get token
2. ✅ **Get All Blogs** → View all blogs
3. ✅ **Update Blog** → Modify blog
4. ✅ **Delete Comment** → Remove comment
5. ✅ **Get All Hotels** → View hotels
6. ✅ **Create Luxury Hotel** → Add hotel
7. ✅ **Create Budget Hotel** → Add hotel
8. ✅ **Create Business Hotel** → Add hotel
9. ✅ **Create Heritage Hotel** → Add hotel
10. ✅ **Create Resort** → Add hotel
11. ✅ **Create Boutique Hotel** → Add hotel
12. ✅ **Get All Hotels Again** → See new hotels
13. ✅ **Update Hotel** → Modify hotel
14. ✅ **Delete Hotel** → Remove hotel
15. ✅ **Delete Blog** → Remove blog (last!)

---

## 🎯 ADMIN CREDENTIALS

```
Email: admin@kishanganj.com
Password: admin123
```

---

## 🚀 START TESTING NOW!

1. Open Postman
2. Copy admin login URL and body
3. Send request → Get token
4. Copy token
5. Add token to all other requests
6. Test each endpoint!

**Server: http://localhost:5000**

**Happy Testing!** 🎉
