export const TopRatedServices: React.FC = () => {
  const topServices = [
    {
      id: 1,
      title: "Premium Home Cleaning",
      description: "Eco-friendly cleaning with 100% satisfaction guarantee",
      rating: 4.9,
      reviews: 324,
      bookings: 1240,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      badges: [
        { text: "Top Rated", color: "bg-gray-100 text-gray-700" },
        { text: "Trending", color: "bg-green-100 text-green-700" }
      ],
      highlight: true
    },
    {
      id: 2,
      title: "Expert Web Development",
      description: "Full-stack development with modern frameworks",
      rating: 4.9,
      reviews: 189,
      bookings: 567,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      badges: [
        { text: "Most Popular", color: "bg-blue-100 text-blue-700" },
        { text: "Trending", color: "bg-green-100 text-green-700" }
      ],
      highlight: false
    },
    {
      id: 3,
      title: "Professional Photography",
      description: "Capture your special moments with artistic flair",
      rating: 4.8,
      reviews: 276,
      bookings: 892,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=200&fit=crop",
      badges: [
        { text: "Editor's Choice", color: "bg-purple-100 text-purple-700" }
      ],
      highlight: false
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Top Rated Services
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Our highest-rated services trusted by thousands of satisfied customers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {topServices.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                service.highlight ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {/* Service Image */}
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {service.badges.map((badge, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
                {/* Special Rating Badge */}
                {service.id === 2 && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    #1 Rated
                  </div>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-bold text-gray-900">{service.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span>{service.reviews} reviews</span>
                  <span>{service.bookings} bookings</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                    Book Now
                  </button> */}
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors duration-300">
            <a href="/services">

            View All Top Rated Services
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
