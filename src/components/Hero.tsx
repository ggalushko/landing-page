import { useRef } from "react";

function Hero() {
  const img1ref = useRef<HTMLImageElement>(null);
  const img2ref = useRef<HTMLImageElement>(null);
  const img3ref = useRef<HTMLImageElement>(null);
  const img4ref = useRef<HTMLImageElement>(null);
  const imgs = [img1ref, img2ref, img3ref, img4ref];
  const imageClass =
    "w-48 h-48 transition-transform duration-500 rounded-4xl bg-white";

  return (
    <div className=" mt-24">
      <h1 className=" font-bold text-7xl text-left">
        Some text blabla. <br /> Yes, it is indeed a text, but longer.
      </h1>
      <div>
        <p className=" text-secondary text-left max-w-[540px]  text-xl my-10">
          Что-то взойдет наверняка, вот тебе, друг, моя рука, солнце взойдет –
          мне рассказал старый шаман у древних скал». Весна двоих влюбленных
          птиц внутри шагов тепло ресниц.
        </p>
        <div className="ml-0 mr-auto w-fit flex gap-3">
          <button className="w-60 bg-button text-link rounded-md py-1">
            {" "}
            ONE
          </button>
          <button className="w-60 bg-transparent rounded-md py-1 border border-secondary">
            TWO
          </button>
        </div>
        <div className="flex flex-wrap justify-between h-96 just items-end px-4">
          <img
            ref={img1ref}
            className={imageClass}
            onMouseEnter={() => {
              setFocusedImage(img1ref);
            }}
          ></img>
          <img
            ref={img2ref}
            className={imageClass}
            onMouseEnter={() => {
              setFocusedImage(img2ref);
            }}
          ></img>
          <img
            ref={img3ref}
            className={imageClass}
            onMouseEnter={() => {
              setFocusedImage(img3ref);
            }}
          ></img>
          <img
            ref={img4ref}
            className={imageClass}
            onMouseEnter={() => {
              setFocusedImage(img4ref);
            }}
          ></img>
        </div>
      </div>
    </div>
  );
  function setFocusedImage(imgRef: React.RefObject<HTMLImageElement>) {
    imgRef.current!.classList.add("scale-150");
    imgs
      .filter((it) => it.current !== imgRef.current)
      .map((it) => it!.current!.classList.remove("scale-150"));
  }
}

export default Hero;
