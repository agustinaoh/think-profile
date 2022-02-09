import React from "react";
import Heart from "../img/heart.svg";

export const Footer = () => {
  return (
    <footer className="flex w-full text-thinkprofile-aqua absolute bottom-0 p-8">
      <small>made with</small>
      <img src={Heart} alt="Love" className="mx-2" />
      <small>
        <a href="https://github.com/agustinaoh">by Agustina Oh.</a>
      </small>
    </footer>
  );
};
