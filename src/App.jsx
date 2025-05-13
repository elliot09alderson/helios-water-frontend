import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
const App = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  const router = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
