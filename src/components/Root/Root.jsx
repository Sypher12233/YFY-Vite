import React from "react";
import Header from "../Header/index";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header showLogo={true} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
