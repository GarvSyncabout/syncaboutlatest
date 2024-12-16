import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Hero Section/Home";
import Notfound from "./Components/404 Section/Notfound";
import Aboutus from "./Pages/AboutUs/Aboutus";
import Whychooseus from "./Pages/whychooseus/Whychooseus";
import Howwework from "./Pages/HowWeWork/Howwework";
import Lifeatsyncabout from "./Pages/LifeAtSyncabout/Lifeatsyncabout";
import Webdev from "./Pages/WebDevelopment/Webdev";
import Softwaredev from "./Pages/SoftwareDevelopment/Softwaredev";
import Mobiledev from "./Pages/MobileAppDevelopment/Mobiledev";
import Erpdev from "./Pages/CustomERPDevelopment/Erpdev";
import SeoServices from "./Pages/SeoServices/SeoServices";
import Socialmedia from "./Pages/SocialMediaMarketing/Socialmedia";
import Graphics from "./Pages/GraphicsDesigning/Graphics";
import Uiux from "./Pages/UiUx/Uiux";
import Blog from "./Pages/Blogs/blog";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Notfound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
      },
      {
        path: "/why-choose-us",
        element: <Whychooseus />,
      },
      {
        path: "/how-we-work",
        element: <Howwework />,
      },
      {
        path: "/life-at-sync-about",
        element: <Lifeatsyncabout />,
      },
      {
        path: "/web-development",
        element: <Webdev />,
      },
      {
        path: "/software-development",
        element: <Softwaredev />,
      },
      {
        path: "/mobile-app-development",
        element: <Mobiledev />,
      },
      {
        path: "/custom-erp-development",
        element: <Erpdev />,
      },
      {
        path: "/seo-service",
        element: <SeoServices />,
      },
      {
        path: "/social-media-marketing",
        element: <Socialmedia />,
      },
      {
        path: "/graphics-portfolio",
        element: <Graphics />,
      },
      {
        path: "/ui-ux-portfolio",
        element: <Uiux />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
]);
function App() {
  return (
    <main className="overflow-hidden">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
