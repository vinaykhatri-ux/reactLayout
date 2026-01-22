import React from "react";

const Header = () => {
  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-neutral-200">
      <div className="w-48 h-6 bg-neutral-200 rounded-md"></div>

      <div className="flex gap-2">
        <div className="w-32 h-8 bg-neutral-100 rounded-md"></div>
        <div className="w-8 h-8 bg-neutral-100 rounded-md"></div>
      </div>
    </header>
  );
};

export default Header;
