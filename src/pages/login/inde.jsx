import React, { useState } from "react";
import { amazon_logo_colored } from "../../assets";
import Button from "../../component/button/button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredential, setUserCredential] = useState({
    user_email: "",
    user_password: "",
  });

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleUserInput(e) {
    let value = e.target.value;
    if (e.target.name == "email") {
      setUserCredential({ ...userCredential, user_email: value });
    }
    if (e.target.name == "password") {
      setUserCredential({ ...userCredential, user_password: value });
    }
  }

  return (
    <div className="w-full mt-8 grid justify-center">
      <div className=" w-28  mx-auto">
        <img src={amazon_logo_colored} alt="" />
      </div>

      <div className="border border-gray-300 rounded-lg max-w-sm  p-7 mt-2">
        <div className="">
          <h1 className=" text-3xl font-medium mb-5">Sign in</h1>
          <form>
            <label htmlFor="email" className=" block text-sm font-bold mb-1 ">
              Email or mobile phone number
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" w-full mb-4 h-9 rounded-md border border-gray-800 outline-cyan-700 bg-blue-100 outline-4 indent-2"
              onChange={(e) => handleUserInput(e)}
            />
            <label
              htmlFor="email"
              className=" text-sm mb-1 flex justify-between"
            >
              <span className="font-bold ">Password</span>
              <span className=" link">Forgot your password?</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="  w-full mb-4 h-9 rounded-md border border-gray-800 outline-cyan-700 pr-10 bg-blue-100 outline-4 indent-2"
                onChange={(e) => handleUserInput(e)}
              />
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
              <Button label="Continue" />
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
      <div className=" ">
        <Button label="Create your Amazon account" color=" bg-gray-200" />
      </div>
    </div>
  );
};

export default LoginPage;
