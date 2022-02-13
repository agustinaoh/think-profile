import React from "react";
import Image1 from "../img/avatars/1.jpg";
import Image2 from "../img/avatars/2.jpg";
import Image3 from "../img/avatars/3.jpg";
import Image4 from "../img/avatars/4.jpg";
import Image5 from "../img/avatars/5.jpg";
import Image6 from "../img/avatars/6.jpg";
import Image7 from "../img/avatars/7.jpg";
import Image8 from "../img/avatars/8.jpg";
import Image9 from "../img/avatars/9.jpg";
import Image10 from "../img/avatars/10.jpg";
import Image11 from "../img/avatars/11.jpg";
import Image12 from "../img/avatars/12.jpg";

export const Avatar = () => {
  const imagesArray = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  ];
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
