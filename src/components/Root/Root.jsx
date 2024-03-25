import React from "react";
import Header from "../Header/index";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header showLogo={true} />
      <Outlet />
    </>
  );
}

export default Root;
