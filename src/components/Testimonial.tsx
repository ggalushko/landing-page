import { useRef, useState } from "react";
import { feedbacks } from "../data/feedbacks.json";
import { Fade } from "react-awesome-reveal";
import { Feedback } from "../types/Feedback";
import { ImageRefsSignature } from "../types/imageRefsSignature";

export function Testimonial() {
  const [currentFeedback, setCurrentFeedback] = useState(feedbacks[1]);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const img1ref = useRef<HTMLImageElement>(null);
  const img2ref = useRef<HTMLImageElement>(null);
  const img3ref = useRef<HTMLImageElement>(null);

  const imageRefs: ImageRefsSignature = {
    1: img1ref,
    2: img2ref,
    3: img3ref,
  };
  const [focusedImage, setFocusedImage] = useState(img2ref);

  return (
    <Fade delay={700} triggerOnce>
      <section
        className="mt-16 sm:mt-48 flex flex-col items-center gap-16"
        id="feedback"
      >
        <div className="flex gap-2 justify-center items-center h-32">
          {feedbacks.map((feedback, index) => {
            return (
              <img
                key={feedback.name}
                src={`./assets/images/face-${index + 1}.png`}
                ref={imageRefs[index + 1]}
                className={
                  index == 1
                    ? "w-32 h-32 rounded-full transition-all duration-1000 cursor-pointer"
                    : `w-16 h-16 rounded-full transition-all duration-1000 cursor-pointer opacity-50`
                }
                onClick={() => {
                  focusUserImage(imageRefs[index + 1]);
                  showFeedback(feedback);
                }}
              ></img>
            );
          })}
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
    </Fade>
  );

  function focusUserImage(newFocusedImg: React.RefObject<HTMLImageElement>) {
    if (newFocusedImg == focusedImage) return;
    focusedImage.current?.classList.remove("w-32", "h-32");
    focusedImage.current?.classList.add("w-16", "h-16", "opacity-50");
    newFocusedImg.current?.classList.remove("w-16", "h-16", "opacity-50");
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

  function showFeedback(feedback: Feedback) {
    paragraphRef.current?.classList.add("opacity-0");
    setTimeout(() => {
      setCurrentFeedback(feedback);
      paragraphRef.current?.classList.remove("opacity-0");
    }, 800);
  }
}
