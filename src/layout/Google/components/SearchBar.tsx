import React from "react";

import Option from "./Option";

const SearchBar = () => {
  return (
    <header className="border-b border-[#e5e5e5] px-6 py-4">
      <div className="flex items-center gap-6">
        <div className="w-24 h-8 bg-[#d4d4d4] rounded-md" />

        <div className="flex-1 max-w-2xl h-12 bg-[#f5f5f5] border border-[#d4d4d4] rounded-full" />

        <div className="flex-1" />

        <div className="w-8 h-8 bg-[#e5e5e5] rounded-md" />
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-full" />
      </div>

      <nav className="flex gap-6 mt-4 ml-32">
        <Option width="12" bgColor="#171717" />
        <Option width="14" bgColor="#e5e5e5" />
        <Option width="14" bgColor="#e5e5e5" />
        <Option width="14" bgColor="#e5e5e5" />
        <Option width="14" bgColor="#e5e5e5" />
      </nav>
    </header>
  );
};

export default SearchBar;
