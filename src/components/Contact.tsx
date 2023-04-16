import { JackInTheBox, Slide, Fade } from "react-awesome-reveal";
import SectionText from "./SectionText";
import SocialIcons from "./SocialIcons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showAlert, hideAlert } from "../store/alertSlice";

function Contact() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    question: "",
  });
  const inputsValidity = {
    name: inputValues.name.length > 0,
    email: inputValues.email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    ),
    question: inputValues.question.length > 5,
  };
  const formIsValid =
    inputsValidity.name && inputsValidity.question && inputsValidity.email;
  const inputClass =
    "px-3 py-2 mt-2 rounded-lg bg-transparent border-opacity-60 focus:outline-none";
  const dispatch = useDispatch()
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
        <form className=" bg-dark p-4 lg:p-8 rounded-xl flex flex-col text-xl gap-4 mt-10 md:mt-0 ">
          <label className="flex flex-col gap-1 ">
            Name
            <input
              required
              value={inputValues.name}
              type="text"
              placeholder="Enter name"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value.match(/^([a-z|а-я|\s])*$/i))
                  setInputValues({ ...inputValues, name: e.target.value });
              }}
              className={`${inputClass} ${
                inputsValidity.name
                  ? "border border-green-600"
                  : "border border-secondary"
              }`}
            ></input>
          </label>
          <label className="flex flex-col gap-1">
            Email
            <input
              required
              value={inputValues.email}
              type="email"
              placeholder="yourname@mail.com"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputValues({ ...inputValues, email: e.target.value });
              }}
              className={`${inputClass} ${
                inputsValidity.email
                  ? "border border-green-600"
                  : "border border-secondary"
              }`}
            ></input>
          </label>

          <label className="flex flex-col gap-1">
            Question
            <textarea
              required
              value={inputValues.question}
              placeholder="Enter question"
              onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setInputValues({ ...inputValues, question: e.target.value });
              }}
              className={`px-3 py-2 text- rounded-lg bg-transparent border-opacity-60 mt-2 h-36
             resize-none focus:outline-none ${
               inputsValidity.question
                 ? "border border-green-600"
                 : "border border-secondary"
             }`}
            ></textarea>
          </label>
          <button
            className={`w-36 p-2 bg-button font-semibold rounded-md mt-3 block m-auto 
          hover:scale-105 transition-transform duration-500 ${
            formIsValid ? "" : " pointer-events-none opacity-50"
          }`}
            onClick={(e) => {
              e.preventDefault();
              setInputValues({
                name: "",
                question: "",
                email: "",
              });
              dispatch(showAlert())
               setTimeout(() => {
                dispatch(hideAlert())
               }, 3000);
            }}
          >
            Submit
          </button>
        </form>
      </JackInTheBox>
    </div>
  );
}

export default Contact;
