function Contact() {
  return (
    <div className="mt-40 flex flex-col md:flex-row justify-between">
      <div className="md:w-[40%] flex flex-col gap-14">
        <h2 className=" text-4xl font-bold">Any questions left?</h2>
        <p className=" text-xl text-shadowed">
          Feel free to contacts us if you want more information. We would be
          glad to help you learn more about our products
        </p>
        <div className="flex gap-5">
          <a href="https://www.facebook.com" target="_blank" rel="noopener">
            <img src="../src/assets/images/facebook.png" alt="facebook logo" className="w-10 h-10 bg-center bg-contain 
            grayscale hover:grayscale-0 transition-[filter] duration-300"/>
          </a>
          <a href="https://www.telegram.org" target="_blank" rel="noopener">
            <img src="../../src/assets/images/telegram.png" alt="telegram logo" className="w-10 h-10 bg-center bg-contain
            grayscale hover:grayscale-0 transition-[filter] duration-300"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener">
            <img src="../../src/assets/images/twitter.png" alt="twitter logo" className="w-10 h-10 bg-center bg-contain
            grayscale hover:grayscale-0 transition-[filter] duration-300"/>
          </a>
        </div>
      </div>
      <form className=" bg-dark p-8 rounded-xl flex flex-col md:w-[48%] text-xl gap-4 mt-10 md:mt-0">
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
