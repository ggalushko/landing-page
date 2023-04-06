import PricingCard from "./PricingCard";
import SectionText from "./SectionText";

function Pricing() {
  return (
    <section className="pt-20">
      <SectionText />
      <div className="flex justify-between mb-40 mt-20">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </section>
  );
}

export default Pricing;
