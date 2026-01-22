import React from "react";

const Navbar = () => {
  return (
    <header className="h-14 bg-white border-b border-[#e5e5e5] flex items-center gap-4 px-6">
      <div className="w-8 h-8 bg-[#171717] rounded-md" />
      <div className="w-64 h-10 bg-[#f5f5f5] rounded-full" />
      <div className="flex-1" />

      <div className="flex gap-4">
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-md" />
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-md" />
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-md" />
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-md" />
      </div>

      <div className="w-8 h-8 bg-[#d4d4d4] rounded-full" />
    </header>
  );
};

export default Navbar;
