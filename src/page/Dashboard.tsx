import { FeaturedServices } from "../components/FeaturedService"
import { Footer } from "../components/Footer"
import { HappyCustomers } from "../components/HappyCustomer"
import { Header } from "../components/Header"
import { Hero } from "../components/HeroSection"
import { TopRatedServices } from "../components/TopRatedService"

function Dashboard() {
  return (
  <div>
      <Header />
      <Hero />
      <FeaturedServices/>
      <HappyCustomers/>
      <TopRatedServices/>
      <Footer/>
    </div>
  )
}

export default Dashboard
