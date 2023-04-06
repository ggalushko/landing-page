import PricingInput from "./PricingInput";

function PricingCard() {
  return (
    <div
      className="sm:w-[400px] lg:w-[300px] xl:w-[340px] px-6 py-4  bg-white rounded-3xl flex flex-col text-black shrink-0
    shadow-2xl hover:shadow-sky-500 transition-all hover:scale-105 duration-500"
    >
      <h3 className="text-xl font-bold">Package</h3>
      <div className="flex items-center gap-2 mt-7">
        <p className="text-4xl font-bold">0.00$</p> <p>/Month</p>
      </div>
      <p className="text-shadowed font-semibold text-xl mt-6  w-8/12">
        Package description bla bla bla bla bla bla bla
      </p>
      <form className="flex flex-col gap-4 mt-6 text-black font-semibold">
        <PricingInput />
        <PricingInput />
        <PricingInput />
        <PricingInput />
        <button className=" w-full bg-blue-600 py-2 rounded-lg text-white mt-9">
          BUY
        </button>
      </form>
    </div>
  );
}

export default PricingCard;
