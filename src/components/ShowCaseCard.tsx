function ShowCaseCard() {
  return (
    <div className="flex flex-col w-[350px] gap-4">
      <img className="w-[350px] h-[200px] mb-4 rounded-4xl bg-white"></img>
      <p className=" text-sm font-semibold text-shadowed">
        Yes, it is indeed a text
      </p>
      <h3 className="text-xl sm:text-2xl font-bold">
        Yes, it is indeed a text, Yes, it is indeed a text,
      </h3>
      <p className="text-secondary">
        {" "}
        Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is indeed a
        text, Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is
        Yes, it is indeed a text,
        indeed a text,
      </p>
    </div>
  );
}

export default ShowCaseCard;
