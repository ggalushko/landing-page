import ShowCaseCard from "./ShowCaseCard";

function Showcase() {
  return (
    <div>
      <div className="flex flex-col gap-10 text-center justify-center max-w-[620px] mx-auto mt-32">
        <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold">
          Yes, it is indeed a text,
        </h2>
        <p className="text-secondary font-medium text-xl">
          {" "}
          Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is indeed
          a text, Yes, it is indeed a text,Yes, it is indeed a text,Yes, it is
          indeed a text,Yes, it is indeed a text,
        </p>
      </div>
      <div className="flex gap-10 flex-wrap justify-center mt-24">
        <ShowCaseCard />
        <ShowCaseCard />
        <ShowCaseCard />
      </div>
      <button className="w-36 p-2 bg-button text-link rounded-md mt-14 block mx-auto">
        Button text
      </button>
    </div>
  );
}

export default Showcase;
