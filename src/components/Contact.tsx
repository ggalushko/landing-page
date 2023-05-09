import { JackInTheBox, Slide, Fade } from "react-awesome-reveal";
import { SectionText } from "./SectionText";
import { SocialIcons } from "./SocialIcons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <div
      className=" mt-48 flex flex-col md:flex-row justify-between lg:justify-center lg:gap-20"
      id="contact"
    >
      <div className="md:w-[40%] flex flex-col gap-14 mt-10">
        <Slide direction="up" delay={1000} triggerOnce>
          <SectionText
            header="Any questions left?"
            text="Feel free to contact us anytime. Our specialist are available 24/7 and would be glad to answer 
          all your questions and provide any information you need. Fill the form, and we will contact you ASAP"
          />
        </Slide>
        <Fade delay={1000} triggerOnce>
          <SocialIcons />
        </Fade>
      </div>
      <JackInTheBox
        triggerOnce
        delay={1000}
        duration={1500}
        className="md:w-[48%] max-w-[500px] mt-10"
      >
        <ContactForm />
      </JackInTheBox>
    </div>
  );
}
