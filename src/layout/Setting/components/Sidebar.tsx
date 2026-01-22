import React from "react";
import Tab from "./Tab";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-[#e5e5e5] p-4 flex flex-col gap-1">
      <div className="h-10 bg-[#f5f5f5] rounded-md mb-4 flex items-center px-3">
        <div className="h-4 w-full bg-[#e5e5e5] rounded-md" />
      </div>

      <nav className="flex flex-col gap-2">
        <div className="h-10 rounded-md flex items-center px-3 bg-[#e5e5e5] cursor-pointer">
          <div className="h-4 w-24 bg-[#a3a3a3] rounded-md" />
        </div>

        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        <Tab />
        
      </nav>
    </aside>
  );
};

export default Sidebar;
