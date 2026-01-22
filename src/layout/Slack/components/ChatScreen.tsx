import React from "react";

export const ChatScreen = () => {
  return (
    <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
      <div className="flex gap-3">
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-full" />
        <div className="max-w-md p-4 bg-[#f5f5f5] rounded-2xl rounded-tl-none">
          <div className="h-4 w-80 bg-[#e5e5e5] rounded" />
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <div className="max-w-md p-4 bg-[#171717] rounded-2xl rounded-tr-none">
          <div className="h-4 w-48 bg-[#404040] rounded mt-2" />
          <div className="h-4 w-32 bg-[#404040] rounded mt-2" />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="w-8 h-8 bg-[#e5e5e5] rounded-full" />
        <div className="max-w-md p-4 bg-[#f5f5f5] rounded-2xl rounded-tl-none">
          <div className="h-4 w-80 bg-[#e5e5e5] rounded" />
          <div className="h-4 w-48 bg-[#e5e5e5] rounded mt-2" />
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <div className="max-w-md p-4 bg-[#171717] rounded-2xl rounded-tr-none">
          <div className="h-4 w-56 bg-[#404040] rounded mt-2" />
        </div>
      </div>
    </div>
  );
};
