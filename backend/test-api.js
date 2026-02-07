/**
 * Test API endpoint directly
 */

import axios from 'axios';

const testAPI = async () => {
  try {
    console.log('🔍 Testing GET /blogs/:id endpoint\n');
    
    const response = await axios.get('http://localhost:5000/blogs/6982f593791dedeb8a26e3bf');
    
    console.log('✅ Response received!\n');
    console.log('Blog Title:', response.data.title);
    console.log('\nComments:');
    response.data.comments.forEach((comment, index) => {
      console.log(`\nComment ${index + 1}:`);
      console.log('  User:', comment.user);
      console.log('  Text:', comment.text);
      console.log('  Type of user field:', typeof comment.user);
      if (typeof comment.user === 'object' && comment.user !== null) {
        console.log('  ✅ User is populated with name:', comment.user.name);
        console.log('  ✅ User email:', comment.user.email);
      } else {
        console.log('  ❌ User is NOT populated (just an ID)');
      }
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
};

testAPI();
