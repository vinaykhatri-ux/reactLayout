import React from "react";

const Listing = () => {
  return (
    <div className="bg-neutral-100 rounded-xl overflow-hidden flex flex-col">
      <div className="h-48 bg-neutral-200"></div>

      <div className="p-4 flex flex-col gap-2">
        <div className="h-5 w-3/4 bg-neutral-200 rounded-md"></div>
        <div className="h-4 w-1/2 bg-neutral-200 rounded-md"></div>
        <div className="h-6 w-1/3 bg-neutral-300 rounded-md mt-2"></div>
      </div>
    </div>
  );
};

export default Listing;
