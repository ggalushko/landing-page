import { useState } from "react";
import PricingCard from "./PricingCard";
import PricingSwitch from "./PricingSwitch";

function Pricing() {
  return (
    <div className="pt-20">
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Yes, it is indeed a text, <br /> Yes, it is indeed a text, Yes, it is
          indeed a text,
        </h2>
        <p className="text-secondary font-medium text-xl mt-10">
          Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is indeed
          a text, Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is
          indeed a text, Yes, it is indeed a text,
        </p>
      </div>
      <PricingSwitch />
      <div className="flex justify-around mb-40">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}

export default Pricing;
