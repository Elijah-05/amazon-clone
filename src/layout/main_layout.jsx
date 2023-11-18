import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../component/navigation_bar";
import Footer from "../component/footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const MainLayout = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 200) {
        setShowScrollBtn(true);
      } else setShowScrollBtn(false);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <main className="relative">
      <header className=" sticky top-0 z-50">
        <NavBar />
      </header>
      <section className=" min-h-screen">
        <Outlet />
      </section>
      <footer>
        <div
          className={`${
            showScrollBtn ? "opacity-1" : "opacity-0"
          } fixed group border-2 border-yellow-500 bottom-24 z-50 right-10 items-center justify-center rounded-full drop-shadow-[0px_5px__8px_rgba(0,0,0,0.25)] duration-1000`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="w-11 h-11 absolute animate-pulse scale-150 opacity-20 group-hover:opacity-50 duration-500 rounded-full flex justify-center items-center  bg-yellow-400" />
          <div className="w-11 h-11 absolute group-hover:scale-[1.8] opacity-0 group-hover:opacity-50 duration-500 rounded-full flex justify-center items-center  bg-yellow-200" />
          <div className=" scale-100 border-2  bg-slate-800 group- hover:bg- yellow-400 duration-300 w-11 h-11 rounded-full flex items-center justify-center">
            <div className=" group-hover:-translate-y-1 duration-500 ">
              <KeyboardArrowUpIcon className="text-white group-hover:scale-125" />
            </div>
          </div>
        </div>
        <Footer />
      </footer>
    </main>
  );
};

export default MainLayout;
