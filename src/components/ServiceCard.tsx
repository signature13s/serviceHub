export const ServiceCard: React.FC<{ category: string; title: string; description:
string; price: string; rating: string; location: string; time: string; image:
string; }> = ({ category, title, description, price, rating, location, time,
image }) => { return (
<div className="bg-white rounded-lg shadow-md p-4 m-2 w-full overflow-hidden hover:shadow-2xl transition-shadow duration-300 hover-scale">
  <img
    src={image}
    alt="{title}"
    className="w-full h-32 object-cover rounded-t-lg"
  />
  <div className="p-2">
    <span className="text-blue-600 text-sm">{category}</span>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    <p className="text-blue-600 font-bold mt-2">{price}</p>
    <div className="flex items-center mt-1">
      <span className="text-yellow-500">{rating}</span>
      <span className="text-gray-500 text-sm ml-1">({location})</span>
    </div>
    <p className="text-gray-500 text-sm mt-1">{time}</p>
    <button
      className="w-full bg-gray-800 text-white py-2 mt-2 rounded hover:bg-gray-700"
    >
      Book Now
    </button>
  </div>
</div>
); };
