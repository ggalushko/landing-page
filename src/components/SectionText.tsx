import React from "react";
type props = {
  header: string,
  text: string
}
function SectionText({header, text}: props) {
  return (
    <div className="max-w-[700px] mx-auto text-center">
      <h2 className="text-4xl sm:text-5xl font-bold">
        {header}
      </h2>
      <p className="text-secondary font-medium text-xl mt-10">
        {text}
      </p>
    </div>
  );
}

export default SectionText;
