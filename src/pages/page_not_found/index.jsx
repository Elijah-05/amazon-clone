import React from "react";
import { pageNotFoundImg } from "../../assets";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className=" h-screen flex items-center justify-center mb-20 sm:mb-0">
      <div className=" flex flex-col sm:flex-row items-center justify-center">
        <img className=" w-[200px] sm:w-[300px]" src={pageNotFoundImg} alt="" />
        <div className="px-4  max-w-sm">
          <h1 className=" text-5xl font-bold mb-2 text-center">Oops!</h1>
          <h1 className=" text-3xl font-bold mb-2 text-center">
            Page Not Found
          </h1>

          <p className=" text-center">
            The page you're looking for might be on a coffee break or has taken
            a vacation.
          </p>
          <Link to={"/"}>
            <div className="mt-4 rounded-md bg-gray-300 py-2 text-center text-slate-800 hover:bg-yellow-300 duration-500">
              Back to Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
