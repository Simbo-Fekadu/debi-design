import React from 'react';
import { ArrowRight, MapPin, Users, Palette } from 'lucide-react';

export function CulturalCategories() {
  const categories = [
    {
      id: 1,
      name: "Asian Heritage",
      description: "Traditional clothing from East and Southeast Asia",
      countries: ["Japan", "China", "Korea", "Vietnam", "Thailand"],
      designs: 156,
      gradient: "from-red-500 to-pink-500",
      icon: "🏮"
    },
    {
      id: 2,
      name: "African Traditions",
      description: "Vibrant patterns and textiles from across Africa",
      countries: ["Ghana", "Nigeria", "Kenya", "Morocco", "Ethiopia"],
      designs: 134,
      gradient: "from-yellow-500 to-orange-500",
      icon: "🌍"
    },
    {
      id: 3,
      name: "Latin American",
      description: "Colorful designs from Mexico to Argentina",
      countries: ["Mexico", "Peru", "Guatemala", "Ecuador", "Bolivia"],
      designs: 89,
      gradient: "from-green-500 to-teal-500",
      icon: "🏺"
    },
    {
      id: 4,
      name: "European Folk",
      description: "Traditional costumes and historical clothing",
      countries: ["Norway", "Germany", "Romania", "Ireland", "Greece"],
      designs: 78,
      gradient: "from-blue-500 to-purple-500",
      icon: "🏰"
    },
    {
      id: 5,
      name: "Middle Eastern",
      description: "Elegant designs from the Arabian Peninsula to Turkey",
      countries: ["Turkey", "Iran", "UAE", "Lebanon", "Jordan"],
      designs: 67,
      gradient: "from-purple-500 to-pink-500",
      icon: "🕌"
    },
    {
      id: 6,
      name: "Indigenous Arts",
      description: "Sacred patterns from native cultures worldwide",
      countries: ["Native American", "Aboriginal", "Maori", "Inuit"],
      designs: 45,
      gradient: "from-orange-500 to-red-500",
      icon: "🪶"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Explore Cultural Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive deep into the rich heritage of traditional clothing from every continent
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl text-gray-900">{category.designs}</div>
                  <div className="text-sm text-gray-500">designs</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                {category.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {category.description}
              </p>

              {/* Countries */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Featured regions:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {category.countries.slice(0, 3).map((country, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                    >
                      {country}
                    </span>
                  ))}
                  {category.countries.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      +{category.countries.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{Math.floor(category.designs * 0.7)} creators</span>
                </div>
                <button className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 transition-colors duration-200 group">
                  <span className="text-sm">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Palette className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl text-gray-900">Can't find your culture?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Help us grow our collection by contributing designs from your heritage
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contribute Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}