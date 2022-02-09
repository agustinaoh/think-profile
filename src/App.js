import React, { useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserProfile } from "./components/UserProfile";
import Logo from "./img/logo.svg";
import { Footer } from "./components/Footer";
import { DefaultLayout } from "./components/DefaultLayout";

function App() {
  // const agus = {
  //   name: "Agustina",
  //   lastName: "Ohan",
  //   email: "agustinaoh.dev@gmail.com",
  //   city: "Barcelona, Spain",
  //   bio: "“Innovative Front End Developer with 1 year of experience building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, JavaScript and React; plus modern libraries and frameworks. Passionate about usability and possess professional knowledge of Adobe Photoshop & Figma.“",
  //   field: "Frontend",
  //   experience: "> 1 year",
  //   skills: "coffee, code, sleep, repeat",
  //   avatarIndex: 1,
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

  const [isFormShown, setIsFormShown] = useState(false);
  const [user, setUser] = useState(emptyUser);

  const isEmpty = Object.values(user).every((x) => x === "" || x === null);
  const secondaryLayout = isFormShown || (!isFormShown && !isEmpty);

  return (
    <div className="flex flex-col h-full items-center justify-center bg-thinkprofile-bg text-gray-700">
      {!secondaryLayout ? (
        <DefaultLayout setIsFormShown={setIsFormShown} />
      ) : (
        <>
          <img
            src={Logo}
            alt="ThinkProfile"
            className="w-40 absolute left-8 top-8"
          />
          <Footer />
        </>
      )}

      {
        // if there's a user, show the UserCard (but not when the modal is opened!)
        !isFormShown && !isEmpty && (
          <UserProfile
            user={user}
            setIsFormShown={setIsFormShown}
            setUser={setUser}
          />
        )
      }

      {/* Opened form */}
      {isFormShown && (
        <UserForm
          setIsFormShown={setIsFormShown}
          setUser={setUser}
          user={user}
        />
      )}
    </div>
  );
}

export default App;
