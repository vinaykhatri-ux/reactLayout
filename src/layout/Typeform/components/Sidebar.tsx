import React from "react";

import FormOption from "./FormOption";

const Sidebar = () => {
  return (
    <aside className="w-[288px] flex flex-col border-r border-[#e5e5e5]">
      <div className="h-14 border-b border-[#e5e5e5] flex items-center px-4">
        <div className="h-6 w-32 bg-[#e5e5e5] rounded-md" />
      </div>

      <div className="p-4">
        <div className="h-10 w-full bg-[#171717] rounded-md" />
      </div>

      <div className="flex-1 px-4 pt-0 pb-4 flex flex-col gap-2 overflow-y-auto">
        <FormOption />
        <FormOption active />
        <FormOption />
        <FormOption />
        <FormOption />
      </div>
    </aside>
  );
};

export default Sidebar;
