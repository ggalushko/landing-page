import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/modalSlice";
import { RootState } from "../store/store";
import { hideAlert, showAlert } from "../store/alertSlice";

function ModalPurchase() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalState = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const inputsValidity = {
    name: inputValues.name.length > 0,
    email: inputValues.email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    ),
    phone: inputValues.phone.length > 10,
  };
  const formIsValid =
    inputsValidity.name && inputsValidity.phone && inputsValidity.email;
  const inputClass =
    "px-3 py-2 rounded-lg bg-transparent border-opacity-60 focus:outline-none";
  const labelClass = "flex flex-col gap-1";
  document.body.style.overflow = `${modalState.isOpened ? "hidden" : ""}`;

  return (
    <div
      ref={modalRef}
      className={` w-full h-full fixed top-0 right-0 bg-modal grid place-content-center
       duration-700 transition-opacity z-40 ${
         modalState.isOpened ? "" : modalState.hideClass
       }`}
      onMouseDown={(e) => {
        e.stopPropagation();
        const isTargetArea =
          e.target == modalRef.current || e.target == closeBtnRef.current;
        if (isTargetArea) {
          dispatch(closeModal());
          clearInputs();
        }
      }}
    >
      <form className=" bg-dark p-8 rounded-xl flex flex-col text-xl gap-5 relative xs:w-[450px]">
        <button
          ref={closeBtnRef}
          className="right-0 top-0 absolute -translate-y-[100%] sm:translate-x-[100%] bg-cross w-10 h-10 bg-contain bg-center
          hover:opacity-60 transition-opacity"
          onClick={(e) => e.preventDefault()}
        ></button>
        <p className="m-auto text-4xl font-bold text-center">
          {modalState.chosenPackage} package
        </p>
        <p className="m-auto  text-lg text-shadowed text-center">
          {`Your price is $${modalState.chosenPrice}. 
          To complete your purchase, fill out the form below and our team will 
          process your order promptly. `}
        </p>
        <label className={labelClass}>
          Name
          <input
            minLength={1}
            maxLength={20}
            required
            type="text"
            placeholder="Enter name"
            className={`${inputClass} ${
              inputsValidity.name
                ? "border border-green-600"
                : "border border-secondary"
            }`}
            value={inputValues.name}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.match(/^([a-z|а-я|\s])*$/i))
                setInputValues({ ...inputValues, name: e.target.value });
            }}
          />
        </label>
        <label className={labelClass}>
          Email
          <input
            value={inputValues.email}
            minLength={6}
            maxLength={25}
            required
            type="email"
            placeholder="Enter email"
            className={`${inputClass} ${
              inputsValidity.email
                ? "border border-green-600"
                : "border border-secondary"
            }`}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputValues({ ...inputValues, email: e.target.value });
            }}
          />
        </label>
        <label className={labelClass}>
          Phone number
          <div
            className={`flex items-center border-opacity-60 rounded-md ${
              inputsValidity.phone
                ? "border border-green-600"
                : "border border-secondary"
            }`}
          >
            <p className=" font-bold text-2xl pb-[6px] pl-2">+</p>
            <input
              required
              minLength={11}
              maxLength={15}
              type="tel"
              value={inputValues.phone}
              placeholder="Enter phone"
              className={inputClass}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (inputValues.phone.length == 1) {
                  setInputValues({ ...inputValues, phone: "" });
                }
                if (e.target.value.match(/^[+{1}1-9]\d*$/)) {
                  setInputValues({ ...inputValues, phone: e.target.value });
                }
              }}
            />
          </div>
        </label>
        <button
          className={`w-36 p-2 bg-button rounded-md block m-auto ${
            formIsValid ? "" : " pointer-events-none opacity-50"
          }`}
          onClick={(e) => {
            e.preventDefault();
            dispatch(closeModal());
            dispatch(showAlert())
               setTimeout(() => {
                dispatch(hideAlert())
               }, 3000);
            clearInputs();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
  function clearInputs() {
    setInputValues({
      name: "",
      phone: "",
      email: "",
    });
  }
}

export default ModalPurchase;
