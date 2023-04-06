import React from "react";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="py-14">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-7 md:gap-0">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          <img
            src="../../src/assets/images/logo.png"
            className="w-20 rounded-md bg-contain bg-center"
          ></img>
          <p className=" text-3xl pb-1 font-semibold tracking-wider">
            Robotica
          </p>
        </div>
        <SocialIcons/>
        <div className="flex items-center justify-center gap-3 h-10">
          <input
            type="email"
            placeholder="Enter email"
            className="px-3 py-2 rounded-lg bg-transparent border border-secondary border-opacity-60"
          ></input>
          <button className="w-24 p-2 bg-button text-link rounded-md block">
            Subscribe
          </button>
        </div>
      </div>
      <figure className="w-full h-1 bg-dark mt-10"></figure>

      <p className=" text-xl text-shadowed text-center mt-5">
        {" "}
        Info info. Bla bla bla. All rights reserved. <br /> Hehe hoho huhuhu
      </p>
    </footer>
  );
}

export default Footer;
