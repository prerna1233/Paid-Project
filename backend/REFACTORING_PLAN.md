# 🔄 BACKEND REFACTORING PLAN

## 📊 CURRENT STATE ANALYSIS

### Existing Structure:
```
backend/src/
├── modules/          ← NEW modular structure (ACTIVE)
│   ├── auth/
│   ├── blog/
│   └── hotel/
├── core/             ← NEW shared resources
│   ├── config/
│   ├── middleware/
│   └── utils/
├── auth/             ← OLD (duplicate, unused)
├── blog/             ← OLD (duplicate, partially used by old admin)
├── hotel/            ← OLD (duplicate, unused)
├── admin/            ← OLD (duplicate, unused)
├── config/           ← OLD (duplicate, unused)
├── middleware/       ← OLD (duplicate, unused by old admin)
└── utils/            ← OLD (duplicate, unused by old auth)
```

### Currently Active Code:
- ✅ `/src/modules/auth/` - Used by app.js
- ✅ `/src/modules/blog/` - Used by app.js
- ✅ `/src/modules/hotel/` - Used by app.js
- ✅ `/src/core/config/db.js` - Used by server.js
- ✅ `/src/core/middleware/` - Used by modules
- ✅ `/src/core/utils/` - Used by modules

---

## 🎯 TARGET STRUCTURE

```
backend/src/
├── auth/
│   ├── user.model.js          ← FROM modules/auth/models/user.model.js
│   ├── auth.controller.js     ← FROM modules/auth/controllers/auth.controller.js
│   ├── auth.routes.js         ← FROM modules/auth/routes/auth.routes.js
│   └── auth.service.js        ← FROM modules/auth/services/auth.service.js
│
├── blog/
│   ├── blog.model.js          ← FROM modules/blog/models/blog.model.js
│   ├── blog.controller.js     ← FROM modules/blog/controllers/blog.controller.js
│   ├── blog.routes.js         ← FROM modules/blog/routes/blog.routes.js
│   └── blog.service.js        ← FROM modules/blog/services/blog.service.js
│
├── hotel/
│   ├── hotel.model.js         ← FROM modules/hotel/models/hotel.model.js
│   ├── hotel.controller.js    ← FROM modules/hotel/controllers/hotel.controller.js
│   ├── hotel.routes.js        ← FROM modules/hotel/routes/hotel.routes.js
│   └── hotel.service.js       ← FROM modules/hotel/services/hotel.service.js
│
├── admin/
│   ├── blog/
│   │   ├── admin.blog.controller.js  ← FROM modules/blog/controllers/admin.blog.controller.js
│   │   └── admin.blog.routes.js      ← FROM modules/blog/routes/admin.blog.routes.js
│   └── hotel/
│       ├── admin.hotel.controller.js ← FROM modules/hotel/controllers/admin.hotel.controller.js
│       └── admin.hotel.routes.js     ← FROM modules/hotel/routes/admin.hotel.routes.js
│
├── middleware/
│   ├── auth.middleware.js     ← FROM core/middleware/auth.middleware.js
│   ├── admin.middleware.js    ← FROM core/middleware/admin.middleware.js
│   └── error.middleware.js    ← FROM core/middleware/error.middleware.js
│
├── utils/
│   └── generateToken.js       ← FROM core/utils/generateToken.js
│
├── config/
│   └── db.js                  ← FROM core/config/db.js
│
└── app.js                     ← UPDATE imports
```

---

## 📋 REFACTORING STEPS

### PHASE 1: Move Core Files (config, utils, middleware)
1. ✅ Move `/src/core/config/db.js` → `/src/config/db.js`
2. ✅ Move `/src/core/utils/generateToken.js` → `/src/utils/generateToken.js`
3. ✅ Move `/src/core/middleware/*` → `/src/middleware/`

