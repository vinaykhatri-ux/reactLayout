import React from "react";


const Row = () => {
  return (
    <div className="h-12 flex items-center px-4 border-t border-[#f5f5f5]">
      <div className="w-48 h-4 bg-[#e5e5e5] rounded-md" />
      <div className="flex-1" />
      <div className="w-12 h-4 bg-[#f5f5f5] rounded-md ml-4" />
      <div className="w-12 h-4 bg-[#f5f5f5] rounded-md ml-4" />
      <div className="w-12 h-4 bg-[#f5f5f5] rounded-md ml-4" />
      <div className="w-12 h-4 bg-[#f5f5f5] rounded-md ml-4" />
    </div>
  );
};

export default Row;
