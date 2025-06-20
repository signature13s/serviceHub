import { ServiceCard } from "./ServiceCard";

const ServiceCards: React.FC = () => {
  const services =[
  {
    "category": "Cleaning",
    "title": "Professional Cleaning Service",
    "description": "Deep cleaning and regular maintenance for your home or office",
    "price": "$75/hour",
    "rating": "★ 4.8 (156)",
    "location": "New York, NY",
    "time": "⏰ 2-4 hours",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop"
  },
  {
    "category": "Tech",
    "title": "Web Development",
    "description": "Custom websites and web applications built with modern technologies",
    "price": "$120/hour",
    "rating": "★ 4.9 (89)",
    "location": "Remote",
    "time": "⏰ 1-4 weeks",
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
  },
  {
    "category": "Fitness",
    "title": "Personal Training",
    "description": "One-on-one fitness coaching to help you reach your goals",
    "price": "$60/session",
    "rating": "★ 4.7 (203)",
    "location": "Los Angeles, CA",
    "time": "⏰ 1 hour",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
  },
  {
    "category": "Design",
    "title": "Graphic Design",
    "description": "Creative design solutions for branding, marketing, and digital media",
    "price": "$85/hour",
    "rating": "★ 4.6 (127)",
    "location": "Chicago, IL",
    "time": "⏰ 3-7 days",
    "image": "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=250&fit=crop"
  },
  {
    "category": "Home Repair",
    "title": "Plumbing Services",
    "description": "Emergency repairs and routine plumbing maintenance",
    "price": "$90/hour",
    "rating": "★ 4.5 (234)",
    "location": "Dallas, TX",
    "time": "⏰ 1-3 hours",
    "image": "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=250&fit=crop"
  },
  {
    "category": "Creative",
    "title": "Photography Services",
    "description": "Professional photography for events, portraits, and commercial use",
    "price": "$150/session",
    "rating": "★ 4.8 (91)",
    "location": "Miami, FL",
    "time": "⏰ 2-6 hours",
    "image": "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop"
  }
]

  return (
    <div className="p-4 bg-gray-50 flex items-center flex-col ">
      <div className="flex justify-between mb-4 w-4/5">
        <select className="p-2 border rounded">
          <option>Filter by: All Categories</option>
        </select>
        <select className="p-2 border rounded">
          <option>Sort by: Highest Rated</option>
        </select>
      </div>
      <p className="text-sm text-gray-600 mb-4">Showing 6 services</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-4/5">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;