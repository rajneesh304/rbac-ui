"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav>
      <div className="font-extrabold ">LOGO</div>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
