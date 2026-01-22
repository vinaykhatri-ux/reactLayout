import React from "react";
import Notification from "../components/Notification";

const Sidebar = () => {
  return (
    <aside className="w-80 border-l border-[#e5e5e5] p-4 flex flex-col gap-4">
      <div className="w-24 h-6 bg-[#e5e5e5] rounded-md" />

      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </aside>
  );
};

export default Sidebar;
