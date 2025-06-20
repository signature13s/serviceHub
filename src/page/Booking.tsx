import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const HeroBooking: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-10 flex items-center justify-center px-6">
      <div className="text-center  max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
          Book Your Service
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto text-gray-200">
        Schedule a professional service with just a few clicks. <br/>Quality guaranteed.
        </p>
       
      </div>
    </section>
  );
};
function Booking() {
  return (
    <div className="min-h-screen flex flex-col w-full">
        <Header/>
      <HeroBooking/>
      <section className="py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Complete Your Booking</h2>
        <form className="space-y-5">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">ⓐ</span>
            <label className="block text-sm font-medium text-gray-700">Select Service</label>
          </div>
          <select className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Choose a service...</option>
            <option>Web Development</option>
  <option>Professional Cleaning Service</option>
  <option>Photography Services</option>
  <option>Personal Training</option>
  <option>Graphic Design</option>
  <option>Plumbing Services</option>
          </select>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">📅</span>
                <label className="block text-sm font-medium text-gray-700">Select Date</label>
              </div>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">⏰</span>
                <label className="block text-sm font-medium text-gray-700">Select Time</label>
              </div>
              <select className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Choose time...</option>
              </select>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">👤</span>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
              </div>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">📧</span>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">📞</span>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              </div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500">📍</span>
                <label className="block text-sm font-medium text-gray-700">Service Address</label>
              </div>
              <input
                type="text"
                placeholder="Enter service location"
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">📝</span>
              <label className="block text-sm font-medium text-gray-700">Additional Notes (Optional)</label>
            </div>
            <textarea
              placeholder="Any special instructions or requirements..."
              className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={()=>{alert('Your booking is done, we will reach you shortly');}}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
      <Footer/>
    </div>
  )
}

export default Booking
