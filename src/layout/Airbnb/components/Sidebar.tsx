import React from "react";

import Bar from "./Bar";

const Sidebar = () => {
  return (
    <aside className="w-72 border-r border-neutral-200 p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="h-5 w-20 bg-neutral-300 rounded-md"></div>
        <Bar size="10" color="100" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-5 w-24 bg-neutral-300 rounded-md"></div>
        <Bar size="2" color="200" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-5 w-20 bg-neutral-300 rounded-md"></div>
        <div className="flex flex-col gap-2">
          <Bar size="6" color="100" />
          <Bar size="6" color="100" />
          <Bar size="6" color="100" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-5 w-28 bg-neutral-300 rounded-md"></div>
        <div className="flex flex-col gap-2">
          <Bar size="6" color="100" />
          <Bar size="6" color="100" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
