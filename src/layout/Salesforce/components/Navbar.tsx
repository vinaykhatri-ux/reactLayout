import React from "react";

const Navbar = () => {
  return (
    <div className="h-14 flex items-center gap-4 px-6 border-b border-neutral-200">
      <div className="w-8 h-8 bg-neutral-200 rounded-md"></div>
      <div className="w-48 h-6 bg-neutral-200 rounded-md"></div>
      <div className="flex-1"></div>
      <div className="w-20 h-8 bg-neutral-100 rounded-md"></div>
      <div className="w-20 h-8 bg-neutral-900 rounded-md"></div>
    </div>
  );
};

export default Navbar;
