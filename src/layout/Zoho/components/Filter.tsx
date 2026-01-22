import React from "react";
import Box from "./Box";

const Filter = () => {
  return (
    <div className="h-12 flex items-center gap-2 px-6 border-b border-gray-200">
      <div className="w-28 h-7 bg-gray-100 rounded-full" />
      <div className="w-28 h-7 bg-gray-100 rounded-full" />
      <div className="w-28 h-7 bg-gray-100 rounded-full" />
      <div className="flex-1" />
      <Box width="48" height="7" bgColor="100" />
    </div>
  );
};

export default Filter;
