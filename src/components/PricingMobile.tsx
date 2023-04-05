import PricingCard from "./PricingCard";
import PricingSwitch from "./PricingSwitch";

function PricingMobile() {
  return (
    <div className="flex flex-col gap-12 items-center mt-20">
      <PricingSwitch />
      <PricingCard />
    </div>
  );
}

export default PricingMobile;
