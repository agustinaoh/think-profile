import React from "react";
import Background from "../img/bg.webp";
import Logo from "../img/logo.svg";

export const DefaultLayout = ({ setIsFormShown }) => {
  return (
    <div className="w-full h-2/5 flex">
      {/* Right section */}
      <div className="w-2/5 h-full flex flex-col items-start justify-between pl-20 pr-16">
        <img src={Logo} alt="ThinkProfile" className="w-96 mb-12" />
        <span className="text-4xl font-light text-white">
          Your professional profile, in a few clicks.
        </span>

        <button
          type="button"
          className="px-12 py-4 font-medium text-xl bg-thinkprofile-green hover:cursor hover:bg-thinkprofile-pink text-white"
          style={{ letterSpacing: "1px" }}
          onClick={() => setIsFormShown(true)}
        >
          Build your profile
        </button>
      </div>
      {/* Image section */}
      <div
        className="w-3/5 h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
    </div>
  );
};
