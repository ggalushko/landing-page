import { useRef } from "react";

function Hero() {
  const img1ref = useRef<HTMLImageElement>(null);
  const img2ref = useRef<HTMLImageElement>(null);
  const img3ref = useRef<HTMLImageElement>(null);
  const img4ref = useRef<HTMLImageElement>(null);
  const imgs = [img1ref, img2ref, img3ref, img4ref];
  const imageClass =
    "w-36 h-36 sm:w-48 sm:h-48 transition-transform duration-500 rounded-4xl bg-white";

  return (
    <section className="mt-24">
      <h1 className="font-bold text-5xl md:text-7xl text-left">
        Some text blabla. <br /> Yes, it is indeed a text, but longer.
      </h1>
      <div>
        <p className=" text-secondary text-left max-w-[540px] text-xl my-10">
          Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is indeed
          a text,Yes, it is indeed a text, Yes, it is indeed a text,
        </p>
        <div className="sm:ml-0 sm:mr-auto w-fit flex gap-6 flex-col sm:flex-row">
          <button className="w-60 bg-button text-link rounded-md py-1 block">
            {" "}
            ONE
          </button>
          <button className="w-60 bg-transparent rounded-md py-1 border border-secondary block">
            TWO
          </button>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between items-end px-4 gap-14 mt-16 sm:mt-32">
          <img
            ref={img1ref}
            className={imageClass}
            onMouseEnter={() => {
              focusImage(img1ref);
            }}
          ></img>
          <img
            ref={img2ref}
            className={imageClass}
            onMouseEnter={() => {
              focusImage(img2ref);
            }}
          ></img>
          <img
            ref={img3ref}
            className={imageClass}
            onMouseEnter={() => {
              focusImage(img3ref);
            }}
          ></img>
          <img
            ref={img4ref}
            className={imageClass}
            onMouseEnter={() => {
              focusImage(img4ref);
            }}
          ></img>
        </div>
      </div>
    </section>
  );
  function focusImage(imgRef: React.RefObject<HTMLImageElement>) {
    imgRef.current!.classList.add("scale-150");
    imgs.forEach((img) => {
      if (img.current !== imgRef.current)
        img!.current!.classList.remove("scale-150");
    });
  }
}

export default Hero;
