import React from "react";

function BurgerButton(props: {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const figureClass =
    "w-10 h-[6px] bg-secondary rounded-lg transition-transform  duration-1000  ease-in-out";
  return (
    <button onClick={() => props.setIsOpened(!props.isOpened)} className="z-10">
      <div className="flex flex-col gap-y-2">
        <figure
          className={
            figureClass +
            `${props.isOpened ? " rotate-[225deg] translate-y-3" : ""}`
          }
        ></figure>
        <figure
          className={
            figureClass +
            `${
              props.isOpened ? " transition-opacity  rotate-180 opacity-0" : ""
            }`
          }
        ></figure>
        <figure
          className={
            figureClass +
            `${props.isOpened ? " -rotate-[225deg] -translate-y-4" : ""}`
          }
        ></figure>
      </div>
    </button>
  );
}

export default BurgerButton;
