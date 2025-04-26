"use client";

import { useDarkMode } from "@/hooks/useDarkMode";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav
      className="
        flex 
        items-center 
        space-x-8 
        justify-between
        py-10 
        px-10 
        transition-colors 
        duration-300
      dark:bg-surface-a10 
      dark:text-primary-a0
      "
    >
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-primary-a0">My Website</h1>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
