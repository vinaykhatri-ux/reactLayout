import React from "react";
import Box from "../../Gmail/components/Box";
const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-neutral-200 p-4 flex flex-col gap-2">
      <Box size="10" color="200" />
      <Box size="10" color="100" />
      <Box size="10" color="100" />
      <Box size="10" color="100" />
      <Box size="10" color="100" />

      <div className="flex-1"></div>

      <Box size="12" color="900" />
    </aside>
  );
};

export default Sidebar;
