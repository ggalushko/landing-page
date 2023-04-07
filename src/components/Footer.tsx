import React from "react";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="py-14">
      <figure className="w-full h-1 bg-dark my-6"></figure>
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
        <p className=" text-xl text-shadowed text-center mt-5">
          {" "}
          2077. All rights reserved. <br />
          Robotica LTC, Japan, Tokyo, Kagaku-teki 1234
          <br />+ 1 (2345) 1932 020
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 h-10 mt-10 sm:mt-0">
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
    </footer>
  );
}

export default Footer;
