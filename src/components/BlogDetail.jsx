import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { slug } = useParams();

  // Sample blog data (same as in Blog component - in a real app, this would come from an API or context)
  const blogPosts = [
    {
      id: 1,
      title: "Hidden Gems of Southeast Asia",
      description: "Discover breathtaking destinations off the beaten path that will transform your perspective on travel.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      rating: 4.0,
      slug: "hidden-gems-southeast-asia",
      author: "Sarah Johnson",
      content: `
        <p>Southeast Asia has always been a magnet for travelers seeking adventure, culture, and natural beauty. While popular destinations like Bangkok, Bali, and Singapore draw millions of visitors annually, there's a whole world of hidden gems waiting to be discovered by those willing to venture off the beaten path.</p>
        
        <h2>The Untouched Islands of Raja Ampat</h2>
        <p>Located in Indonesia's West Papua province, Raja Ampat is often called the "Crown Jewel of Marine Biodiversity." This remote archipelago consists of four main islands surrounded by smaller islets, offering some of the world's most pristine diving and snorkeling experiences.</p>
        
        <p>The waters here are home to over 1,500 species of fish and 75% of all known coral species. What makes Raja Ampat truly special is its commitment to conservation – local communities have established marine protected areas that ensure these underwater treasures remain unspoiled for future generations.</p>
        
        <h2>The Ancient Temples of Bagan</h2>
        <p>While Angkor Wat gets most of the attention, Myanmar's Bagan offers an equally spectacular temple experience with far fewer crowds. This ancient city is home to over 2,000 Buddhist temples and pagodas scattered across a vast plain.</p>
        
        <p>The best way to experience Bagan is from a hot air balloon at sunrise, watching the mist rise from the Irrawaddy River as the golden temples emerge from the morning haze. It's a sight that will stay with you forever.</p>
        
        <h2>The Floating Markets of Can Tho</h2>
        <p>Vietnam's Mekong Delta is famous for its floating markets, but most tourists only visit the commercialized ones near Ho Chi Minh City. For a more authentic experience, head to Can Tho's Cai Rang floating market, where local farmers have been trading fruits and vegetables from their boats for generations.</p>
        
        <p>Arrive early in the morning to see the market at its most vibrant, with boats laden with pineapples, dragon fruit, and other tropical produce creating a colorful mosaic on the water.</p>
      `
    },
    {
      id: 2,
      title: "European Food Markets: A Culinary Journey",
      description: "From Barcelona's La Boqueria to Istanbul's Grand Bazaar, explore the world's most vibrant food scenes.",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      rating: 4.8,
      slug: "european-food-markets",
      author: "Marco Rodriguez",
      content: `
        <p>Europe's food markets are more than just places to shop – they're cultural institutions that have been feeding communities for centuries. Each market tells a story of local traditions, seasonal ingredients, and culinary heritage passed down through generations.</p>
        
        <h2>La Boqueria, Barcelona</h2>
        <p>Perhaps the most famous food market in Europe, La Boqueria has been serving Barcelona since the 13th century. Located just off Las Ramblas, this vibrant market is a feast for all the senses.</p>
        
        <p>Don't miss the fresh fruit juices, jamón ibérico, and the incredible variety of seafood. The market's colorful displays of fruits and vegetables are Instagram-worthy, but the real magic happens when you taste the incredible flavors.</p>
        
        <h2>Borough Market, London</h2>
        <p>London's Borough Market is a food lover's paradise, showcasing the best of British and international cuisine. Dating back to the 13th century, it's one of the oldest food markets in London.</p>
        
        <p>Sample artisanal cheeses, freshly baked bread, and gourmet street food from around the world. The market's Victorian architecture provides a stunning backdrop for your culinary adventure.</p>
      `
    },
    {
      id: 3,
      title: "Solo Travel in Japan: Complete Guide",
      description: "Navigate the Land of the Rising Sun with confidence. Essential tips for first-time solo travelers.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      rating: 4.9,
      slug: "solo-travel-japan",
      author: "Yuki Tanaka",
      content: `
        <p>Japan is one of the world's best destinations for solo travelers. The country's safety, efficiency, and unique culture make it an ideal place to explore on your own. Here's everything you need to know for your first solo adventure in the Land of the Rising Sun.</p>
        
        <h2>Getting Around: The JR Pass</h2>
        <p>The Japan Rail Pass is your ticket to exploring the country efficiently and affordably. This pass gives you unlimited access to most JR trains, including the famous shinkansen (bullet trains).</p>
        
        <p>Purchase your JR Pass before arriving in Japan for the best rates. The 7-day pass is perfect for first-time visitors planning to visit Tokyo, Kyoto, and Osaka.</p>
        
        <h2>Where to Stay: Capsule Hotels and Ryokans</h2>
        <p>Japan offers unique accommodation options perfect for solo travelers. Capsule hotels provide affordable, safe, and clean lodging in city centers, while traditional ryokans offer an authentic Japanese experience with tatami mats, futon beds, and communal baths.</p>
        
        <h2>Cultural Etiquette</h2>
        <p>Understanding Japanese etiquette will enhance your travel experience. Always bow when greeting, remove shoes when entering homes or certain restaurants, and avoid eating while walking. These small gestures show respect for local customs.</p>
      `
    },
    {
      id: 4,
      title: "Mountain Adventures in the Alps",
      description: "Experience the breathtaking beauty of Alpine peaks and discover hiking trails that will leave you speechless.",
      image: "https://images.unsplash.com/photo-1464822759844-d150baec0494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Dec 08, 2024",
      readTime: "10 min read",
      rating: 4.7,
      slug: "mountain-adventures-alps",
      author: "Elena Schmidt",
      content: `
        <p>The Alps stretch across eight countries and offer some of the world's most spectacular mountain scenery. From the iconic Matterhorn to the pristine lakes of Austria, this mountain range provides endless opportunities for adventure seekers and nature lovers alike.</p>
        
        <h2>The Classic Alpine Hiking Routes</h2>
        <p>The Tour du Mont Blanc is perhaps the most famous long-distance hiking trail in the Alps, circling the Mont Blanc massif through France, Italy, and Switzerland. This 170-kilometer trek takes you through diverse landscapes, from glacial valleys to high alpine meadows.</p>
        
        <p>For those seeking a shorter but equally rewarding experience, the Haute Route from Chamonix to Zermatt offers stunning glacier views and challenging terrain that will test even experienced hikers.</p>
        
        <h2>Alpine Lakes and Villages</h2>
        <p>The Alps are home to countless pristine lakes, each more beautiful than the last. Lake Bled in Slovenia, with its fairy-tale island church, and Lake Annecy in France, known as the "Pearl of the French Alps," are must-visit destinations.</p>
        
        <p>Don't miss the charming mountain villages like Hallstatt in Austria or Gimmelwald in Switzerland, where traditional Alpine culture is still very much alive.</p>
        
        <h2>Best Time to Visit</h2>
        <p>Summer (June to September) is ideal for hiking and outdoor activities, while winter transforms the Alps into a wonderland perfect for skiing and snowboarding. Spring and autumn offer fewer crowds and stunning seasonal colors.</p>
      `
    },
    {
      id: 5,
      title: "Street Art Capitals of the World",
      description: "Explore vibrant street art scenes from Berlin to Buenos Aires and discover the stories behind the walls.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Dec 05, 2024",
      readTime: "7 min read",
      rating: 4.5,
      slug: "street-art-capitals",
      author: "Diego Martinez",
      content: `
        <p>Street art has evolved from underground rebellion to mainstream cultural expression, transforming urban landscapes around the world. These cities have embraced street art as a legitimate art form, creating open-air galleries that tell stories of culture, politics, and human experience.</p>
        
        <h2>Berlin: The Graffiti Capital</h2>
        <p>Berlin's street art scene is legendary, with the East Side Gallery being the longest remaining section of the Berlin Wall, now covered in murals by international artists. The city's liberal attitude toward street art has created neighborhoods like Kreuzberg and Friedrichshain that are living canvases.</p>
        
        <p>Take a street art tour through these districts to discover hidden gems and learn about the political and social messages behind the artwork.</p>
        
        <h2>Buenos Aires: South American Expression</h2>
        <p>Buenos Aires has one of the most vibrant street art scenes in South America. The city's economic struggles have given rise to powerful political murals, while neighborhoods like Palermo and San Telmo showcase colorful, artistic expressions of Argentine culture.</p>
        
        <p>The city even offers official street art tours, showing how the local government has embraced this form of artistic expression.</p>
        
        <h2>Melbourne: Laneway Culture</h2>
        <p>Melbourne's famous laneways are a maze of street art, from large-scale murals to intricate stencil work. The city's street art is constantly evolving, with new pieces appearing regularly in areas like Hosier Lane and AC/DC Lane.</p>
      `
    },
    {
      id: 6,
      title: "Island Hopping in the Mediterranean",
      description: "Sail through crystal-clear waters and discover hidden coves in the most beautiful Mediterranean islands.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Dec 03, 2024",
      readTime: "9 min read",
      rating: 4.6,
      slug: "mediterranean-island-hopping",
      author: "Sofia Papadopoulos",
      content: `
        <p>The Mediterranean Sea is dotted with thousands of islands, each offering its own unique blend of history, culture, and natural beauty. Island hopping in this ancient sea is like traveling through time, from prehistoric ruins to medieval fortresses to modern beach resorts.</p>
        
        <h2>The Greek Islands: Cycladic Beauty</h2>
        <p>The Cyclades offer the quintessential Greek island experience with their white-washed buildings, blue-domed churches, and dramatic clifftop villages. Start with Santorini for its famous sunsets, then explore Mykonos for its vibrant nightlife, and discover hidden gems like Folegandros and Sifnos.</p>
        
        <p>Each island has its own personality - from the party atmosphere of Ios to the artistic community of Hydra, where cars are banned and donkeys still carry goods through narrow stone streets.</p>
        
        <h2>The Balearic Islands: Spanish Paradise</h2>
        <p>Spain's Balearic Islands offer a perfect mix of beach relaxation and cultural exploration. Ibiza is famous for its electronic music scene, but also boasts UNESCO World Heritage sites and pristine beaches. Mallorca combines stunning coastlines with charming mountain villages and excellent hiking.</p>
        
        <p>Don't overlook Menorca, a UNESCO Biosphere Reserve with some of the most unspoiled beaches in the Mediterranean.</p>
        
        <h2>Planning Your Island-Hopping Adventure</h2>
        <p>The best time for island hopping is late spring through early fall when ferry services are most frequent. Consider purchasing an island-hopping pass for cost-effective travel, and always book accommodations in advance during peak summer months.</p>
      `
    },
    {
      id: 7,
      title: "Northern Lights: A Photographer's Dream",
      description: "Capture the magic of Aurora Borealis with expert tips and the best locations for stunning photographs.",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Nov 28, 2024",
      readTime: "11 min read",
      rating: 4.9,
      slug: "northern-lights-photography",
      author: "Lars Andersen",
      content: `
        <p>The Aurora Borealis, or Northern Lights, is one of nature's most spectacular phenomena. These dancing curtains of light have captivated humans for millennia, and with the right knowledge and equipment, you can capture their ethereal beauty in stunning photographs.</p>
        
        <h2>Understanding the Aurora</h2>
        <p>The Northern Lights occur when charged particles from the sun interact with Earth's magnetic field and atmosphere. The best viewing occurs during the dark months from September to March, with peak activity around the equinoxes.</p>
        
        <p>Aurora activity follows an 11-year solar cycle, and we're currently approaching solar maximum, making this an excellent time for aurora photography.</p>
        
        <h2>Best Locations for Aurora Photography</h2>
        <p>Iceland offers some of the most accessible aurora viewing, with Reykjavik as a base for northern expeditions. The Jökulsárlón glacier lagoon provides stunning foreground elements for your aurora shots.</p>
        
        <p>Northern Norway, particularly around Tromsø, offers excellent aurora chances and the unique opportunity to photograph the lights reflecting off fjords. Finnish Lapland and northern Sweden provide pristine wilderness settings with minimal light pollution.</p>
        
        <h2>Photography Techniques</h2>
        <p>Use a sturdy tripod and shoot in manual mode with a wide-angle lens. Start with ISO 1600-3200, aperture f/2.8 or wider, and exposure times of 10-25 seconds. Focus manually on infinity and use the camera's timer or a remote shutter to avoid camera shake.</p>
        
        <p>Include interesting foreground elements like trees, mountains, or buildings to create more compelling compositions. The contrast between the earthbound elements and the celestial display creates powerful visual narratives.</p>
      `
    },
    {
      id: 8,
      title: "Desert Safari Adventures",
      description: "Experience the thrill of desert exploration from the Sahara to the Arabian Peninsula's golden dunes.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Nov 25, 2024",
      readTime: "8 min read",
      rating: 4.4,
      slug: "desert-safari-adventures",
      author: "Amira Hassan",
      content: `
        <p>Desert safaris offer a unique blend of adventure, culture, and natural beauty. From the vast expanses of the Sahara to the towering dunes of the Arabian Peninsula, these landscapes provide unforgettable experiences that connect us with some of Earth's most extreme environments.</p>
        
        <h2>The Sahara: World's Largest Hot Desert</h2>
        <p>Morocco's Sahara Desert, accessible from cities like Marrakech and Fez, offers some of the most accessible desert safari experiences. The Erg Chebbi dunes near Merzouga rise up to 150 meters high and provide spectacular sunrise and sunset views.</p>
        
        <p>A traditional camel trek to a Berber camp allows you to experience desert life as nomads have for centuries. Sleep under a canopy of stars more brilliant than you've ever seen, and wake to the haunting call to prayer echoing across the dunes.</p>
        
        <h2>Arabian Peninsula: Luxury Desert Experiences</h2>
        <p>The UAE's desert safaris combine traditional Bedouin culture with modern luxury. Dubai and Abu Dhabi offer everything from thrilling dune bashing in 4x4 vehicles to elegant desert resorts where you can enjoy gourmet dining under the stars.</p>
        
        <p>Don't miss the opportunity to try sandboarding, falconry demonstrations, and traditional henna painting. The contrast between the ultra-modern cities and the timeless desert creates a unique cultural experience.</p>
        
        <h2>Essential Desert Safari Tips</h2>
        <p>Pack light, breathable clothing for the day and warm layers for surprisingly cold desert nights. Bring plenty of water, sunscreen, and a hat. Respect local customs and the fragile desert ecosystem by staying on designated paths and taking only photographs.</p>
        
        <p>The best time for desert safaris is during cooler months (October to March) when daytime temperatures are more comfortable for outdoor activities.</p>
      `
    },
    {
      id: 9,
      title: "Urban Exploration: Modern Architecture",
      description: "Discover architectural marvels in world's most innovative cities and the stories behind their design.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      date: "Nov 22, 2024",
      readTime: "6 min read",
      rating: 4.3,
      slug: "urban-exploration-architecture",
      author: "Alexander Chen",
      content: `
        <p>Modern architecture has transformed city skylines around the world, creating iconic structures that define urban landscapes. These architectural marvels are not just buildings – they're statements of human ambition, technological advancement, and artistic vision.</p>
        
        <h2>Dubai: Futuristic Desert Metropolis</h2>
        <p>Dubai's skyline is a testament to architectural ambition. The Burj Khalifa, standing at 828 meters, redefined what's possible in skyscraper construction. The building's design, inspired by Islamic architecture and desert flowers, demonstrates how modern structures can honor cultural heritage.</p>
        
        <p>The Museum of the Future, with its distinctive torus shape covered in Arabic calligraphy, represents Dubai's vision of innovation. Its unique design challenges traditional architectural concepts while serving as a symbol of the city's forward-thinking approach.</p>
        
        <h2>Singapore: Green Architecture Pioneer</h2>
        <p>Singapore has pioneered sustainable urban architecture with buildings like the Parkroyal Collection Pickering, which features more greenery than the park it replaced. The city's commitment to biophilic design creates urban oases that improve air quality and provide natural cooling.</p>
        
        <p>The Gardens by the Bay Supertrees are engineering marvels that combine art, architecture, and environmental technology. These 50-meter tall structures collect rainwater, generate solar power, and provide ventilation for the conservatories.</p>
        
        <h2>Copenhagen: Human-Centered Design</h2>
        <p>Copenhagen's architecture prioritizes human well-being and environmental sustainability. The 8 House by Bjarke Ingels Group creates a mountain-like structure where residents can bike from street level to the 11th floor, redefining urban living.</p>
        
        <p>The city's commitment to carbon neutrality by 2025 has driven innovative architectural solutions that balance aesthetic appeal with environmental responsibility.</p>
      `
    }
  ];

  // Find the current blog post
  const currentPost = blogPosts.find(post => post.slug === slug);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={currentPost.image}
          alt={currentPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentPost.title}</h1>
            <p className="text-xl opacity-90">{currentPost.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Meta */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {currentPost.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{currentPost.author}</p>
                  <p className="text-sm text-gray-500">{currentPost.date}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {currentPost.readTime}
              </div>
            </div>
            <div className="flex items-center bg-yellow-50 rounded-full px-3 py-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm font-medium ml-1">{currentPost.rating}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-lg shadow-sm p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Adventures</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter(post => post.id !== currentPost.id)
              .slice(0, 3)
              .map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2 hover:text-blue-600">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
