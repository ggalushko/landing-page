import { useRef, useState } from "react";

type feedback = {
  text: string;
  name: string;
  link: string;
};

const feedbacks = {
  first: {
    text: `I was blown away by the quality of the prosthetic limb I received from Robotica. 
    It's comfortable to wear and has held up to all of my daily activities. The customer service was exceptional 
    and they helped guide me through the entire process. I couldn't be happier with my purchase.`,
    name: "Johanna Henson",
    link: "@jhnhnsn",
  },
  second: {
    text: `I can't thank Robotica enough for the amazing robotic prosthetic limb they created for me. 
    The customization options were perfect for my needs and the AI module has greatly improved my control and mobility. 
    I highly recommend this company to anyone in need of a prosthetic limb.`,
    name: "Ethan Burton",
    link: "@3_burt0n",
  },
  third: {
    text: `As an athlete, finding a prosthetic limb that could keep up with my level of activity was essential. 
    Robotica delivered exactly what I needed with their sports prosthetic limb. The range of motion and control is incredible 
    and it's helped me to excel in my sport. Thank you, Robotica!`,
    name: "Elijah Wilmer",
    link: "@wilmer92",
  },
};

function Testimonial() {
  const [currentFeedback, setCurrentFeedback] = useState(feedbacks.second);

  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const img1ref = useRef<HTMLImageElement>(null);
  const img2ref = useRef<HTMLImageElement>(null);
  const img3ref = useRef<HTMLImageElement>(null);
  const [focusedImage, setFocusedImage] = useState(img2ref);

  return (
    <section className="mt-16 sm:mt-48 flex flex-col items-center gap-16">
      <div className="flex gap-2 justify-center items-center">
        <img
          src="../../src/assets/images/face-1.png"
          ref={img1ref}
          className="w-16 h-16 rounded-full transition-all duration-1000"
          onClick={() => {
            focusUserImage(img1ref);
            showFeedback(feedbacks.first);
          }}
        ></img>
        <img
          ref={img2ref}
          src="../../src/assets/images/face-2.png"
          className="w-32 h-32 rounded-full transition-all duration-1000"
          onClick={() => {
            showFeedback(feedbacks.second);
            focusUserImage(img2ref);
          }}
        ></img>
        <img
          ref={img3ref}
          src="../../src/assets/images/face-3.png"
          className="w-16 h-16 rounded-full transition-all duration-1000"
          onClick={() => {
            showFeedback(feedbacks.third);
            focusUserImage(img3ref);
          }}
        ></img>
      </div>
      <div ref={paragraphRef} className=" transition-opacity duration-700">
        <p className="text-xl md:text-3xl font-semibold max-w-[820px] text-center">
          {currentFeedback.text}
        </p>
        <div className="flex flex-col mt-4 gap-2 items-center">
          <p className="text-xl">{currentFeedback.name}</p>
          <p className="text-secondary">{currentFeedback.link}</p>
        </div>
      </div>
    </section>
  );

  function focusUserImage(newFocusedImg: React.RefObject<HTMLImageElement>) {
    focusedImage.current?.classList.remove("w-32", "h-32");
    focusedImage.current?.classList.add("w-16", "h-16");
    newFocusedImg.current?.classList.remove("w-16", "h-16");
    newFocusedImg.current?.classList.add("w-32", "h-32");

    switch (focusedImage) {
      case img1ref: {
        focusedImage.current?.classList.remove("translate-x-[calc(50%+8px)]");
        img2ref.current?.classList.remove("-translate-x-[calc(200%+8px)]");
        if (newFocusedImg == img3ref) {
          newFocusedImg.current?.classList.add("-translate-x-[calc(50%+8px)]");
        }
      }

      case img2ref: {
        if (newFocusedImg == img1ref) {
          img1ref.current?.classList.add("translate-x-[calc(50%+8px)]");
          focusedImage.current?.classList.add("-translate-x-[calc(200%+8px)]");
        } else if (newFocusedImg == img3ref) {
          img3ref.current?.classList.add("-translate-x-[calc(50%+8px)]");
          img2ref.current?.classList.add("translate-x-[calc(200%+8px)]");
        }
        break;
      }

      case img3ref: {
        img2ref.current?.classList.remove("translate-x-[calc(200%+8px)]");
        focusedImage.current?.classList.remove("-translate-x-[calc(50%+8px)]");
        if (newFocusedImg == img1ref) {
          img1ref.current?.classList.add("translate-x-[calc(50%+8px)]");
          img2ref.current?.classList.add("-translate-x-[calc(200%+8px)]");
        }
        break;
      }
    }
    setFocusedImage(newFocusedImg);
  }

  function showFeedback(feedback: feedback) {
    paragraphRef.current?.classList.add("opacity-0");
    setTimeout(() => {
      setCurrentFeedback(feedback);
      paragraphRef.current?.classList.remove("opacity-0");
    }, 800);
  }
}

export default Testimonial;
