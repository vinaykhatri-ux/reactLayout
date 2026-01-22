import React from "react";

const Navbar = () => {
  return (
    <header className="h-14 bg-[#171717] flex items-center px-6 gap-4">
      <div className="w-24 h-6 bg-[#404040] rounded-md" />

      <nav className="flex gap-4">
        <div className="w-16 h-6 bg-[#262626] rounded-md" />
        <div className="w-16 h-6 bg-[#262626] rounded-md" />
        <div className="w-16 h-6 bg-[#262626] rounded-md" />
        <div className="w-16 h-6 bg-[#262626] rounded-md" />
        <div className="w-16 h-6 bg-[#262626] rounded-md" />
      </nav>

      <div className="flex-1" />

      <div className="w-8 h-8 bg-[#404040] rounded-md" />
    </header>
  );
};

export default Navbar;
