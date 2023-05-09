import { useState } from "react";
import { PricingCard } from "./PricingCard";
import { PricingSwitch } from "./PricingSwitch";
import { SectionText } from "./SectionText";
import pricePackagesJSON from "../data/pricePackages.json";
import { PackSignature } from "../types";

const pricePacks: PackSignature = {
  1: pricePackagesJSON.basic,
  2: pricePackagesJSON.advanced,
  3: pricePackagesJSON.elite,
};

export function PricingMobile() {
  const [sliderPosition, setSliderPosition] = useState(1);
  return (
    <section className="flex flex-col gap-12 items-center mt-20" id="pricing">
      <SectionText
        header="Affordable Robotic Prosthetics for Everyone"
        text="We believe that everyone should have access to the latest technology in prosthetics. 
        That's why we offer a range of affordable options that are designed to fit a variety of budgets"
      />
      <PricingSwitch
        sliderPosition={sliderPosition}
        setSliderPosition={setSliderPosition}
      />
      <PricingCard pack={pricePacks[sliderPosition]} />
    </section>
  );
}
