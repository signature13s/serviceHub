export const HappyCustomers: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      initials: "SJ",
      timeAgo: "2 days ago",
      rating: 5,
      review: "Absolutely fantastic service! My home has never been cleaner. The team was professional, thorough, and respectful...",
      service: "Professional Cleaning",
      avatar: null
    },
    {
      id: 2,
      name: "Mike Chen",
      initials: "MC",
      timeAgo: "1 week ago",
      rating: 5,
      review: "Exceeded all expectations! The website looks amazing and functions perfectly. Great communication...",
      service: "Web Development",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Davis",
      initials: "ED",
      timeAgo: "3 days ago",
      rating: 5,
      review: "Amazing trainer! I've seen incredible results in just 2 months. Highly knowledgeable and motivating.",
      service: "Personal Training",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Wilson",
      initials: "DW",
      timeAgo: "5 days ago",
      rating: 5,
      review: "Creative and professional design work. The logo and branding materials look incredible. Worth every...",
      service: "Graphic Design",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Happy Customers
            </h2>
            <p className="text-gray-600 text-lg">
              What our customers say about our services
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
            View All Reviews
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              {/* Customer Info */}
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  {review.avatar ? (
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                      {review.initials}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.timeAgo}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                {review.review}
              </p>

              {/* Service Tag */}
              <div className="text-blue-600 text-sm font-medium">
                Service: {review.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
