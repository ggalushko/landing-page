function PricingInput() {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="ml-0 mr-4 w-8 h-8 appearance-none relative checked:before:bg-cyan-400
         before:absolute before:top-0 before:right-0 before:w-8 before:h-8 before:bg-secondary before:rounded-md before:transition-colors"
      ></input>{" "}
      <p className="ml-0 mr-auto">Some extra function</p>
    </div>
  );
}

export default PricingInput;
