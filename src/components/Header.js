import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANG } from "../utils/constants";
import { toggleSearchPage } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const searchView = useSelector((store) => store.gpt.toggleSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        const notify = () => toast("Signed Out Successfully !");
        notify();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const toggleSearch = () => {
    dispatch(toggleSearchPage());
  };
  const getLanguage = (e) => {
    const lang = e.target.value;
    dispatch(changeLanguage(lang));
  };
  return (
    <>
      <div className="absolute w-full bg-black pl-28 mb-2 z-50 flex justify-between">
        <img
          className="w-48 cursor-pointer"
          alt="Netflix-Logo"
          src={LOGO_URL}
        />
        {user && (
          <div className="flex justify-between content-center items-center pr-3">
            {searchView && (
              <select
                onChange={getLanguage}
                className="bg-purple-700 rounded-md py-1 px-2 mx-2 text-white hover:opacity-85"
              >
                {SUPPORTED_LANG.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}{" "}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={toggleSearch}
              className="bg-purple-700 rounded-md p-2 mx-2 text-white hover:opacity-85"
            >
              {searchView ? "Go Home" : "Search Your Favourite"}
            </button>
            <img
              alt="Profile-Img"
              className="h-10 w-10 mx-2 rounded-md cursor-pointer"
              src={user?.photoURL}
            />
            <button
              onClick={handleSignOut}
              className="bg-[#e50900] rounded-md p-2 mx-2 text-white hover:opacity-85"
            >
              Sign Out
            </button>
            <ToastContainer position="bottom-right" />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
