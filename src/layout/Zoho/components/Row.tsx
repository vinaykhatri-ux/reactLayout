import React from "react";

import Box from "./Box";

const Row = () => {
  return (
    <div className="h-14 flex items-center px-4 gap-4 border-b border-gray-100 hover:bg-gray-50">
      <Box width="12" height="5" bgColor="200" />
      <Box width="48" height="5"  bgColor="100" />
      <Box width="40" height="5" bgColor="100"  />
      <Box width="32" height="5" bgColor="100" />
      <Box width="32" height="5" bgColor="100" />
      <Box width="24" height="5" bgColor="200" />
      
      <div className="flex-1" />
      <div className="w-20 flex gap-2">
        <Box width="6" height="6" bgColor="200" />
        <Box width="6" height="6" bgColor="200" />
      </div>
    </div>
  );
};

export default Row;
