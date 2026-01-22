import React from "react";

const Card = () => {
  return (
    <div className="h-28 bg-white border border-neutral-200 rounded-xl p-4 flex flex-col justify-between">
      <div className="w-20 h-4 bg-neutral-200 rounded-md"></div>
      <div className="w-24 h-8 bg-neutral-300 rounded-md"></div>
      <div className="w-16 h-3 bg-neutral-100 rounded-md"></div>
    </div>
  );
};

export default Card;
