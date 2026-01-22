import React from "react";

const Header = () => {
  return (
    <header className="h-14 border-b border-[#e5e5e5] flex items-center px-6 gap-4 bg-white">
      <div className="w-24 h-6 bg-[#171717] rounded-md" />

      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[576px] h-10 bg-[#f5f5f5] rounded-full" />
      </div>

      <div className="flex gap-4">
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-md" />
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-md" />
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-full" />
      </div>
    </header>
  );
};

export default Header;
