import React from "react";

const SideVideo = () => {
  return (
    <article className="flex gap-3">
      <div className="w-40 h-24 bg-[#d4d4d4] rounded-[10px] flex-shrink-0" />

      <div className="flex flex-col gap-1.5 flex-1">
        <div className="w-full h-4 bg-[#e5e5e5] rounded-md" />
        <div className="w-3/4 h-4 bg-[#e5e5e5] rounded-md" />
        <div className="w-1/2 h-3 bg-[#f5f5f5] rounded-md" />
        <div className="w-1/3 h-3 bg-[#f5f5f5] rounded-md" />
      </div>
    </article>
  );
};

export default SideVideo;
