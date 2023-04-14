import { useDispatch, useSelector } from "react-redux";
import PricingCheckbox from "./PricingCheckbox";
import { openModal, setPackage, setPrice } from "../store/modalSlice";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";
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
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(pack.initialPrice);

  return (
    <div
      className="w-[320px]  xs:w-[420px] lg:w-[300px] xl:w-[340px] px-6 py-4  bg-white rounded-3xl flex flex-col text-black shrink-0
    shadow-2xl hover:shadow-sky-500 transition-all hover:scale-105 duration-500"
    >
      <h3 className="text-xl font-bold">{pack.name}</h3>
      <p className="text-4xl font-bold mt-7">${pack.initialPrice}</p>
      <p className="text-shadowed font-semibold text-lg mt-6">
        {pack.description}
      </p>
      <form className="flex flex-col gap-4 mt-6 text-black font-semibold h-[350px]">
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
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
              />
            );
          })}
        </>
        <p className="mt-auto mb-0 text-xl">Total: {`$ ${totalPrice}`}</p>
        <button
          className=" w-full bg-blue-600 py-2 rounded-lg text-white mt-3 mb-0 block hover:opacity-80 transition-opacity duration-500"
          onClick={(e) => {
            e.preventDefault();
            dispatch(setPrice({ price: totalPrice }));
            dispatch(setPackage({ name: pack.name }));
            dispatch(openModal());
          }}
        >
          BUY
        </button>
      </form>
    </div>
  );
}

export default PricingCard;
