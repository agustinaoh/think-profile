import React from "react";
// import Edit from "../img/edit.svg";
// import Delete from "../img/delete.svg";
import Quotes from "../img/element-2.svg";
import { Avatar } from "./Avatar";
import Background from "../img/bg.webp";

export const UserProfile = ({ user, setIsFormShown, setUser }) => {
  const skillsArray = user.skills
    .split(",") /* separate by commas */
    .filter((skill) => skill.length > 0) /* remove empty strings */
    .map((skill) => skill.trim()); /* remove extra spaces from strings */

  const skills = skillsArray.map((skill) => (
    <p
      className="whitespace-nowrap rounded-full border-2 border-white px-4 py-1 mr-2 italic"
      key={skill}
    >
      # {skill}
    </p>
  ));

  const experience = user.experience === "1" ? "year" : "years";

  return (
    <>
      {/* Background image */}
      <div
        className="w-9/12 h-4/5 right-0 absolute bg-cover	bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div
        id="userCard"
        className="bg-white bg-opacity-20 text-white w-2/3 p-8 relative flex items-start rounded-2xl"
      >
        {/* Content section */}
        <div>
          <div className="mb-10">
            <p className="uppercase font-black text-5xl">
              {user.name} {user.lastName}
            </p>
            <div className="flex items-end">
              {user.field && (
                <p className="italic text-3xl capitalize mr-3">
                  {user.field} /
                </p>
              )}
              {user.experience && (
                <p className="text-xl mr font-light">
                  Experiece: {user.experience} {experience}
                </p>
              )}
            </div>
          </div>
          <div className="">
            {user.city && <p className="font-bold text-2xl">*{user.city}</p>}
            <p className="text-xl">{user.email}</p>
          </div>

          {/* Bio */}
          {user.bio && (
            <div className="my-20 flex items-start">
              <img src={Quotes} alt="Quotes" className="mr-6" />
              <div>
                <p className="font-extrabold text-2xl">ABOUT ME</p>
                <p className="text-xl">{user.bio}</p>
              </div>
            </div>
          )}
          {skills && <div className="inline-flex">{skills}</div>}
          <div className="absolute bottom-8 right-8">
            {/* <button
              type="button"
              className="mr-4"
              onClick={() => setIsFormShown(true)}
            >
              <img src={Edit} alt="Edit" />
            </button> */}
            <button
              type="button"
              onClick={() =>
                setUser({
                  name: "",
                  lastName: "",
                  email: "",
                  city: "",
                  bio: "",
                  field: "",
                  experience: "",
                  skills: "",
                })
              }
            >
              {/* <img src={Delete} alt="Delete" /> */}Start again
            </button>
          </div>
        </div>
        <Avatar />
      </div>
    </>
  );
};
