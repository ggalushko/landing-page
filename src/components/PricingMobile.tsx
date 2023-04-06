import PricingCard from "./PricingCard";
import PricingSwitch from "./PricingSwitch";

function PricingMobile() {
  return (
    <section className="flex flex-col gap-12 items-center mt-20">
      <PricingSwitch />
      <PricingCard />
    </section>
  );
}

export default PricingMobile;
