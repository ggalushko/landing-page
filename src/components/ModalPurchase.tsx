import { useRef } from "react";

function ModalPurchase() {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      ref={modalRef}
      className="w-screen h-screen absolute top-0 right-0 bg-modal grid place-content-center 
       duration-1000 transition-opacity"
      onMouseDown={(e) => {
        e.stopPropagation();
        const isTargetArea =
          e.target == modalRef.current || e.target == closeBtnRef.current;
        isTargetArea &&
          modalRef.current?.classList.add("opacity-0", "pointer-events-none");
        console.log(modalRef);
      }}
    >
      <form className=" bg-dark p-8 rounded-xl flex flex-col text-xl gap-4 relative">
        <button
          ref={closeBtnRef}
          className="right-0 top-0 absolute -translate-y-[100%] sm:translate-x-[100%]"
          onClick={(e) => e.preventDefault()}
        >
          X
        </button>
        <p className="m-auto text-4xl font-bold">Bla bla</p>
        <p className="m-auto  text-xl text-shadowed text-center">
          Bla bla bla bla asdasd asd as asd asd qqqqq qwdasd{" "}
        </p>
        <label className="flex flex-col gap-1">
          {" "}
          Name
          <input
            type="text"
            placeholder="Enter name"
            className="px-3 py-2 rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2"
          ></input>
        </label>
        <label className="flex flex-col gap-1">
          {" "}
          Email
          <input
            type="email"
            placeholder="Enter email"
            className="px-3 py-2 rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2"
          ></input>
        </label>

        <label className="flex flex-col gap-1">
          {" "}
          Phone number
          <input
            type="tel"
            placeholder="Enter phone"
            className="px-3 py-2 rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2"
          ></input>
        </label>
        <button
          className="w-36 p-2 bg-button text-link rounded-md mt-3 block m-auto"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ModalPurchase;
