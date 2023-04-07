import PricingCard from "./PricingCard";
import SectionText from "./SectionText";

function Pricing() {
  return (
    <section className="pt-20">
      <SectionText
        header="Affordable Robotic Prosthetics for Everyone"
        text="We believe that everyone should have access to the latest technology in prosthetics. 
        That's why we offer a range of affordable options that are designed to fit a variety of budgets"
      />
      <div className="flex justify-between mb-40 mt-20 xl:justify-center lg:gap-20">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
}

export default Pricing;
