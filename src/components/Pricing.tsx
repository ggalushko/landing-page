import PricingCard from "./PricingCard";
import SectionText from "./SectionText";
import pricePackages from "../data/pricePackages.json";
import { Zoom, Slide } from "react-awesome-reveal";

function Pricing() {
  return (
    <section className="pt-20" id="pricing">
      <Slide duration={2000} direction="right" triggerOnce>
        <SectionText
          header="Affordable Robotic Prosthetics for Everyone"
          text="We believe that everyone should have access to the latest technology in prosthetics. 
        That's why we offer a range of affordable options that are designed to fit a variety of budgets"
        />
      </Slide>
      <div className="flex lg:justify-between mb-40 mt-20 xl:justify-center xl:gap-20">
        <Zoom cascade duration={1200} className="mb-20" triggerOnce>
          <PricingCard pack={pricePackages.basic} />
          <PricingCard pack={pricePackages.advanced} />
          <PricingCard pack={pricePackages.elite} />
        </Zoom>
      </div>
    </section>
  );
}

export default Pricing;
