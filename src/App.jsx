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
