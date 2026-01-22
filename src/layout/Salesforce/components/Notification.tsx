import React from "react";

const Notification = () => {
  return (
    <div className="bg-neutral-50 p-3 rounded-xl flex gap-3">
      <div className="w-8 h-8 bg-neutral-200 rounded-full flex-shrink-0"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="w-full h-4 bg-neutral-200 rounded-md"></div>
        <div className="w-20 h-3 bg-neutral-100 rounded-md"></div>
      </div>
    </div>
  );
};

export default Notification;
