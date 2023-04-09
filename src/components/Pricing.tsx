import PricingCard from "./PricingCard";
import SectionText from "./SectionText";
import pricePackages from "../assets/data/pricePackages.json";

function Pricing() {
  return (
    <section className="pt-20">
      <SectionText
        header="Affordable Robotic Prosthetics for Everyone"
        text="We believe that everyone should have access to the latest technology in prosthetics. 
        That's why we offer a range of affordable options that are designed to fit a variety of budgets"
      />
      <div className="flex lg:justify-between mb-40 mt-20 xl:justify-center xl:gap-20">
        <PricingCard pack={pricePackages.basic} />
        <PricingCard pack={pricePackages.advanced} />
        <PricingCard pack={pricePackages.elite} />
      </div>
    </section>
  );
}

export default Pricing;
