import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog data - 9 posts for 3 rows × 3 columns
  const blogPosts = [
    {
      id: 1,
      title: "Hidden Gems of Southeast Asia",
      description: "Discover breathtaking destinations off the beaten path that will transform your perspective on travel.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      rating: 4.0,
      slug: "hidden-gems-southeast-asia"
    },
    {
      id: 2,
      title: "European Food Markets: A Culinary Journey",
      description: "From Barcelona's La Boqueria to Istanbul's Grand Bazaar, explore the world's most vibrant food scenes.",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      rating: 4.8,
      slug: "european-food-markets"
    },
    {
      id: 3,
      title: "Solo Travel in Japan: Complete Guide",
      description: "Navigate the Land of the Rising Sun with confidence. Essential tips for first-time solo travelers.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      rating: 4.9,
      slug: "solo-travel-japan"
    },
    {
      id: 4,
      title: "Mountain Adventures in the Alps",
      description: "Experience the breathtaking beauty of Alpine peaks and discover hiking trails that will leave you speechless.",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Dec 08, 2024",
      readTime: "10 min read",
      rating: 4.7,
      slug: "mountain-adventures-alps"
    },
    {
      id: 5,
      title: "Street Art Capitals of the World",
      description: "Explore vibrant street art scenes from Berlin to Buenos Aires and discover the stories behind the walls.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Dec 05, 2024",
      readTime: "7 min read",
      rating: 4.5,
      slug: "street-art-capitals"
    },
    {
      id: 6,
      title: "Island Hopping in the Mediterranean",
      description: "Sail through crystal-clear waters and discover hidden coves in the most beautiful Mediterranean islands.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Dec 03, 2024",
      readTime: "9 min read",
      rating: 4.6,
      slug: "mediterranean-island-hopping"
    },
    {
      id: 7,
      title: "Northern Lights: A Photographer's Dream",
      description: "Capture the magic of Aurora Borealis with expert tips and the best locations for stunning photographs.",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Nov 28, 2024",
      readTime: "11 min read",
      rating: 4.9,
      slug: "northern-lights-photography"
    },
    {
      id: 8,
      title: "Desert Safari Adventures",
      description: "Experience the thrill of desert exploration from the Sahara to the Arabian Peninsula's golden dunes.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Nov 25, 2024",
      readTime: "8 min read",
      rating: 4.4,
      slug: "desert-safari-adventures"
    },
    {
      id: 9,
      title: "Urban Exploration: Modern Architecture",
      description: "Discover architectural marvels in world's most innovative cities and the stories behind their design.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "Nov 22, 2024",
      readTime: "6 min read",
      rating: 4.3,
      slug: "urban-exploration-architecture"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Adventures</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our journey as we explore the most beautiful places on Earth
            and share insider tips for your next adventure.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center shadow-sm">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="text-sm font-medium ml-1">{post.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="mt-4">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
