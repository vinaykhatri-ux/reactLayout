import React from "react";
import Sidebar from "./components/Sidebar";
import TopOptions from "./components/TopOptions";

const Typeform = () => {
  return (
    <div className="flex h-screen box-border">
      <Sidebar />

      <main className="flex-1 flex flex-col bg-[#f5f5f5]">
        <TopOptions />

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-xl p-8 bg-white rounded-xl shadow-[0_10px_15px_rgba(0,0,0,0.1)]">
            <div className="h-6 w-3/4 bg-[#e5e5e5] rounded-md mb-6" />

            <div className="flex flex-col gap-4">
              <div className="h-12 bg-[#f5f5f5] rounded-md" />
              <div className="h-12 bg-[#f5f5f5] rounded-md" />
            </div>

            <div className="flex gap-3 mt-4">
              <div className="flex-1 h-10 bg-[#e5e5e5] rounded-md" />
              <div className="flex-1 h-10 bg-[#171717] rounded-md" />
            </div>
          </div>
        </div>
      </main>

      <aside className="w-[288px] flex flex-col border-l border-[#e5e5e5]">
        <div className="h-14 border-b border-[#e5e5e5] flex items-center px-4">
          <div className="h-5 w-24 bg-[#e5e5e5] rounded-md" />
        </div>

        <div className="flex-1 p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-4 w-16 bg-[#e5e5e5] rounded-md" />
            <div className="h-10 bg-[#f5f5f5] rounded-md" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-4 w-20 bg-[#e5e5e5] rounded-md" />
            <div className="h-10 bg-[#f5f5f5] rounded-md" />
          </div>

          <div className="flex items-center justify-between">
            <div className="h-4 w-20 bg-[#e5e5e5] rounded-md" />
            <div className="h-6 w-10 bg-[#d4d4d4] rounded-full" />
          </div>

          <div className="flex items-center justify-between">
            <div className="h-4 w-20 bg-[#e5e5e5] rounded-md" />
            <div className="h-6 w-10 bg-[#171717] rounded-full" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Typeform;
