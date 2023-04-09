type prop = {
  name: string;
  included: boolean;
  price?: number;
};
function PricingCheckbox({ name, included, price }: prop) {
  return (
    <div className="flex items-center justify-center ">
      {included ? (
        <div className="ml-0 mr-4 w-8 h-8  shrink-0 bg-checkGreen bg-contain bg-center rounded-md"></div>
      ) : (
        <input
          type="checkbox"
          className="ml-0 mr-4 w-8 h-8 appearance-none relative checked:bg-checkBlue shrink-0 bg-plus bg-contain bg-center
          before:absolute before:top-0 before:right-0 before:w-8 before:h-8  before:rounded-md before:transition-colors
         "
        ></input>
      )}
      <p className="ml-0 mr-auto text-sm">{`${name} ${
        price ? "$" + price : ""
      }`}</p>
    </div>
  );
}

export default PricingCheckbox;
