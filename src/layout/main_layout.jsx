import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/navigation_bar";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
