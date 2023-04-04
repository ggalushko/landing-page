import { useState } from "react";

function Pricing() {
  const [sliderPosition, setSliderPosition] = useState(false);
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
          className={`z-10 transition-colors duration-300 ${
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
    </div>
  );
}

export default Pricing;
