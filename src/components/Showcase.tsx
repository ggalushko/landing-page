import { Slide, Zoom } from "react-awesome-reveal";
import { SectionText } from "./SectionText";
import { ShowcaseCard } from "./ShowcaseCard";
import { ActionButton } from "./ActionButton";
import { cards } from "../data/cards.json";

export function Showcase() {
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
          {cards.map((card) => (
            <ShowcaseCard key={card.header} {...card} />
          ))}
        </Zoom>
      </div>
      <div className="mx-auto w-fit">
        <ActionButton text="Checkout" />
      </div>
    </section>
  );
}
