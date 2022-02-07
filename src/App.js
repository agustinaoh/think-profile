import React, { useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserProfile } from "./components/UserProfile";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="flex flex-col h-full items-center justify-center bg-gray-200 text-gray-700">
      <h1 className="text-6xl font-thin tracking-wider">ThinkProfile</h1>
      <h2>Welcome, let's start</h2>
      <div className="h-36"></div>
      {!user ? (
        <button
          className="px-8 py-4 bg-red-400 hover:cursor"
          onClick={() => setIsModalShown(true)}
        >
          Build your profile
        </button>
      ) : (
        <UserProfile
          user={user}
          setIsModalShown={setIsModalShown}
          setUser={setUser}
        />
      )}
      {isModalShown && (
        <UserForm setIsModalShown={setIsModalShown} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
