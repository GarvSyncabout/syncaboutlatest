import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation Menu/Navbar";
import Footer from "../Footer Section/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
