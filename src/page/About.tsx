import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { HeroAbout } from "../components/HeroAbout"


const StatsSection: React.FC = () => {
  const stats = [
    { value: "50,000+", label: "Happy Customers" },
    { value: "10,000+", label: "Service Providers" },
    { value: "100+", label: "Service Categories" },
    { value: "4.8/5", label: "Average Rating" },
  ];

  return (
    <section className="bg-white text-white py-12 w-full">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-center hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
const MissionSection: React.FC = () => {
  const missionItems = [
    { title: "Trust & Safety", description: "All service providers are thoroughly vetted and verified for your peace of mind.", icon: "shield" },
    { title: "Customer First", description: "Your satisfaction is our priority. We strive to ensure exceptional service.", icon: "heart" },
    { title: "Quality Focus", description: "We maintain the highest standards by partnering only with the best professionals.", icon: "check-circle" },
    { title: "Innovation", description: "Continuously improving our platform to make finding services easier and faster.", icon: "bolt" },
  ];

  return (
    <section className="bg-gray-100 py-12 w-full">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-8">
          To revolutionize how people find and book professional services by creating a trusted marketplace that benefits both customers and service providers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {missionItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
              <div className="text-4xl mb-4">
                {item.icon === "shield" && <span className="text-blue-500">🛡️</span>}
                {item.icon === "heart" && <span className="text-red-500">❤️</span>}
                {item.icon === "check-circle" && <span className="text-green-500">✅</span>}
                {item.icon === "bolt" && <span className="text-yellow-500">⚡</span>}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      description: "With 15 years in the service industry, Sarah founded ServiceHub to connect customers with trusted professionals.",
      image: "https://via.placeholder.com/200x200?text=Sarah+Mitchell"
    },
    {
      name: "David Rodriguez",
      role: "CTO",
      description: "David leads our technology team, ensuring our platform is secure, scalable, and user-friendly.",
      image: "https://via.placeholder.com/200x200?text=David+Rodriguez"
    },
    {
      name: "Emily Chen",
      role: "Head of Operations",
      description: "Emily oversees quality assurance and ensures every service provider meets our high standards.",
      image: "https://via.placeholder.com/200x200?text=Emily+Chen"
    },
  ];

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-600 mb-8">The passionate people behind ServiceHub's success</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StorySection: React.FC = () => {
  return (
    <section className="pt-12 bg-gray-100 w-full">
      <div className=" mx-auto text-center self-center flex flex-col items-center justify-center">
        <div className="max-w-7xl flex justify-center flex-col items-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-8  ">
          ServiceHub was born from a simple frustration: finding reliable, high-quality service providers shouldn't be a gamble. In 2020, our founder Sarah Mitchell experienced this challenge firsthand when trying to find a trustworthy cleaning service for her elderly parents.
        </p>
        <p className="text-gray-600 mb-8 ">
          After countless hours of research, phone calls, and disappointing experiences, Sarah realized there had to be a better way. She envisioned a platform where customers could easily find verified professionals, read genuine reviews, and book services with confidence.
        </p>
        <p className="text-gray-600 mb-8 ">
          Today, ServiceHub has grown into a thriving marketplace that serves over 50,000 customers and supports more than 10,000 service providers across the country. We're proud to have facilitated millions of successful service connections, creating value for both customers and professionals in our community.
        </p>
        </div>

        <div className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 mt-8">
          <div className=" mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience ServiceHub?</h3>
            <p className="text-gray-200 mb-6">Join thousands of satisfied customers who trust ServiceHub for their service needs.</p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200"><a href="/services">Browse Services</a></button>
              <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-gray-800"><a href="/">Learn More</a></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
function About() {
  
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <HeroAbout/>
      <StatsSection/>
      <MissionSection/>
      <TeamSection/>
      <StorySection/>
      {/* <main className="flex-grow">
        <HeroServices />
        <ServiceCards />
      </main> */}
      <Footer />
    </div>
  )
}

export default About
