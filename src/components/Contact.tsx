import SocialIcons from "./SocialIcons";

function Contact() {
  return (
    <div className="mt-40 flex flex-col md:flex-row justify-between">
      <div className="md:w-[40%] flex flex-col gap-14">
        <h2 className=" text-4xl font-bold">Any questions left?</h2>
        <p className=" text-xl text-shadowed">
          Feel free to contacts us if you want more information. We would be
          glad to help you learn more about our products
        </p>
        <SocialIcons/>
      </div>
      <form className=" bg-dark p-4 lg:p-8 rounded-xl flex flex-col md:w-[48%] text-xl gap-4 mt-10 md:mt-0">
        <label className="flex flex-col gap-1"> Name
            <input type="text"  placeholder="Enter name" 
            className="px-3 py-2 rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2"></input>
        </label>
        <label className="flex flex-col gap-1"> Email
            <input type="email" placeholder="Enter email"
            className="px-3 py-2 rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2"></input>
        </label>
        <label className="flex flex-col gap-1"> Question
            <textarea  placeholder="Enter question"
            className="px-3 py-2 text- rounded-lg bg-transparent border border-secondary border-opacity-60 mt-2 h-36
             resize-none"></textarea>
        </label>
        <button className="w-36 p-2 bg-button text-link rounded-md mt-3 block m-auto">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
