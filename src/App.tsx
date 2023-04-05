import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import PricingMobile from "./components/PricingMobile";
import Showcase from "./components/Showcase";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonial />
      <Showcase />
      {window.innerWidth > 1024 ? <Pricing /> : <PricingMobile />}
      <Contact/>
    </>
  );
}

export default App;
