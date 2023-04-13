import { JackInTheBox, Slide } from "react-awesome-reveal";
import SectionText from "./SectionText";
import SocialIcons from "./SocialIcons";

function Contact() {
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
          all your questions and provide any information you need. Fill the form, and we will call you back"
          />
        </Slide>
        <Slide direction="up" delay={1000} triggerOnce >
          <SocialIcons />
        </Slide>
      </div>
      <JackInTheBox triggerOnce delay={1000} duration={1500} className="md:w-[48%] max-w-[500px] mt-10">
        <form className=" bg-dark p-4 lg:p-8 rounded-xl flex flex-col text-xl gap-4 mt-10 md:mt-0 ">
          <label className="flex flex-col gap-1 ">
            Name
            <input
              type="text"
              placeholder="Enter name"
              className="px-3 py-2 rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2"
            ></input>
          </label>
          <label className="flex flex-col gap-1">
            Phone
            <input
              type="tel"
              placeholder="Enter phone number"
              className="px-3 py-2 rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2"
            ></input>
          </label>

          <label className="flex flex-col gap-1">
            Question
            <textarea
              placeholder="Enter question"
              className="px-3 py-2 text- rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2 h-36
             resize-none"
            ></textarea>
          </label>
          <button className="w-36 p-2 bg-button text-link rounded-md mt-3 block m-auto">
            Submit
          </button>
        </form>
      </JackInTheBox>
    </div>
  );
}

export default Contact;
