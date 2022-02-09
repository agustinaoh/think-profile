import React from "react";
import Image from "../img/element-1.svg";
import Background from "../img/bg.jpeg";

export const UserForm = ({ user, setUser, setIsFormShown }) => {
  const inputStyle = "my-2 w-full py-2 px-4 focus:outline-none";

  const handleSubmit = () => {
    setIsFormShown(false);
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
    <>
      {/* Background image */}
      <div
        className="w-3/5 h-full right-0 absolute"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="grid grid-cols-8 z-1 w-full">
        <div className="z-10 p-8 col-start-2 col-span-3 bg-thinkprofile-bg">
          {/* Close button */}
          <button
            onClick={() => setIsFormShown(false)}
            className="hover:cursor right-8 absolute"
            type="button"
          >
            X
          </button>
          {/* Header */}
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
            <p className="text-white">What's your field?</p>
            <div className="flex justify-between py-2 pr-2 text-white">
              <label>
                <input
                  type="radio"
                  id="frontend"
                  name="field"
                  value="frontend"
                  checked={user.field === "frontend"}
                  onChange={handleChange}
                  className="mr-3"
                />
                Frontend
              </label>
              <label>
                <input
                  type="radio"
                  id="backend"
                  name="field"
                  value="backend"
                  checked={user.field === "backend"}
                  onChange={handleChange}
                  className="mr-3"
                />
                Backend
              </label>

              <label>
                <input
                  type="radio"
                  id="data"
                  name="field"
                  value="data"
                  checked={user.field === "data"}
                  onChange={handleChange}
                  className="mr-3"
                />
                Data
              </label>

              <label>
                <input
                  type="radio"
                  id="mobile"
                  name="field"
                  value="mobile"
                  checked={user.field === "mobile"}
                  onChange={handleChange}
                  className="mr-3"
                />
                Mobile
              </label>
            </div>
            <div>
              {/* <label className="mr-2">Years of experience</label> */}
              <input
                className={inputStyle}
                type="text"
                autoComplete="off"
                placeholder="How many years of awesomeness?"
                name="experience"
                value={user.experience}
                onChange={handleChange}
              />
            </div>
            <div className={`flex flex-col`}>
              <textarea
                className={inputStyle}
                placeholder="What are your skills? Don't be shy"
                name="skills"
                value={user.skills}
                onChange={handleChange}
              />
              {/* <label className="mr-2">Skills</label> */}
              <small className="text-thinkprofile-aqua">
                (Make a comma separated list)
              </small>
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
      </div>
    </>
  );
};
