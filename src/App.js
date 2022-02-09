import React, { useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserProfile } from "./components/UserProfile";
import Logo from "./img/logo.svg";
// import Background from "./img/bg.jpeg";

function App() {
  // const agus = {
  //   name: "Agustina",
  //   lastName: "Ohan",
  //   email: "agustinaoh.dev@gmail.com",
  //   city: "Barcelona, Spain",
  //   bio: "“Innovative Front End Developer with 5 years experience building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, jQuery, JavaScript and Angualr; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Adobe Photoshop & Sketch.“",
  //   field: "Frontend",
  //   experience: "> 1 year",
  //   skills: "coffee, code, sleep, repeat",
  // };
  const emptyUser = {
    name: "",
    lastName: "",
    email: "",
    city: "",
    bio: "",
    field: "",
    experience: "",
    skills: "",
  };

  const [isModalShown, setIsModalShown] = useState(false);
  const [user, setUser] = useState(emptyUser);

  const isEmpty = Object.values(user).every((x) => x === "" || x === null);
  const originalLayout = isModalShown || (!isModalShown && !isEmpty);

  return (
    <div className="flex flex-col h-full items-center justify-center bg-thinkprofile-bg text-gray-700">
      <img
        src={Logo}
        alt="ThinkProfile"
        className={
          /* it's only shown at full size on first screen, when modal is closed and user is not defined */
          originalLayout ? "w-40 absolute left-8 top-8" : "w-90 mb-12"
        }
      />

      {!originalLayout && (
        <span className="text-4xl font-light text-white">
          Your professional profile, in a few clicks.
        </span>
      )}
      <div className="h-36"></div>

      {/* If the user has no values, show the Build button */}
      {isEmpty ? (
        <>
          {/* <h2>Welcome, let's start</h2> */}
          <button
            type="button"
            className="px-12 py-4 font-medium text-xl bg-thinkprofile-pink hover:cursor hover:bg-thinkprofile-red text-white"
            style={{ letterSpacing: "1px" }}
            onClick={() => setIsModalShown(true)}
          >
            Build your profile
          </button>
        </>
      ) : (
        // else if there's a user, show the UserCard (but not when the modal is opened!)
        !isModalShown &&
        !isEmpty && (
          <UserProfile
            user={user}
            setIsModalShown={setIsModalShown}
            setUser={setUser}
          />
        )
      )}

      {/* Opened modal */}
      {isModalShown && (
        <UserForm
          setIsModalShown={setIsModalShown}
          setUser={setUser}
          user={user}
        />
      )}
    </div>
  );
}

export default App;
