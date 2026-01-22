import React from "react";

import Listing from "./components/Listing";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Airbnb = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar/>

        <main className="flex-1 p-6 flex flex-col gap-4 overflow-auto">
          <div className="flex justify-between items-center">
            <div className="w-48 h-6 bg-neutral-200 rounded-md"></div>
            <div className="w-32 h-8 bg-neutral-100 rounded-md"></div>
          </div>

          <div className="grid grid-cols-3 gap-4 flex-1">
            
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            

          </div>

          
        </main>
      </div>
    </div>
  );
};

export default Airbnb;
