/**
 * Test script to verify population is working
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './src/blog/blog.model.js';
import User from './src/auth/user.model.js';

dotenv.config();

const testPopulation = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Get a blog with ID
    const blogId = '6982f593791dedeb8a26e3bf'; // Your blog ID

    console.log('\n🔍 Fetching blog WITHOUT population:');
    const blogWithoutPopulate = await Blog.findById(blogId);
    console.log('Comments (raw):', JSON.stringify(blogWithoutPopulate.comments, null, 2));

    console.log('\n🔍 Fetching blog WITH population:');
    const blogWithPopulate = await Blog.findById(blogId)
      .populate('author', 'name email')
      .populate('likes', 'name email')
      .populate('comments.user', 'name email');

    console.log('Comments (populated):', JSON.stringify(blogWithPopulate.comments, null, 2));

    console.log('\n🔍 Checking if users exist:');
    const userId = '6982f1345735803ec1e25cb2';
    const user = await User.findById(userId);
    console.log('User data:', user ? {
      id: user._id,
      name: user.name,
      email: user.email
    } : 'User not found!');

    await mongoose.connection.close();
    console.log('\n✅ Test completed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

testPopulation();
