import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
]);

function App() {
  return (
    <main className="m-auto w-full max-w-7xl">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
