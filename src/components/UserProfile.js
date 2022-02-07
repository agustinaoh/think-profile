import React from "react";

export const UserProfile = ({ user, setIsModalShown, setUser }) => {
  const skills = user.skills.map((skill) => (
    <p className="rounded-full bg-gray-300 px-1" key={skill}>
      #{skill}
    </p>
  ));

  const restart = () => {
    // setIsModalShown(true);
    setUser(null);
  };

  return (
    <div className="bg-blue-50 w-2/3 p-8">
      <p>
        {user.name} {user.lastName}
      </p>
      <p>{user.field}</p>
      <p>{user.email}</p>
      <p>{user.city}</p>
      <p>{user.bio}</p>
      <div className="inline-flex">{skills}</div>
      <button
        className="px-8 py-4 border border-red-300 hover:cursor mt-4"
        onClick={restart}
      >
        Restart your profile
      </button>
    </div>
  );
};
