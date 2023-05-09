import {
  Header,
  Hero,
  CallToAction,
  Testimonial,
  Showcase,
  Quote,
  Pricing,
  PricingMobile,
  Contact,
  Footer,
  ModalPurchase,
  Alert,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CallToAction />
      <Testimonial />
      <Showcase />
      <Quote />
      {window.innerWidth > 1024 ? <Pricing /> : <PricingMobile />}
      <Contact />
      <Footer />
      <ModalPurchase />
      <Alert />
    </>
  );
}

export default App;
