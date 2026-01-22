import React from "react";

interface ChatProps {
    active?:boolean;
}

const Chat = ({active = false}:ChatProps) => {
  return (
    <div
      
      className={`h-16 flex items-center gap-3 px-4 cursor-pointer ${
        active ? "bg-[#f5f5f5]" : "hover:bg-[#fafafa]"
      }`}
    >
      <div className="w-10 h-10 bg-[#d4d4d4] rounded-full" />

      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="w-24 h-4 bg-[#e5e5e5] rounded" />
          <div className="w-10 h-3 bg-[#e5e5e5] rounded" />
        </div>
        <div className="h-3 bg-[#f5f5f5] rounded" />
      </div>
    </div>
  );
};

export default Chat;
