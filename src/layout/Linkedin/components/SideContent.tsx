import React from "react";
import Suggest from "./Suggest";

const SideContent = () => {
  return (
    <aside className="w-72 flex flex-col gap-4">
      <div className="bg-white border border-[#e5e5e5] rounded-xl p-4">
        <div className="w-32 h-5 bg-[#e5e5e5] rounded-md mb-3" />

        <Suggest />
        <Suggest />
        <Suggest />
      </div>

      <div className="bg-white border border-[#e5e5e5] rounded-xl p-4">
        <div className="w-20 h-5 bg-[#e5e5e5] rounded-md" />
      </div>
    </aside>
  );
};

export default SideContent;
