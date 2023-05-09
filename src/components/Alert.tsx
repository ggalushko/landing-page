import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function Alert() {
  const isVisible = useSelector((state: RootState) => state.alert.isVisible);

  return (
    <div
      className={`max-w-[320px] h-[60px] bg-[#20df5688] fixed top-4 right-4 p-3 box-content flex items-center gap-5 rounded-lg z-10
    transition-opacity duration-1000 pointer-events-none ${
      isVisible ? "opacity-100" : "opacity-0 "
    }`}
    >
      <div className="w-10 h-10 bg-checkAlert bg-contain"></div>
      <div className="flex flex-col text-[#c9fdd7] text-lg opacity-100">
        <p className=" font-bold">Success</p>
        <p> We will contact you soon! </p>
      </div>
    </div>
  );
}
