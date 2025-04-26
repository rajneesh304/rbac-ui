import React from "react";

const Footer = () => {
  return (
    <footer
      className="
    flex 
    items-center 
    space-x-8 
    justify-between
    py-10 
    transition-colors 
    duration-300
  dark:bg-surface-a10 
  dark:text-primary-a0
  "
    >
      <div className="container mx-auto">
        <p className="text-center">
          © {new Date().getFullYear()} RBAC ui. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
