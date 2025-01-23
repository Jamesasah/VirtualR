import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import Herosection from "./components/Herosection"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import TestimonialSection from "./components/TestimonialSection"
import Workflow from "./components/Workflow"

const App = () => {
  return (
    <div>
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
     <Herosection/>
     <FeatureSection/>
     <Workflow/>
     <Pricing/>
    <TestimonialSection/>
    <Footer/>
     </div>
    </div>
  )
}

export default App
