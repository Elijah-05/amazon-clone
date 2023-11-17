import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Button = ({ label, onClick, signUp, loading, disabled }) => {
  return (
    <button
      className={`w-full ${
        disabled
          ? "bg-gray-300 cursor-not-allowed"
          : signUp
            ? "bg-slate-400 text-white hover:font-medium hover:scale-[1.008] hover:shadow-lg border cursor-pointer"
            : "bg-yellow-500 hover:scale-[1.008] hover:shadow-lg border cursor-pointer"
      } h-10 px-4 rounded-md text-center font-medium   border-gray-500 shadow-sm duration-300 flex items-center justify-center`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <CircularProgress size={25} /> : label}
    </button>
  );
};

export default Button;
