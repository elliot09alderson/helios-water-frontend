import React, { useState } from "react";
import logo from "/helios/Helios.png";
import { Menu } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-24 flex items-center lg:justify-between  px-4 lg:px-24">
      <div
        className="flex items-center justify-center p-4 cursor-pointer lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <Menu size={25} />
      </div>
      <img src={logo} className="w-32 object-cover" alt="" />
      {open && (
        <div className="flex items-center gap-2  lg:hidden  lg:flex-row flex-col absolute lg:relative h-[100vh]  ">
          <li className="cursor-pointer px-4 py-2 ">Home</li>
          <li className="cursor-pointer px-4 py-2">Greener Promise</li>
          <li className="cursor-pointer px-4 py-2">Shop Products</li>
          <li className="cursor-pointer px-4 py-2">Brand</li>
          <li className="cursor-pointer px-4 py-2">News </li>
          <li className="cursor-pointer px-4 py-2">Subscription</li>
          <li className="cursor-pointer px-4 py-2">Contact</li>
          <li className="cursor-pointer px-4 py-2">About</li>
        </div>
      )}
      <div className="flex items-center gap-2 lg:flex-row flex-col absolute lg:relative h-[100vh]  ">
        <li className="cursor-pointer px-4 py-2 ">Home</li>
        <li className="cursor-pointer px-4 py-2">Greener Promise</li>
        <li className="cursor-pointer px-4 py-2">Shop Products</li>
        <li className="cursor-pointer px-4 py-2">Brand</li>
        <li className="cursor-pointer px-4 py-2">News </li>
        <li className="cursor-pointer px-4 py-2">Subscription</li>
        <li className="cursor-pointer px-4 py-2">Contact</li>
        <li className="cursor-pointer px-4 py-2">About</li>
      </div>
    </div>
  );
};

export default Navbar;
