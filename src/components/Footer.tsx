import { useState } from "react";
import { useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { hideAlert, showAlert } from "../store/alertSlice";

function Footer() {
  const [inputValue, setInputValue] = useState("");
  const inputIsValid = inputValue.match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const dispatch = useDispatch();

  return (
    <footer className="py-14">
      <figure className="w-full h-1 bg-dark my-6"></figure>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <img
            src="./assets/images/logo.png"
            className="w-20 rounded-md bg-contain bg-center"
          ></img>
          <p className=" text-3xl pb-1 font-semibold tracking-wider">
            Robotica
          </p>
        </div>

        <p className=" text-base text-shadowed text-center mx-3">
          2077. All rights reserved. <br />
          Robotica LTC, Japan, Tokyo, Kagaku-teki 1234
          <br />+ 1 (2345) 1932 020
        </p>

        <div className="flex  items-center justify-center gap-3 h-10 mt-10 sm:mt-0">
          <div
            className={`flex items-center border-opacity-60 h-10 rounded-md ${
              inputIsValid
                ? "border border-green-600"
                : "border border-secondary"
            }`}
          >
            <div className=" bg-mail w-7 h-5 bg-center bg-contain bg-no-repeat ml-1"></div>
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 rounded-lg bg-transparent focus:outline-none"
              value={inputValue}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
          <button
            className="max-w-24 p-2 bg-button font-semibold block rounded-md
          hover:scale-105 transition-transform duration-500"
            onClick={() => {
              setInputValue("");
              dispatch(showAlert());
              setTimeout(() => {
                dispatch(hideAlert());
              }, 3000);
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
