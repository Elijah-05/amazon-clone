import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      className={`w-full bg-yellow-500 px-4 rounded-md cursor-pointer py-2 text-center font-medium hover:scale-[1.008]  hover:shadow-lg duration-300 `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
