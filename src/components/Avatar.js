import React from "react";
import Image1 from "../img/avatars/1.jpg";
import Image2 from "../img/avatars/2.jpg";
import Image3 from "../img/avatars/3.jpg";
import Image4 from "../img/avatars/4.jpg";
import Image5 from "../img/avatars/5.jpg";
import Image6 from "../img/avatars/6.jpg";

export const Avatar = () => {
  const imagesArray = [Image1, Image2, Image3, Image4, Image5, Image6];
  const randomImage =
    imagesArray[Math.floor(Math.random() * imagesArray.length)];

  return (
    <img
      src={randomImage}
      alt="Avatar"
      className="ml-20 w-48 bg-white px-3 pt-3 pb-8"
    />
  );
};
