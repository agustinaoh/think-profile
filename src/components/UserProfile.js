import React from "react";

export const UserProfile = ({ user, setIsModalShown, setUser }) => {
  const skillsArray = user.skills.split(",").map((skill) => skill.trim());
  const skills = skillsArray.map((skill) => (
    <p className="rounded-full bg-gray-300 px-4 py-1 mr-2" key={skill}>
      #{skill}
    </p>
  ));

  return (
    <div className="bg-blue-50 w-2/3 p-8">
      <p>
        {user.name} {user.lastName}
      </p>
      {user.field && <p>Field: {user.field}</p>}
      {user.experience && <p>Years experiece: {user.experience}</p>}
      <p>{user.email}</p>
      <p>{user.city}</p>
      <p>{user.bio}</p>
      {/* <div className="inline-flex">{user.skills}</div> */}
      <div className="inline-flex">{skills}</div>
      <button
        type="button"
        className="px-8 py-4 border border-red-300 hover:cursor mt-4 block"
        onClick={() => setIsModalShown(true)}
      >
        Edit your profile
      </button>
      <button
        type="button"
        className="px-8 py-4 border border-red-300 hover:cursor mt-4 block"
        onClick={() => setUser({})}
      >
        Restart
      </button>
    </div>
  );
};
