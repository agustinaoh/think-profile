import React from "react";

export const UserForm = ({ user, setUser, setIsModalShown }) => {
  const inputStyle = "my-2";

  const handleSubmit = () => {
    setIsModalShown(false);
    setUser(user);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="bg-red-50 z-20 w-2/3 p-8 absolute">
      <button
        onClick={() => setIsModalShown(false)}
        className="hover:cursor right-8 absolute"
        type="button"
      >
        X
      </button>
      <h3 className="text-xl font-bold mb-6">Let's create your profile</h3>
      <form className="">
        <div className={inputStyle}>
          <label className="mr-2">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={inputStyle}>
          <label className="mr-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">City of residence</label>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={user.city}
            onChange={handleChange}
          />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Short Bio</label>
          <textarea
            placeholder="Tell us about you..."
            name="bio"
            value={user.bio}
            onChange={handleChange}
          />
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Field</label>
          <select
            id="field"
            value={user.field}
            onChange={handleChange}
            name="field"
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="mobile">Mobile</option>
            <option value="data">Data</option>
          </select>
        </div>
        <div className={inputStyle}>
          <label className="mr-2">Years of experience</label>
          <input
            type="text"
            placeholder="Last Name"
            name="experience"
            value={user.experience}
            onChange={handleChange}
          />
        </div>
        <div className={`${inputStyle} flex flex-col`}>
          <label className="mr-2">Skills</label>
          <small>(Comma separated list)</small>
          <textarea
            placeholder="Don't be shy"
            name="skills"
            value={user.skills}
            onChange={handleChange}
          />
        </div>
        <button
          className="px-8 py-4 bg-red-400 hover:cursor"
          onClick={handleSubmit}
          type="submit"
        >
          Build it now!
        </button>
      </form>
    </div>
  );
};
