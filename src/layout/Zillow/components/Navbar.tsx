import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 flex items-center px-6 border-b border-neutral-200 gap-4">
      <div className="w-32 h-8 bg-neutral-900 rounded-md"></div>

      <div className="flex-1 max-w-2xl">
        <div className="h-10 bg-neutral-100 rounded-full"></div>
      </div>

      <div className="flex-1"></div>

      <div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
    </header>
  );
};

export default Navbar;
