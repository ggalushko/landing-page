import { Fade } from "react-awesome-reveal";
import { ActionButton } from "./ActionButton";

export function CallToAction() {
  return (
    <Fade delay={1000} triggerOnce>
      <section
        className="bg-dark flex flex-col gap-8 sm:gap-14 rounded-3xl px-2 xs:px-10 py-5  
    items-center text-center max-w-screen-xl mx-auto mt-20"
        id="about"
      >
        <h2 className="text-4xl sm:text-5xl font-bold">
          Transforming Lives, <br /> One Prosthetic at a Time.
        </h2>
        <p className=" xs:text-xl text-shadowed md:w-5/6 xs:leading-8">
          Discover the Comfort and Functionality of Robotic Prosthetics with
          Robotica. Our team of experts is dedicated to creating prosthetic
          limbs that are not only advanced in their technology but are also
          comfortable and functional. We understand the importance of finding a
          prosthetic limb that fits your body and your lifestyle, which is why
          we offer a range of customizable options. From the size and shape of
          the limb to the level of functionality and control, our prosthetic
          limbs can be tailored to your unique needs. Join us in experiencing
          the future of prosthetics and take the first step towards transforming
          your life today
        </p>
        <ActionButton text="Experience" />
      </section>
    </Fade>
  );
}
