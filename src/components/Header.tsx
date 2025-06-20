
export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600" >
          <a href="/">
          ServiceHub
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-10">
          <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">
            Dashboard
          </a>
          <a href="/services" className="text-gray-600 hover:text-gray-900 font-medium">
            Services
          </a>
          <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium ">
            About Us
          </a>
          <a href="/booking" className=" bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-2 flex justify-center items-center"> 
                
                  Book Now
               
              </a>
        </nav>
      </div>
    </header>
  );
};
