import React from "react";
import Box from "./Box";

const Footer = () => {
  return (
    <div className="h-12 border-t border-gray-200 flex items-center justify-between px-6">
      <div className="w-32 h-5 bg-gray-200 rounded-md" />
      <div className="flex gap-2">
        <Box width="8" height="8" bgColor="100" />
        <Box width="8" height="8" bgColor="200" />
        <Box width="8" height="8" bgColor="100" />
        <Box width="8" height="8" bgColor="100" />
        <Box width="8" height="8" bgColor="100" />
      </div>
    </div>
  );
};

export default Footer;
