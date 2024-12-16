import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navigation Menu/Navbar";
import Footer from "../Footer Section/Footer";
import ScrollToTop from "../ScrollToTop Section/ScrollToTop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
