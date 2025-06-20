export const FeaturedServices: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Cleaning Service",
      description: "Deep cleaning and regular maintenance for your home or office",
      price: "$75/hour",
      rating: 4.8,
      reviews: 156,
      location: "New York, NY",
      duration: "2-4 hours",
      category: "Cleaning",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      price: "$120/hour",
      rating: 4.9,
      reviews: 89,
      location: "Remote",
      duration: "1-4 weeks",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Personal Training",
      description: "One-on-one fitness coaching to help you reach your goals",
      price: "$60/session",
      rating: 4.7,
      reviews: 203,
      location: "Los Angeles, CA",
      duration: "1 hour",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Graphic Design",
      description: "Creative design solutions for branding, marketing, and digital media",
      price: "$85/hour",
      rating: 4.6,
      reviews: 127,
      location: "Chicago, IL",
      duration: "3-7 days",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className=" py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Featured Services
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our most popular services
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
            <a href="/services">

            View All Services
            </a>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {service.category}
                </span>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Price and Rating */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">
                      {service.rating} ({service.reviews})
                    </span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {service.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </div>
                </div>

                {/* Book Now Button */}
                {/* <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
                  Book Now
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
