import React from "react";

import Chat from "./Chat";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-[#e5e5e5] flex flex-col">
      <div className="h-14 p-4 border-b border-[#e5e5e5]">
        <div className="h-8 bg-[#f5f5f5] rounded-md" />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Chat active />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </aside>
  );
};

export default Sidebar;
