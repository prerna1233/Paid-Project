# 🔧 Admin Scripts

This folder contains utility scripts for admin management.

---

## 📋 Available Scripts

### `createAdmin.js`

**Purpose:** Creates or updates the admin user in MongoDB database.

**Usage:**
```bash
# From backend root directory
cd /home/sama/Documents/Paid-Project/backend
node src/admin/scripts/createAdmin.js
```

**What it does:**
1. Connects to MongoDB
2. Checks if admin user exists (email: `admin@kishanganj.com`)
3. If exists: Updates password
4. If not exists: Creates new admin user
5. Sets admin privileges (`role: 'admin'`, `isAdmin: true`)

**Default Credentials:**
- **Email:** `admin@kishanganj.com`
- **Password:** `admin123`

---

## ⚠️ Security Notes

1. **Change password after first login** - Use the default password only for initial setup
2. **Don't commit passwords** - Never push real admin passwords to GitHub
3. **Production use** - Create a new admin with a strong password in production

---

## 🔄 When to Run These Scripts

- **First time setup** - Create the initial admin account
- **Database reset** - Recreate admin after clearing database
- **Password reset** - Reset admin password if forgotten
- **New environment** - Set up admin in staging/production

---

## 📝 Output Example

```
🔌 Connecting to MongoDB...
✅ Connected to MongoDB
✅ Admin user created!

═══════════════════════════════════
📝 Admin Credentials:
═══════════════════════════════════
Email: admin@kishanganj.com
Password: admin123
═══════════════════════════════════
```

---

## 🚀 After Running

You can now log in as admin using:

**Endpoint:** `POST http://localhost:5000/auth/admin-login`

**Body:**
```json
{
  "email": "admin@kishanganj.com",
  "password": "admin123"
}
```

You'll receive a JWT token to access admin routes like:
- `GET /admin/blogs` - Manage all blogs
- `POST /admin/hotels` - Add hotels
- `PUT /admin/hotels/:id` - Edit hotels
- `DELETE /admin/blogs/:id` - Delete blogs

---

**Last updated:** January 30, 2026
