import React from "react";

const Topbar = () => {
  return (
    <div className="h-14 border-b border-[#e5e5e5] flex items-center gap-3 px-6">
      <div className="w-10 h-10 bg-[#d4d4d4] rounded-full" />

      <div className="flex flex-col gap-1">
        <div className="w-32 h-5 bg-[#e5e5e5] rounded" />
        <div className="w-20 h-3 bg-[#f5f5f5] rounded" />
      </div>

      <div className="ml-auto flex gap-2">
        <div className="w-8 h-8 bg-[#f5f5f5] rounded-md" />
        <div className="w-8 h-8 bg-[#f5f5f5] rounded-md" />
        <div className="w-8 h-8 bg-[#f5f5f5] rounded-md" />
      </div>
    </div>
  );
};

export default Topbar;
