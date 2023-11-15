import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Button = ({
  label,
  onClick,
  color = "bg-yellow-500",
  loading,
  disabled,
}) => {
  return (
    <button
      className={`w-full ${color} h-10 px-4 rounded-md cursor-pointer  text-center font-base hover:font-medium hover:scale-[1.008] border border-gray-500 hover:shadow-lg  duration-300 flex items-center justify-center`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading ? <CircularProgress size={25} /> : label}
    </button>
  );
};

export default Button;
