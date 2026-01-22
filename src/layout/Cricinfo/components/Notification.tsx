import React from "react";

const Notification = () => {
  return (
    <div className="bg-[#f5f5f5] p-3 rounded-[10px] h-16">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-12 h-5 bg-[#d4d4d4] rounded-md" />
        <div className="w-4 h-4 bg-[#e5e5e5] rounded-md" />
      </div>
      <div className="w-full h-4 bg-[#e5e5e5] rounded-md" />
    </div>
  );
};

export default Notification;
