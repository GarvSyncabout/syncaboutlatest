import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Hero Section/Home";
import Alert from "./Components/404 Section/Alert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Alert />,
    children: [
      {
        path: "/",
        element: <Home />,
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
