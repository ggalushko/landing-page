import PricingCheckbox from "./PricingCheckbox";
type extraOption = {
  name: string;
  price: number;
};
type pack = {
  pack: {
    name: string;
    initialPrice: number;
    description: string;
    includedOptions: string[];
    extraOptions: extraOption[];
  };
};

function PricingCard({ pack }: pack) {
  return (
    <div
      className="w-[320px] xs:w-[420px] lg:w-[300px] xl:w-[340px] px-6 py-4  bg-white rounded-3xl flex flex-col text-black shrink-0
    shadow-2xl hover:shadow-sky-500 transition-all hover:scale-105 duration-500"
    >
      <h3 className="text-xl font-bold">{pack.name}</h3>
      <div className="flex items-center gap-2 mt-7">
        <p className="text-4xl font-bold">${pack.initialPrice}</p> <p>/Month</p>
      </div>
      <p className="text-shadowed font-semibold text-lg mt-6">
        {pack.description}
      </p>
      <form className="flex flex-col gap-4 mt-6 text-black font-semibold h-[330px]">
        <>
          {pack.includedOptions.map((item) => {
            return <PricingCheckbox name={item} included={true} key={item} />;
          })}
          {pack.extraOptions.map((item) => {
            return (
              <PricingCheckbox
                name={item.name}
                key={item.name}
                included={false}
                price={item.price}
              />
            );
          })}
        </>

        <button className=" w-full bg-blue-600 py-2 rounded-lg text-white mt-auto mb-0 block">
          BUY
        </button>
      </form>
    </div>
  );
}

export default PricingCard;
