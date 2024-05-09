import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateUserData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PROFILE_ICON } from "../utils/constants";
import Netflixbg from "../images/netflixBG.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInAndSignUp = () => {
    const message = validateUserData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_ICON,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })

            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMessage(
            errorCode === "auth/invalid-credential"
              ? "Not a User: Please Sign Up to Login!"
              : "Invalid-Credentials"
          );
        });
    }
    const notify = () => toast("Signed In Successfully !");
    notify();
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Header />
      <div>
        <img
          alt="Netflix-BG-Logo"
          src={Netflixbg}
          className="absolute brightness-50"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 h-[600px] absolute text-white rounded-lg bg-black opacity-70 my-24 mx-[576px] py-10 px-10"
      >
        <h2 className="font-bold text-3xl my-4">
          {isSignIn ? "Sign In" : "Sign Up"}{" "}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            className="mt-4 p-3 w-full border border-white bg-gray-800 rounded-md"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="my-4 p-3 w-full border border-white bg-gray-800 rounded-md"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className=" p-3 w-full border border-white bg-gray-800 rounded-md"
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-red-600 mt-2">{errorMessage} </p>
        <button
          onClick={handleSignInAndSignUp}
          className="w-full mt-4 mb-2 p-2 bg-[#e50900] rounded-md"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <ToastContainer position="bottom-right" />
        <div className="flex justify-between my-2">
          <div className="cursor-pointer">Need Help?</div>
          <div className="cursor-pointer hover:underline">Forgot Password?</div>
        </div>
        <div className="flex my-8">
          <div className="mr-2">
            {isSignIn ? "New to Netflix?" : "Already a user?"}{" "}
          </div>
          <div
            className="cursor-pointer hover:underline"
            onClick={toggleSignIn}
          >
            {isSignIn ? "Sign up now." : "Sign in now."}
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
