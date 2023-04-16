import { Slide, Zoom } from "react-awesome-reveal";
import SectionText from "./SectionText";
import ShowcaseCard from "./ShowcaseCard";
import ActionButton from "./ActionButton";

function Showcase() {
  return (
    <section className="mt-32" id="advantages">
      <Slide duration={1500} delay={1000} triggerOnce>
        <SectionText
          header="Experience the Future of Mobility"
          text="Robotica is dedicated to transforming the lives of individuals with our advanced and customizable robotic prosthetics. 
        With our commitment to quality and innovation, we have become a trusted leader in the industry"
        />
      </Slide>
      <div className="flex gap-10 flex-wrap justify-center mt-12 sm:mt-24 mb-10">
        <Zoom duration={1500} delay={700} cascade triggerOnce>
          <ShowcaseCard
            imgSrc="/assets/images/factory.jpg"
            imgCaption="Factories in Tokyo"
            header="Quality control"
            text="At Robotica, we take great pride in the quality of our robotic prostheses. 
          Our products are made using the latest technology and materials, ensuring durability and comfort for our customers. 
          We use rigorous testing and quality control measures to ensure that each product meets our high standards."
          />
          <ShowcaseCard
            imgSrc="/assets/images/ai.jpg"
            imgCaption="The best AI"
            header="AI modules"
            text="Our robotic prostheses are equipped with AI modules, which can learn and adapt to the user's movements over time, 
          providing a more natural and intuitive experience. With our AI modules, you can experience a level of control 
          and functionality that was previously unavailable in traditional prostheses."
          />
          <ShowcaseCard
            imgSrc="/assets/images/customization.jpg"
            imgCaption="The entire universe of options"
            header="Customization"
            text="We understand that every individual's needs and preferences are unique. 
          That's why we offer a range of customizable options for our robotic prostheses. 
          From the size and shape of the limb to the level of functionality and control, we can tailor our products to match your
           specific requirements. "
          />
        </Zoom>
      </div>
      <div className="mx-auto w-fit">
        <ActionButton text="Checkout" />
      </div>
    </section>
  );
}

export default Showcase;
