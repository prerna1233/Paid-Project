/**
 * Script to create an admin user in MongoDB
 * Run: node src/admin/scripts/createAdmin.js
 */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from backend root (3 levels up: scripts -> admin -> src -> backend)
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

const ADMIN = {
  name: 'Admin User',
  email: 'admin@kishanganj.com',
  password: 'admin123',
  role: 'admin',
  isAdmin: true
};

async function createAdmin() {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/kishanganj-tourism';
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(mongoUri);
    console.log('✅ Connected to MongoDB');

    const existing = await User.findOne({ email: ADMIN.email });
    
    if (existing) {
      console.log('⚠️  Admin already exists!');
      const hashedPassword = await bcrypt.hash(ADMIN.password, 10);
      existing.password = hashedPassword;
      existing.role = 'admin';
      existing.isAdmin = true;
      await existing.save();
      console.log('✅ Admin password updated!');
    } else {
      const hashedPassword = await bcrypt.hash(ADMIN.password, 10);
      await User.create({
        name: ADMIN.name,
        email: ADMIN.email,
        password: hashedPassword,
        role: 'admin',
        isAdmin: true
      });
      console.log('\n✅ Admin user created!\n');
    }

    console.log('═══════════════════════════════════');
    console.log('📝 Admin Credentials:');
    console.log('═══════════════════════════════════');
    console.log('Email:', ADMIN.email);
    console.log('Password:', ADMIN.password);
    console.log('═══════════════════════════════════\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createAdmin();
