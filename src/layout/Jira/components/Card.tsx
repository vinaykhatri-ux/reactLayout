import React from "react";

const Card = () => {
  return (
    <div
      className="bg-white rounded-lg p-3 shadow-[0_1px_2px_rgba(0,0,0,0.05)] flex flex-col gap-2"
    >
      <div className="h-4 bg-[#e5e5e5] rounded-md" />
      <div className="w-3/4 h-4 bg-[#f5f5f5] rounded-md" />

      <div className="flex justify-between items-center mt-2">
        <div className="w-12 h-5 bg-[#e5e5e5] rounded-md" />
        <div className="w-6 h-6 bg-[#e5e5e5] rounded-full" />
      </div>
    </div>
  );
};

export default Card;
