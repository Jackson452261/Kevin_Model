import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
               關於我
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            從第一次拿起相機開始，我就深深著迷於「按下快門」的那一刻。
            攝影對我而言，不只是紀錄影像，而是一種將情感與故事凝結在畫面中的方式。
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-2xl">
             {/*  <img
                src=" "
                alt="Professional Photographer"
                className="w-full h-full object-cover"
              />*/}
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20"></div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hi, 我是Kevin
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                歡迎來到我的網站
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                分享攝影拍攝作品
              </p>
            </div>

            {/* Stats */}
     
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">我特別熱愛 人像攝影與風景攝影。</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              
              {
                title: "人像攝影",
                description: "人像裡，我喜歡捕捉最自然的神情 —— 一個不經意的微笑、一個安靜的眼神，都能展現最真實的自我。",
                icon: "📸"
              },
            
              {
                title: "風景拍攝",
                description: "每一次快門，都是與大自然的一場深刻對話。我希望觀者能透過我的照片，感受到當下的空氣、氛圍與情緒",
                icon: "🌄"
              }
            ].map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">攝影</h3>
            <blockquote className="text-xl text-gray-600 italic leading-relaxed">
            在人像中，我追求真實情感的流露；在風景裡，我探索自然的壯麗與寧靜。
            我希望讓影像不只是記錄，而是一股能量，能觸動人心、引發共鳴。
            </blockquote>
            <div className="mt-6">
              <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Equipment & Technical  
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Equipment</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Using industry-leading equipment to ensure the highest quality results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Cameras</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Canon EOS R5</li>
                <li>• Sony A7R IV</li>
                <li>• Fujifilm X-T4</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Lenses</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• 24-70mm f/2.8</li>
                <li>• 85mm f/1.4</li>
                <li>• 16-35mm f/2.8</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Lighting</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Profoto B1X</li>
                <li>• Godox AD600</li>
                <li>• Various modifiers</li>
              </ul>
            </div>
          </div>
        </div>
*/}
        {/* Call to Action  
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's create something beautiful together. Get in touch to discuss your photography needs.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                View Portfolio
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Contact Me
              </button>
            </div>
          </div> 
        </div>*/}
      </div>
    </div>
  );
};

export default About;
