import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div className="#search-bar-container w-full hidden sm:flex rounded-sm overflow-hidden ">
      <input className=" pl-1 w-full outline-none" type="text" />
      <div className=" bg-yellow-500 p-2 cursor-pointer">
        <SearchIcon className="text-white mx-1 " />
      </div>
    </div>
  );
};

export default SearchBar;
