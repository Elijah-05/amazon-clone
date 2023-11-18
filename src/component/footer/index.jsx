import React from "react";
import FooterList from "../footer_link_list";
import { footer_data } from "../../../data";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { amazon_logo_colored, amazon_logo_white } from "../../assets";

const Footer = () => {
  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="w-full bg-slate-800 ">
      <div
        className="relative group p-2 flex flex-col  items-center bg-slate-600 hover:bg-slate-700 duration-500 cursor-pointer"
        onClick={handleScrollToTop}
      >
        <div className="absolute bg-slate-600  group-hover:bg-slate-700 px-6 pt-1 opacity-0 top-0 order group-hover:mt-0 rounded-t-xl group-hover:-translate-y-6 group-hover:opacity-100 duration-500">
          <KeyboardArrowUpIcon className="text-white" />
        </div>
        <p className="group-hover:translate-y-[2px] group-hover:text-yellow-400 z-0 duration-500 text-center text-gray-200">
          Back to top
        </p>
      </div>
      <div className=" borde mx-auto max-w-6xl flex justify-between py-8 ">
        <FooterList head={"Get to Know Us"} lists={footer_data.know_us} />
        <FooterList
          head={"Make Money with Us"}
          lists={footer_data.make_money}
        />
        <FooterList
          head={"Amazon Payment Products"}
          lists={footer_data.amazon_payment}
        />
        <FooterList head={"Let Us Help You"} lists={footer_data.help} />
      </div>
      <div className="flex flex-col items-center mt-4 pt-6 pb-8 bg-slate-900">
        <div className=" w-20 mx-auto">
          <img src={amazon_logo_white} alt="" />
        </div>
        <a className="group text-slate-400 hover:text-slate-300 cursor-pointer animate-pulse hover:animate-none text-center duration-500">
          Amazon Clone, developed by{" "}
          <a
            href=""
            className="text-yellow-500 group-hover:text-yellow-400 duration-400"
          >
            Elyas Abebe
          </a>
        </a>
      </div>
    </div>
  );
};

export default Footer;
