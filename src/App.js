import React, { useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserProfile } from "./components/UserProfile";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    city: "",
    bio: "",
    field: "",
    experience: "",
    skills: "",
  });

  const isEmpty = Object.values(user).every((x) => x === "" || x === null);

  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
      <h1 className="text-6xl font-thin tracking-wider">ThinkProfile</h1>
      <div className="h-36"></div>

      {/* If the user has no values, show the Build button */}
      {isEmpty ? (
        <>
          <h2>Welcome, let's start</h2>
          <button
            type="button"
            className="px-8 py-4 bg-red-400 hover:cursor"
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