### PHASE 2: Flatten Auth Module
4. ✅ Move `/src/modules/auth/models/user.model.js` → `/src/auth/user.model.js`
5. ✅ Move `/src/modules/auth/controllers/auth.controller.js` → `/src/auth/auth.controller.js`
6. ✅ Move `/src/modules/auth/routes/auth.routes.js` → `/src/auth/auth.routes.js`
7. ✅ Move `/src/modules/auth/services/auth.service.js` → `/src/auth/auth.service.js`

### PHASE 3: Flatten Blog Module
8. ✅ Move `/src/modules/blog/models/blog.model.js` → `/src/blog/blog.model.js`
9. ✅ Move `/src/modules/blog/controllers/blog.controller.js` → `/src/blog/blog.controller.js`
10. ✅ Move `/src/modules/blog/routes/blog.routes.js` → `/src/blog/blog.routes.js`
11. ✅ Move `/src/modules/blog/services/blog.service.js` → `/src/blog/blog.service.js`
12. ✅ Move `/src/modules/blog/controllers/admin.blog.controller.js` → `/src/admin/blog/admin.blog.controller.js`
13. ✅ Move `/src/modules/blog/routes/admin.blog.routes.js` → `/src/admin/blog/admin.blog.routes.js`

### PHASE 4: Flatten Hotel Module
14. ✅ Move `/src/modules/hotel/models/hotel.model.js` → `/src/hotel/hotel.model.js`
15. ✅ Move `/src/modules/hotel/controllers/hotel.controller.js` → `/src/hotel/hotel.controller.js`
16. ✅ Move `/src/modules/hotel/routes/hotel.routes.js` → `/src/hotel/hotel.routes.js`
17. ✅ Move `/src/modules/hotel/services/hotel.service.js` → `/src/hotel/hotel.service.js`
18. ✅ Move `/src/modules/hotel/controllers/admin.hotel.controller.js` → `/src/admin/hotel/admin.hotel.controller.js`
19. ✅ Move `/src/modules/hotel/routes/admin.hotel.routes.js` → `/src/admin/hotel/admin.hotel.routes.js`

### PHASE 5: Update Imports in Moved Files
20. ✅ Update all import paths to match new flat structure
21. ✅ Update app.js to import from new locations
22. ✅ Update server.js to import from new config location

### PHASE 6: Cleanup
23. ✅ Delete empty `/src/modules/` folder
24. ✅ Delete empty `/src/core/` folder
25. ✅ Delete `/src/routes.js` (if not needed)

---

## 🚨 CRITICAL IMPORTS TO UPDATE

### In moved files, change:
- `../../core/config/` → `../config/`
- `../../core/utils/` → `../utils/`
- `../../core/middleware/` → `../middleware/`
- `../models/` → `./` (same folder)
- `../services/` → `./` (same folder)
- `../controllers/` → `./` (same folder)

### In app.js, change:
- `./modules/auth/routes/auth.routes.js` → `./auth/auth.routes.js`
- `./modules/blog/routes/blog.routes.js` → `./blog/blog.routes.js`
- `./modules/hotel/routes/hotel.routes.js` → `./hotel/hotel.routes.js`
- `./modules/blog/routes/admin.blog.routes.js` → `./admin/blog/admin.blog.routes.js`
- `./modules/hotel/routes/admin.hotel.routes.js` → `./admin/hotel/admin.hotel.routes.js`
- `./core/middleware/error.middleware.js` → `./middleware/error.middleware.js`

### In server.js, change:
- `./src/core/config/db.js` → `./src/config/db.js`

---

## ✅ SAFETY CHECKS

Before each move:
- ✅ Verify file exists
- ✅ Check what imports this file
- ✅ Check what this file imports
- ✅ Update all import paths

After refactoring:
- ✅ Verify app starts without errors
- ✅ Test auth endpoints
- ✅ Test blog endpoints
- ✅ Test hotel endpoints
- ✅ Test admin endpoints

---

**Ready to execute refactoring!** 🚀
