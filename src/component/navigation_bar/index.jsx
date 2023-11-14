import React from "react";
import MenuList from "../nav_menu_list_text";
import SearchBar from "../search_bar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import { useAtomValue } from "jotai";
import { getCartNumber } from "../../atoms";
import { amazon_logo_white } from "../../assets";

const NavBar = () => {
  const cartNumber = useAtomValue(getCartNumber);
  const { pathname } = useLocation();

  return (
    <div className=" #nav-container sticky top-0 w-full z-50 bg-black py-4 ">
      <div className=" #inner-container max-w-7xl  mx-auto flex items-center justify-between px-2 sm:px-4 gap-4">
        <div className=" #img-container w-24 p-2 shrink-0 cursor-pointer">
          <Link to="/">
            <img
              className=" w-full translate-y-2"
              src={amazon_logo_white}
              alt="Amazon logo"
            />
          </Link>
        </div>
        {/* <div className=""> */}
        <SearchBar />
        {/* </div> */}
        <div className=" #menu-list-container hidden sm:flex  shrink-0 gap-1">
          <MenuList text1={"Hello Guest"} text2={"Sign In"} />
          <MenuList text1={"Returns"} text2={"& Orders"} />
          <MenuList text1={"Your"} text2={"Prime"} />
          <Link to="/checkout">
            <div
              className={`${
                pathname == "/checkout" ? "text-yellow-400" : ""
              } text-white flex items-center gap-2 hover:outlin duration-300 hover:text-yellow-400 outline-1 p-2`}
            >
              <ShoppingCartIcon className=" " />
              <span className="font-medium text-xl w-5 ">{cartNumber}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
