import { useRef } from "react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

function Hero() {
  const img1ref = useRef<HTMLImageElement>(null);
  const img2ref = useRef<HTMLImageElement>(null);
  const img3ref = useRef<HTMLImageElement>(null);
  const img4ref = useRef<HTMLImageElement>(null);
  const imgs = [img1ref, img2ref, img3ref, img4ref];
  const imageClass =
    "w-36 h-36 sm:w-48 sm:h-48 transition-transform duration-500 rounded-4xl object-contain";

  return (
    <section className="my-12 mb-20">
      <Fade duration={2000} triggerOnce>
        <div className="flex h-1/5">
          <Slide duration={3000} className="w-1/2" triggerOnce>
            <img
              src="../../src/assets/images/hand-2.png"
              className="-translate-x-[15px] xs:-translate-x-[60px] "
            ></img>
          </Slide>
          <Slide
            duration={3000}
            className="w-1/2 "
            direction="right"
            triggerOnce
          >
            <img
              src="../../src/assets/images/hand.png"
              className=" translate-x-[15px] xs:translate-x-[50px] ml-0 mr-auto w-full"
            ></img>
          </Slide>
        </div>
      </Fade>

      <h1 className="font-bold text-5xl md:text-7xl text-left">
        The{" "}
        <Fade cascade duration={1000} damping={0.2} triggerOnce>
          Revolution.
        </Fade>{" "}
        <br />
        <Slide duration={2000} triggerOnce fraction={1}>
          Experience the Future of Prosthetics.
        </Slide>
      </h1>

      <Fade duration={1500} cascade triggerOnce fraction={1}>
        <p className=" text-secondary text-left max-w-[540px] text-xl my-10">
          Welcome to Robotica, where we are committed to providing cutting-edge
          robotic prosthetics that are designed to improve the mobility and
          independence of our customers.
        </p>

        <div className="sm:ml-0 sm:mr-auto w-fit flex gap-6 flex-col sm:flex-row mb-16 sm:mb-32 text-xl font-semibold">
          <a href="#pricing">
            <button className="w-60 bg-button v rounded-md py-[9.25px] block hover:scale-105 transition-transform duration-500">
              Pricing
            </button>
          </a>
          <a href="#contact">
            <button
              className="w-60 bg-transparent rounded-md py-2 border border-secondary block 
            hover:scale-105 transition-transform duration-500"
            >
              More information
            </button>
          </a>
        </div>
      </Fade>
      <div className="flex flex-wrap justify-center lg:justify-between items-end px-4 gap-14  max-w-screen-xl">
        <img
          ref={img1ref}
          className={imageClass}
          onMouseEnter={() => {
            focusImage(img1ref);
          }}
          src="../../src/assets/images/hero-1.png"
        ></img>
        <img
          src="../../src/assets/images/hero-2.png"
          ref={img2ref}
          className={imageClass}
          onMouseEnter={() => {
            focusImage(img2ref);
          }}
        ></img>
        <img
          src="../../src/assets/images/hero-3.png"
          ref={img3ref}
          className={imageClass}
          onMouseEnter={() => {
            focusImage(img3ref);
          }}
        ></img>
        <img
          src="../../src/assets/images/hero-4.png"
          ref={img4ref}
          className={imageClass}
          onMouseEnter={() => {
            focusImage(img4ref);
          }}
        ></img>
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
