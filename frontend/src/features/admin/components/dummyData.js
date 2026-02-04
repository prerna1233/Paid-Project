// Dummy data for testing Admin Panel

export const dummyHotels = [
  {
    _id: '1',
    name: 'Green Valley Resort',
    description: 'A beautiful resort nestled in the tea gardens of Kishanganj with stunning views and modern amenities.',
    location: 'Kishanganj, Bihar',
    price: 2500,
    rating: 4.5,
    facilities: ['WiFi', 'Parking', 'Restaurant', 'Pool', 'Spa'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    _id: '2',
    name: 'Tea Garden Lodge',
    description: 'Experience the serenity of tea gardens with comfortable rooms and authentic local cuisine.',
    location: 'Near Mahananda Wildlife Sanctuary',
    price: 1800,
    rating: 4.2,
    facilities: ['WiFi', 'Restaurant', 'Garden View', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    _id: '3',
    name: 'Heritage Inn',
    description: 'A charming heritage property showcasing the rich culture and traditions of Kishanganj.',
    location: 'Kishanganj City Center',
    price: 1500,
    rating: 4.0,
    facilities: ['WiFi', 'Parking', 'Restaurant', 'Cultural Programs'],
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  }
];

export const dummyBlogs = [
  {
    _id: '1',
    title: 'Exploring Mahananda Wildlife Sanctuary',
    content: 'The Mahananda Wildlife Sanctuary is a hidden gem in Kishanganj, offering breathtaking views of diverse flora and fauna. During my recent visit, I was amazed by the natural beauty and the variety of birds that call this sanctuary home. The lush green forests and the peaceful environment make it a perfect getaway for nature lovers. I highly recommend visiting during the early morning hours when the wildlife is most active.',
    author: {
      _id: 'author1',
      name: 'Rahul Kumar',
      email: 'rahul@example.com'
    },
    likes: ['user1', 'user2', 'user3'],
    comments: [
      {
        user: 'user1',
        text: 'Great post! Planning to visit soon.',
        createdAt: new Date('2024-01-16')
      }
    ],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    _id: '2',
    title: 'The Tea Gardens of Kishanganj',
    content: 'Kishanganj is famous for its sprawling tea gardens that stretch as far as the eye can see. Walking through these tea estates is like stepping into a painting. The fresh aroma of tea leaves, the misty mornings, and the hardworking tea pluckers create a mesmerizing atmosphere. I learned about the entire tea-making process from plantation to cup, and it gave me a newfound appreciation for every sip of tea I enjoy.',
    author: {
      _id: 'author2',
      name: 'Priya Sharma',
      email: 'priya@example.com'
    },
    likes: ['user1', 'user4'],
    comments: [],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20')
  },
  {
    _id: '3',
    title: 'Traditional Cuisine of Kishanganj',
    content: 'The food culture in Kishanganj is deeply rooted in tradition and simplicity. From the famous Litti Chokha cooked on clay stoves to the aromatic fish curry prepared with local spices, every dish tells a story. During my culinary journey, I had the opportunity to learn traditional cooking methods from local families. The warmth of their hospitality and the authentic flavors of their food left a lasting impression on me.',
    author: {
      _id: 'author1',
      name: 'Rahul Kumar',
      email: 'rahul@example.com'
    },
    likes: ['user2', 'user3', 'user4', 'user5'],
    comments: [
      {
        user: 'user2',
        text: 'This makes me hungry!',
        createdAt: new Date('2024-02-03')
      },
      {
        user: 'user3',
        text: 'Need to try Litti Chokha!',
        createdAt: new Date('2024-02-04')
      }
    ],
    createdAt: new Date('2024-02-02'),
    updatedAt: new Date('2024-02-02')
  }
];
