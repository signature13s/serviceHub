import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroServices } from "../components/HeroServices";
import ServiceCards from "../components/ServiceCards";

function Service() {
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroServices />
        <ServiceCards />
      </main>
      <Footer />
    </div>
  );
}

export default Service;
