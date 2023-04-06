import SectionText from "./SectionText";
import ShowcaseCard from "./ShowcaseCard";

function Showcase() {
  return (
    <section className="mt-32">
      <SectionText />
      <div className="flex gap-10 flex-wrap justify-center mt-12 sm:mt-24">
        <ShowcaseCard />
        <ShowcaseCard />
        <ShowcaseCard />
      </div>
      <button className="w-36 p-2 bg-button text-link rounded-md mt-14 block mx-auto">
        Button text
      </button>
    </section>
  );
}

export default Showcase;
