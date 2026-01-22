import React from "react";

const Navbar = () => {
  return (
    <header className="h-14 bg-[#171717] flex items-center px-6 gap-4">
      <div className="w-24 h-8 bg-[#404040] rounded-md" />

      <div className="flex-1 max-w-2xl">
        <div className="h-10 bg-[#262626] rounded-md" />
      </div>

      <div className="flex gap-4">
        <div className="w-8 h-8 bg-[#404040] rounded-md" />
        <div className="w-8 h-8 bg-[#404040] rounded-md" />
      </div>
    </header>
  );
};

export default Navbar;
