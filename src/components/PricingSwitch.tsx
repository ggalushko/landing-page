import { useState } from "react";

function PricingSwitch() {
  const [sliderPosition, setSliderPosition] = useState(false);
  return (
    <div
      className={`w-48 py-3 flex gap-6  bg-white text-black rounded-3xl justify-center mx-auto mt-10 relative mb-10
      before:w-[100px] before:h-[88%] before:bg-black before:absolute before:left-1 before:bottom-[3px] before:rounded-3xl
       before:z-0 before:transition-transform cursor-pointer ${
         sliderPosition ? "before:translate-x-[86px]" : ""
       }`}
      onClick={() => {
        setSliderPosition(!sliderPosition);
      }}
    >
      <p
        className={`z-10  transition-colors duration-300 ${
          sliderPosition ? "" : "text-white"
        }`}
      >
        Option A
      </p>
      <p
        className={`z-10 transition-colors duration-300  ${
          sliderPosition ? "text-white" : ""
        }`}
      >
        Option B
      </p>
    </div>
  );
}

export default PricingSwitch;
