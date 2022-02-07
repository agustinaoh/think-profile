import React from "react";

export const UserForm = ({ setUser, setIsModalShown }) => {
  const inputStyle = "my-2";

  const testUser = {
    name: "Agustina",
    lastName: "Oh",
    email: "aaagus@gmail.com",
    city: "Barcelona, Spain",
    bio: "Cats, coffe and sudoku lover",
    field: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  };

  const handleSubmit = () => {
    setIsModalShown(false);
    setUser(testUser);
  };
  return (
    <div className="bg-red-50 z-20 w-2/3 p-8 absolute">
      <button
        onClick={() => setIsModalShown(false)}
        className="hover:cursor right-8 absolute"
      >
        X
      </button>
      <h3 className="text-xl font-bold mb-6">Let's create your profile</h3>
      <form className="">
        <div className={inputStyle}>
          <label className="mr-2">Name</label>
          <input type="text" />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Last Name</label>
          <input type="text" />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Email</label>
          <input type="email" />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">City of residence</label>
          <input />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Short Bio</label>
          <textarea />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Field</label>
          <input />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Skills</label>
          <textarea />
        </div>
        <button
          className="px-8 py-4 bg-red-400 hover:cursor"
          onClick={handleSubmit}
        >
          Build it now!
        </button>
      </form>
    </div>
  );
};
