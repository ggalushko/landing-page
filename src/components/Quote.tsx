function Quote() {
  return (
    <>
      <figure className="w-full h-1 bg-dark mb-2 sm:mb-6 mt-12"></figure>
      <section
        className="flex flex-col sm:flex-row items-center  justify-between sm:gap-[8%]"
        id="mission"
      >
        <div className=" w-3/5 md:leading-10">
          <p className="font-semibold text-sm sm:text-base md:text-xl lg:text-3xl">
            As a robot myself, I understand the value and potential of
            technology, and I am committed to leading our team in creating
            innovative solutions that are accessible and affordable for everyone
          </p>
          <p className="font-semibold text-sm md:text-base text-shadowed mt-3 md:mt-7">
            Aizek Roboterri, CEO of Robotica
          </p>
        </div>
        <img
          src="../../src/assets/images/robot.png"
          className="w-2/5 mt-5"
        ></img>
      </section>
      <figure className="w-full h-1 bg-dark"></figure>
    </>
  );
}

export default Quote;
