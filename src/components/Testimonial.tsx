// Feedback 1:
// "I can't thank [Company Name] enough for the amazing robotic prosthetic limb they created for me. The customization options were perfect for my needs and the AI module has greatly improved my control and mobility. I highly recommend this company to anyone in need of a prosthetic limb."

// Feedback 2:
// "I was blown away by the quality of the prosthetic limb I received from [Company Name]. It's comfortable to wear and has held up to all of my daily activities. The customer service was exceptional and they helped guide me through the entire process. I couldn't be happier with my purchase."

// Feedback 3:
// "As an athlete, finding a prosthetic limb that could keep up with my level of activity was essential. [Company Name] delivered exactly what I needed with their sports prosthetic limb. The range of motion and control is incredible and it's helped me to excel in my sport. Thank you, [Company Name]!"

function Testimonial() {
  return (
    <section className="mt-16 sm:mt-48 flex flex-col items-center gap-16">
      <div className="flex gap-2 sm:gap-10 justify-center items-center">
        <img
          src="../../src/assets/images/face-1.png"
          className="w-16 h-16 rounded-full bg-white"
        ></img>
        <img
          src="../../src/assets/images/face-2.png"
          className="w-32 h-32 rounded-full bg-white"
        ></img>
        <img
          src="../../src/assets/images/face-3.png"
          className="w-16 h-16 rounded-full bg-white"
        ></img>
      </div>
      <p className="text-xl md:text-3xl font-bold max-w-[820px] text-center">
        Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is indeed a
        text, Yes, it is indeed a text, Yes, it is indeed a text, Yes, it is
        indeed a text,
      </p>
      <div className="flex flex-col mt-4 gap-2 items-center">
        <p className="text-xl">Name</p>
        <p className="text-secondary">@sociallink</p>
      </div>
    </section>
  );
}

export default Testimonial;
