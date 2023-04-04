function Testimonial() {
  return (
    <div className="mt-48 flex flex-col items-center gap-16">
      <div className="flex gap-2 sm:gap-10 justify-center items-center">
        <img className="w-16 h-16 rounded-full bg-white"></img>
        <img className="w-32 h-32 rounded-full bg-white"></img>
        <img className="w-16 h-16 rounded-full bg-white"></img>
      </div>
      <p className="text-lg md:text-4xl font-bold max-w-[820px] text-center">
        Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is indeed a
        text, Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is
        indeed a text,
      </p>
      <div className="flex flex-col mt-4 gap-2 items-center">
        <p className=" text-[20px]">Name</p>
        <p className="text-secondary">@sociallink</p>
      </div>
    </div>
  );
}

export default Testimonial;