import React from "react";
import Heart from "../img/heart.svg";

export const Footer = () => {
  return (
    <footer className="flex w-full text-thinkprofile-aqua absolute bottom-0 p-8">
      <small>made with</small>
      <img src={Heart} alt="Love" className="mx-2" />
      <small>
        <a
          href="https://github.com/agustinaoh"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          by Agustina Oh.
        </a>
      </small>
    </footer>
  );
};

// const openInNewTab = (url) => {
//   const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
//   if (newWindow) newWindow.opener = null
// }

// onClick={() => openInNewTab("https://github.com/agustinaoh")}
