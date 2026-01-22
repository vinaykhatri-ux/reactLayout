import React from "react";
import Header from "./components/Header";
import SideVideo from "./components/SideVideo";
import Video from "./components/Video";

const Youtube = () => {
  return (
    <div className="h-screen flex flex-col">
      
      <Header />

      <main className="flex-1 flex gap-6 p-6 bg-[#f5f5f5] overflow-y-hidden">
        
        <Video />

        
        <aside className="w-96 flex flex-col gap-3">
          <SideVideo />
          <SideVideo />
          <SideVideo />
          <SideVideo />

          <SideVideo />
          <SideVideo />
        </aside>
      </main>
    </div>
  );
};

export default Youtube;
