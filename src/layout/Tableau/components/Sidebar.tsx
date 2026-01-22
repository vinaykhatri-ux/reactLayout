import React from "react";
import Tab from "./Tab";

const Sidebar = () => {
  return (
    <aside className="w-16 bg-neutral-900 flex flex-col items-center py-4 gap-4">
      <Tab bgColor="700" />
      <Tab bgColor="800" />
      <Tab bgColor="800" />
      <Tab bgColor="800" />

      <div className="flex-1"></div>

      <div className="w-10 h-10 bg-neutral-800 rounded-full"></div>
    </aside>
  );
};

export default Sidebar;
