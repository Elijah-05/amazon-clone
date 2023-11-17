import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { amazon_logo_colored } from "../../assets";
import Button from "../../component/button/button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Main function component
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredential, setUserCredential] = useState({
    user_email: "",
    user_password: "",
  });
  const [loginLoad, setLoginLoad] = useState(false);
  const [signUpLoad, setSignUpLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const [disableButton, setDissableButton] = useState(false);

  const navigate = useNavigate();

  // Show/hide password input
  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  // input onChange function
  function handleUserInput(e) {
    let value = e.target.value;
    //check the invoking element and change specificaly for it
    if (e.target.name == "email") {
      setUserCredential({ ...userCredential, user_email: value });
      setErrors({ password: errors?.password });
    }
    if (e.target.name == "password") {
      setUserCredential({ ...userCredential, user_password: value });
      setErrors({ email: errors?.email });
    }
  }

  // check if the input is not empty unless invalidate and create an error message
  function validation() {
    const error = {};
    let isError = false;

    if (userCredential.user_email.trim() == "") {
      error.email = "email required!";
      isError = true;
    }

    if (userCredential.user_password.trim() == "") {
      error.password = "password required!";
      isError = true;
    }

    setErrors(error);
    return isError;
  }

  // login function
  function handleLogin(e) {
    e.preventDefault();

    if (!validation()) {
      setLoginLoad(true);
      setErrors(null);
      signInWithEmailAndPassword(
        auth,
        userCredential.user_email,
        userCredential.user_password
      )
        .then((credential) => {
          if (credential) {
            navigate("/");
            setLoginLoad(false);
          }
        })
        .catch((error) => {
          console.log("error message: ", error.message);
          setErrors({ login: "email/password input error" });
          setLoginLoad(false);
        });
    }
  }

  // create account function
  function handleCreateAccount() {
    if (!validation()) {
      setSignUpLoad(true);
      createUserWithEmailAndPassword(
        auth,
        userCredential.user_email,
        userCredential.user_password
      )
        .then(() => {
          navigate("/");
          setSignUpLoad(false);
        })
        .catch((error) => {
          console.log("Faild to create an account: ", error.message);
          setErrors({ signUp: "Unable to create account!" });
          setSignUpLoad(false);
        });
    }
  }

  return (
    <div className="w-full mt-8 grid justify-center mb-6">
      <div className=" w-28  mx-auto">
        <img src={amazon_logo_colored} alt="" />
      </div>

      <div className="border border-gray-300 rounded-lg max-w-sm  p-7 mt-2">
        <div className="">
          <h1 className=" text-3xl font-medium mb-5">Sign in</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="email" className=" block text-sm font-bold mb-1 ">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={` ${
                errors?.email
                  ? "border-2 border-red-300"
                  : "border border-gray-800 bg-blue-100"
              } w-full  h-9 rounded-md  outline-cyan-700 pr-10 outline-4 indent-2`}
              onChange={(e) => handleUserInput(e)}
            />{" "}
            <span className=" text-red-500 text-sm pl-1 mb-4">
              {errors?.email}
            </span>
            <label
              htmlFor="email"
              className=" text-sm mb-1 flex justify-between mt-4"
            >
              <span className="font-bold ">Password</span>
              <span className=" link">Forgot your password?</span>
            </label>
            <div className={`relative ${errors?.login ? "mb-2" : "mb-6"}`}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className={` ${
                  errors?.password
                    ? "border-2 border-red-300"
                    : "border border-gray-800 bg-blue-100"
                } w-full  h-9 rounded-md  outline-cyan-700 pr-10 outline-4 indent-2`}
                onChange={(e) => handleUserInput(e)}
              />

              <span className=" text-red-500 text-sm pl-1">
                {errors?.password || errors?.login || errors?.login}
              </span>

              <div
                className="absolute top-0 right-2 mt-[4px] cursor-pointer scale-90"
                onClick={toggleShowPassword}
              >
                {!showPassword ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </div>
            </div>
            <div className="">
              <Button
                label="Sign in"
                loading={loginLoad}
                disabled={disableButton}
              />
            </div>
          </form>
          <p className=" text-sm mt-2">
            By continuing, you agree to Amazon's{" "}
            <a href="" className=" link">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="" className=" link">
              Privacy Notice.
            </a>
          </p>
        </div>
      </div>

      <div className=" flex items-center px-4 my-4">
        <div className=" w-full h-[1.2px] bg-gray-200" />
        <p className=" shrink-0 mx-3 text-sm">New to Amazon?</p>
        <div className=" w-full h-[1.2px] bg-gray-300" />
      </div>
      <span
        className={`${
          errors?.signUp ? "block" : "hidden"
        } mb-4 text-center text-red-500 text-sm pl-1`}
      >
        {errors?.signUp}
      </span>
      <Button
        label="Create an account"
        color=" bg-gray-200"
        onClick={handleCreateAccount}
        loading={signUpLoad}
        disabled={disableButton}
        signUp
      />
    </div>
  );
};

export default LoginPage;
