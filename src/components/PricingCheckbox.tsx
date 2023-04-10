import { useRef, useState } from "react";

type prop = {
  name: string;
  included: boolean;
  price?: number;
  totalPrice?: number;
  setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
};
function PricingCheckbox({
  name,
  included,
  price,
  totalPrice,
  setTotalPrice,
}: prop) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputRefChecked, setInputRefChecked] = useState(false);
  return (
    <div className="flex items-center justify-center ">
      {included ? (
        <div className="ml-0 mr-4 w-8 h-8  shrink-0 bg-checkGreen bg-contain bg-center rounded-md"></div>
      ) : (
        <input
          ref={inputRef}
          checked={inputRefChecked}
          type="checkbox"
          className="ml-0 mr-4 w-8 h-8 appearance-none relative checked:bg-checkBlue shrink-0 bg-plus bg-contain bg-center
          before:absolute before:top-0 before:right-0 before:w-8 before:h-8  before:rounded-md before:transition-colors
         "
          onChange={() => {
            inputRef.current?.checked
              ? setTotalPrice!(totalPrice! + price!)
              : setTotalPrice!(totalPrice! - price!);
            setInputRefChecked(!inputRefChecked);
          }}
        ></input>
      )}
      <p className="ml-0 mr-auto text-sm ">{name}</p>
      <span className="ml-3 text-right">{price ? "$" + price : ""} </span>
    </div>
  );
}

export default PricingCheckbox;
