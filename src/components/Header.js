import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="absolute w-full bg-black pl-28 mb-2 z-50 opacity-80 flex justify-between">
        <img
          className="w-48"
          alt="Netflix-Logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
        {user && (
          <div className="flex justify-between content-center items-center pr-3">
            <img
              alt="Profile-Img"
              className="h-10 w-10 mx-2 rounded-md"
              src={user?.photoURL}
            />
            <button
              onClick={handleSignOut}
              className="bg-[#e50900] rounded-md p-2 mx-2 text-white"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
