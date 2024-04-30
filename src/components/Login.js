import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateUserData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            photoURL: "https://avatars.githubusercontent.com/Patil-Umesh",
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
              navigate("/browse");
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
          console.log(user);
          navigate("/browse");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
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
