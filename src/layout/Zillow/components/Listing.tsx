import React from "react";

const Listing = () => {
  return (
    <div className="flex gap-4 p-2 rounded-xl hover:bg-neutral-50 transition">
      <div className="w-72 h-48 bg-neutral-200 rounded-xl flex-shrink-0"></div>

      <div className="flex-1 py-2 flex flex-col gap-2">
        <div className="w-32 h-4 bg-neutral-200 rounded-md"></div>
        <div className="w-3/4 h-6 bg-neutral-200 rounded-md"></div>
        <div className="w-1/2 h-4 bg-neutral-100 rounded-md"></div>
        <div className="flex-1"></div>
        <div className="w-24 h-6 bg-neutral-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default Listing;
