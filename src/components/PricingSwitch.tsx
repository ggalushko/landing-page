import { useState } from "react";
type props = {
  sliderPosition: 1 | 2 | 3;
  setSliderPosition: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
};
function PricingSwitch({ sliderPosition, setSliderPosition }: props) {
  return (
    <div
      className={` w-72 py-3 flex gap-6  bg-white text-black rounded-3xl justify-center relative
      before:w-[33%] before:h-[88%] before:bg-black before:absolute before:left-[3%] before:bottom-[5%] before:rounded-3xl
       before:z-0 before:transition-transform cursor-pointer ${getSliderTranslate(
         sliderPosition
       )} 
       }`}
    >
      <p
        className={`z-10  transition-colors duration-300 ${
          sliderPosition == 1 ? "text-white" : ""
        }`}
        onClick={() => {
          setSliderPosition(1);
        }}
      >
        Option A
      </p>
      <p
        className={`z-10 transition-colors duration-300  ${
          sliderPosition == 2 ? "text-white" : ""
        }`}
        onClick={() => {
          setSliderPosition(2);
        }}
      >
        Option B
      </p>
      <p
        className={`z-10 transition-colors duration-300  ${
          sliderPosition == 3 ? "text-white" : ""
        }`}
        onClick={() => {
          setSliderPosition(3);
        }}
      >
        Option C
      </p>
    </div>
  );
  function getSliderTranslate(position: number) {
    switch (position) {
      case 1:
        return "";
      case 2:
        return "before:translate-x-[94%]";
      case 3:
        return "before:translate-x-[186%]";
    }
  }
}

export default PricingSwitch;
