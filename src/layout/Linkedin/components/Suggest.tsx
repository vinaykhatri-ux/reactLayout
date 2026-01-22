import React from "react";

const Suggest = () => {
  return (
    <div className="flex gap-2 py-2">
      <div className="w-8 h-8 bg-[#e5e5e5] rounded-full" />
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-4 bg-[#f5f5f5] rounded-md" />
        <div className="h-4 w-3/4 bg-[#f5f5f5] rounded-md" />
      </div>
    </div>
  );
};

export default Suggest;
