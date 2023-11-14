import React from "react";

const Button = ({ label, onClick, color = "bg-yellow-500", border }) => {
  return (
    <button
      className={`w-full ${color} px-4 rounded-md cursor-pointer py-2 text-center font-base hover:font-medium hover:scale-[1.008] border border-gray-500 hover:shadow-lg  duration-300 `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
