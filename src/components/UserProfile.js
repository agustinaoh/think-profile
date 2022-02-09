import React from "react";
import Edit from "../img/edit.svg";
import Delete from "../img/delete.svg";
import Quotes from "../img/element-2.svg";
import Avatar from "../img/avatar.png";

export const UserProfile = ({ user, setIsModalShown, setUser }) => {
  const skillsArray = user.skills
    .split(",") /* separate by commas */
    .filter((skill) => skill.length > 0) /* remove empty strings */
    .map((skill) => skill.trim()); /* remove extra spaces from strings */

  const skills = skillsArray.map((skill) => (
    <p
      className="rounded-full border-2 border-white px-4 py-1 mr-2 italic"
      key={skill}
    >
      # {skill}
    </p>
  ));

  return (
    <div className="bg-white bg-opacity-20 text-white w-2/3 p-8 relative flex items-start rounded-2xl">
      {/* Content section */}
      <div>
        <div className="mb-10">
          <p className="uppercase font-black text-5xl">
            {user.name} {user.lastName}
          </p>
          {user.field && (
            <p className="italic text-3xl capitalize">{user.field}</p>
          )}
        </div>
        <div className="">
          {user.city && <p className="font-bold text-2xl">*{user.city}</p>}
          <p className="text-xl">{user.email}</p>
        </div>
        {/* {user.experience && <p>Years experiece: {user.experience}</p>} */}

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
          <button
            type="button"
            className="mr-4"
            onClick={() => setIsModalShown(true)}
          >
            <img src={Edit} alt="Edit" />
          </button>
          <button type="button" onClick={() => setUser({})}>
            <img src={Delete} alt="Delete" />
          </button>
        </div>
      </div>
      <img src={Avatar} alt="Avatar" className="ml-20" />
    </div>
  );
};
