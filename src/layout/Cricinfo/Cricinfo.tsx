import React from "react";
import Navbar from "./components/Navbar";

import Row from "./components/Row";
import Sidebar from "./components/Sidebar";
const Cricinfo = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <section className="bg-[#262626] p-4">
        <div className="max-w-4xl mx-auto flex justify-between text-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#525252] rounded-md" />
            <div className="flex flex-col gap-1">
              <div className="w-20 h-5 bg-[#525252] rounded-md" />
              <div className="w-32 h-8 bg-[#737373] rounded-md" />
            </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-4 bg-[#525252] rounded-md mx-auto mb-2" />
            <div className="w-24 h-6 bg-[rgba(239,68,68,0.3)] rounded-md" />
          </div>

          <div className="flex items-center gap-4 flex-row-reverse">
            <div className="flex flex-col gap-1 items-end">
              <div className="w-20 h-5 bg-[#525252] rounded-md" />
              <div className="w-32 h-8 bg-[#737373] rounded-md" />
            </div>
            <div className="w-12 h-12 bg-[#525252] rounded-md" />
          </div>
        </div>

        <div className="w-72 h-5 bg-[#404040] rounded-md mx-auto mt-4" />
      </section>

      <main className="flex-1 flex overflow-hidden">
        <section className="flex-1 p-4 flex flex-col gap-4">
          <div className="flex gap-2 border-b border-[#e5e5e5] pb-2">
            <div className="w-24 h-8 bg-[#171717] rounded-md" />
            <div className="w-24 h-8 bg-[#f5f5f5] rounded-md" />
            <div className="w-24 h-8 bg-[#f5f5f5] rounded-md" />
            <div className="w-24 h-8 bg-[#f5f5f5] rounded-md" />
          </div>

          <div className="bg-white border border-[#e5e5e5] rounded-[10px] overflow-hidden">
            <div className="h-12 flex items-center px-4 bg-[#f5f5f5]">
              <div className="w-48 h-4 bg-[#d4d4d4] rounded-md" />
              <div className="flex-1" />
              <div className="w-12 h-4 bg-[#d4d4d4] rounded-md ml-4" />
              <div className="w-12 h-4 bg-[#d4d4d4] rounded-md ml-4" />
              <div className="w-12 h-4 bg-[#d4d4d4] rounded-md ml-4" />
              <div className="w-12 h-4 bg-[#d4d4d4] rounded-md ml-4" />
            </div>

            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </div>
        </section>

        <Sidebar />
      </main>
    </div>
  );
};

export default Cricinfo;
