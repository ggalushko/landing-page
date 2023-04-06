function CallToAction() {
  return (
    <div className="bg-dark flex flex-col gap-12 sm:gap-20 rounded-3xl px-10 py-20 my-20 items-center text-center">
      <h2 className="text-5xl font-bold">
        Hello there. <br /> Give us money please
      </h2>
      <p className=" text-xl text-shadowed md:w-3/5">
        A lot of text on why you should give us your money. Some lies about the
        value for you and about our made-up success. A lot of text on why you
        should give us your money. Some lies about the value for you and about
        our made-up success.
      </p>
      <button className="w-36 p-2 bg-button text-link rounded-md my-3">
        Button text
      </button>
    </div>
  );
}

export default CallToAction;
