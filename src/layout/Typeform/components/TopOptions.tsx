import React from "react";
import Tab from "./Tab";

const TopOptions = () => {
  return (
    <div className="h-14 border-b border-[#e5e5e5] flex items-center justify-center gap-4 bg-white">
      <Tab />
      <Tab />
      <Tab active />
      <Tab />
    </div>
  );
};

export default TopOptions;
