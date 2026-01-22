import React from "react";

import Navbar from "./components/Navbar";
import Preview from "./components/Preview";

import Option from "./components/Options";

const Amazon = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex overflow-y-auto">
        <section className="w-1/2 p-6 flex gap-4">
          <div className="w-20 flex flex-col gap-2">
            <Preview active />

            <Preview />
            <Preview />
            <Preview />
          </div>

          <div className="flex-1 bg-[#f5f5f5] rounded-[10px]" />
        </section>

        <aside className="w-1/2 p-6 flex flex-col gap-4 border-l border-[#e5e5e5]">
          <div className="w-24 h-4 bg-[#e5e5e5] rounded-md" />
          <div className="w-full h-8 bg-[#e5e5e5] rounded-md" />
          <div className="w-48 h-6 bg-[#f5f5f5] rounded-md" />

          <div className="h-px bg-[#e5e5e5]" />

          <div className="w-32 h-10 bg-[#d4d4d4] rounded-md" />
          <div className="w-40 h-4 bg-[#f5f5f5] rounded-md" />

          <div className="h-px bg-[#e5e5e5]" />

          <div className="flex flex-col gap-2">
            <div className="w-16 h-5 bg-[#e5e5e5] rounded-md" />

            <Option />
          </div>

          <div className="flex flex-col gap-2">
            <div className="w-12 h-5 bg-[#e5e5e5] rounded-md" />

            <div className="flex gap-2">
              <div className="w-12 h-10 border border-[#d4d4d4] rounded-md" />
              <div className="w-12 h-10 border-2 border-[#171717] rounded-md" />
              <div className="w-12 h-10 border border-[#d4d4d4] rounded-md" />
              <div className="w-12 h-10 border border-[#d4d4d4] rounded-md" />
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <div className="flex-1 h-12 bg-[#171717] rounded-md" />
            <div className="w-12 h-12 bg-[#e5e5e5] rounded-md" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Amazon;
