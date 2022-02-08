import React from "react";
import Image from "../img/element-1.svg";

export const UserForm = ({ user, setUser, setIsModalShown }) => {
  const inputStyle = "my-2 w-full py-2 px-4 focus:outline-none";

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
    <div className="bg-thinkprofile-bg z-20 w-2/3 p-8 absolute">
      <button
        onClick={() => setIsModalShown(false)}
        className="hover:cursor right-8 absolute"
        type="button"
      >
        X
      </button>
      <div className="flex items-end mb-8">
        <img src={Image} alt="decorative element" className="w-12 mr-6" />
        <h3 className="text-xl font-black text-white">
          Show us your awesomeness.
        </h3>
      </div>
      <form className="">
        <div>
          {/* <label className="mr-2">Name</label> */}
          <input
            className={inputStyle}
            type="text"
            autoComplete="off"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          {/* <label className="mr-2">Last Name</label> */}
          <input
            className={inputStyle}
            type="text"
            autoComplete="off"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label className="mr-2">Email</label> */}
          <input
            className={inputStyle}
            type="email"
            autoComplete="off"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label className="mr-2">City of residence</label> */}
          <input
            className={inputStyle}
            type="text"
            autoComplete="off"
            placeholder="City"
            name="city"
            value={user.city}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label className="mr-2">Short Bio</label> */}
          <textarea
            className={inputStyle}
            placeholder="Tell us about you..."
            name="bio"
            value={user.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label className="mr-2">Field</label> */}
          <select
            className={inputStyle}
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
        <div>
          {/* <label className="mr-2">Years of experience</label> */}
          <input
            className={inputStyle}
            type="text"
            autoComplete="off"
            placeholder="Last Name"
            name="experience"
            value={user.experience}
            onChange={handleChange}
          />
        </div>
        <div className={`flex flex-col`}>
          {/* <label className="mr-2">Skills</label> */}
          <small className="text-thinkprofile-aqua">
            (Comma separated list)
          </small>
          <textarea
            className={inputStyle}
            placeholder="Don't be shy"
            name="skills"
            value={user.skills}
            onChange={handleChange}
          />
        </div>
        <button
          className="px-12 py-3 mt-4 font-medium text-lg w-full bg-thinkprofile-blue hover:cursor hover:bg-thinkprofile-aqua hover:text-thinkprofile-blue text-white"
          onClick={handleSubmit}
          type="submit"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};
