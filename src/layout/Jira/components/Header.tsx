import React from "react";

const Header = () => {
  return (
    <div className="h-14 border-b border-[#e5e5e5] flex items-center px-6 gap-4">
      <div className="w-48 h-6 bg-[#e5e5e5] rounded-md" />
      <div className="flex-1" />

      <div className="flex">
        <div className="w-8 h-8 bg-[#d4d4d8] rounded-full border-2 border-white -ml-2" />
        <div className="w-8 h-8 bg-[#d4d4d8] rounded-full border-2 border-white -ml-2" />
        <div className="w-8 h-8 bg-[#d4d4d8] rounded-full border-2 border-white -ml-2" />
        <div className="w-8 h-8 bg-[#d4d4d8] rounded-full border-2 border-white -ml-2" />
      </div>

      <div className="w-24 h-8 bg-[#f5f5f5] rounded-md" />
    </div>
  );
};

export default Header;
