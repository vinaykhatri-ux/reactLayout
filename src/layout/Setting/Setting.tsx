import React from "react";

import Sidebar from "./components/Sidebar";

const Setting = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      
      <main className="flex-1 flex flex-col">
        
        <header className="h-14 border-b border-[#e5e5e5] flex items-center px-6">
          <div className="h-6 w-24 bg-[#d4d4d4] rounded-md" />
        </header>

        
        <section className="flex-1 p-6 overflow-auto flex">
          <div className="flex flex-col gap-6 max-w-2xl w-full">
            
            <div className="flex flex-col gap-4 pb-6 border-b border-[#e5e5e5]">
              <div className="h-5 w-32 bg-[#d4d4d4] rounded-md" />

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="h-4 w-24 bg-[#e5e5e5] rounded-md" />
                  <div className="h-3 w-48 bg-[#f5f5f5] rounded-md" />
                </div>
                <div className="w-64 h-10 bg-[#f5f5f5] rounded-md" />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="h-4 w-20 bg-[#e5e5e5] rounded-md" />
                  <div className="h-3 w-40 bg-[#f5f5f5] rounded-md" />
                </div>
                <div className="w-64 h-10 bg-[#f5f5f5] rounded-md" />
              </div>
            </div>

            
            <div className="flex flex-col gap-4 pb-6 border-b border-[#e5e5e5]">
              <div className="h-5 w-28 bg-[#d4d4d4] rounded-md" />

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="h-4 w-32 bg-[#e5e5e5] rounded-md" />
                  <div className="h-3 w-56 bg-[#f5f5f5] rounded-md" />
                </div>
                <div className="w-12 h-6 bg-[#d4d4d4] rounded-full" />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <div className="h-4 w-28 bg-[#e5e5e5] rounded-md" />
                  <div className="h-3 w-48 bg-[#f5f5f5] rounded-md" />
                </div>
                <div className="w-12 h-6 bg-[#171717] rounded-full" />
              </div>
            </div>

            
            <div className="flex justify-end gap-3">
              <div className="w-24 h-10 bg-[#e5e5e5] rounded-md" />
              <div className="w-24 h-10 bg-[#171717] rounded-md" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Setting;
