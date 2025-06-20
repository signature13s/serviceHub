export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 min-h-screen flex items-center justify-center px-6 ">
      <div className="text-center text-white max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to ServiceHub
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
          Discover premium services from trusted professionals. Your one-stop 
          destination for all service needs.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          <a href="/services">

          Explore Services
          </a>
        </button>
      </div>
    </section>
  );
};