import React from "react";

import Navbar from "./components/Navbar";
import SideContent from "./components/SideContent";

import Profile from "./components/Profile";

const Linkedin = () => {
  return (
    <div className="h-screen flex flex-col bg-[#f5f5f5]">
      <Navbar />

      
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto py-4 flex gap-4">
          
          <section className="flex-1 flex flex-col gap-4">
           
            <Profile />

           
            <div className="bg-white border border-[#e5e5e5] rounded-xl p-4">
              <div className="w-20 h-5 bg-[#e5e5e5] rounded-md mb-3" />
              <div className="h-4 bg-[#f5f5f5] rounded-md" />
              <div className="h-4 w-3/4 bg-[#f5f5f5] rounded-md mt-2" />
            </div>

            
            <div className="bg-white border border-[#e5e5e5] rounded-xl p-4">
              <div className="w-24 h-5 bg-[#e5e5e5] rounded-md mb-3" />

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-[#e5e5e5] rounded-md" />
                <div className="flex flex-col gap-1">
                  <div className="w-48 h-4 bg-[#e5e5e5] rounded-md" />
                  <div className="w-32 h-3 bg-[#f5f5f5] rounded-md" />
                </div>
              </div>
            </div>
          </section>

          
          <SideContent />
        </div>
      </main>
    </div>
  );
};

export default Linkedin;
