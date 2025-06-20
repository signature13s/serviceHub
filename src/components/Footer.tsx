export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="flex  max-w-7xl mx-auto flex-col">
        <div className="flex justify-between text-gray-300 ">
        <div>
          <h3 className="text-3xl font-semibold mb-2 text-blue-400">ServiceHub</h3>
          <p className="text-sm tracking-widest">Your trusted platform for finding <br/>premium services from verified<br/> professionals.</p>
          {/* <div className="flex space-x-2 mt-2 w-30 h-10">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          </div> */}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
          <ul className="text-sm space-y-4">
            <li><a href="#dashboard" className="hover:text-gray-400">Dashboard</a></li>
            <li><a href="#services" className="hover:text-gray-400">All Services</a></li>
            <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#help" className="hover:text-gray-400">Help Center</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Contact Us</h3>
          <ul className="text-sm space-y-4">
            <li><a href="tel:+1551234567" className="hover:text-gray-400">+1 (555) 123-4567</a></li>
            <li><a href="mailto:support@servicehub.com" className="hover:text-gray-400">support@servicehub.com</a></li>
            <li>123 Service St, City, State 12345</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Stay Updated</h3>
          <p className="text-sm mb-4 tracking-widest ">Subscribe to our newsletter for the latest<br/> services and updates.</p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 mb-4   bg-gray-800 border-none rounded text-white"
            />
          <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Subscribe</button>
        </div>
            </div>
         <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ServiceHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/about" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              About Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

