import React from "react";
import Navbar from "./components/Navbar";
import Tab from "./components/Tab";
import Entry from "./components/Entry";
import Notification from "./components/Notification";

const Salesforce = () => {
  return (
    <main className="h-screen flex-1 flex flex-col overflow-hidden">
      <Navbar />

      <section className="bg-neutral-100 p-6 border-b border-neutral-200 flex gap-6">
        <div className="w-20 h-20 bg-neutral-300 rounded-full"></div>

        <div className="flex-1 flex flex-col gap-2">
          <div className="w-64 h-8 bg-neutral-300 rounded-md"></div>
          <div className="w-96 h-5 bg-neutral-200 rounded-md"></div>

          <div className="flex gap-4 mt-2">
            <div className="w-28 h-8 bg-white border border-neutral-300 rounded-md"></div>
            <div className="w-28 h-8 bg-white border border-neutral-300 rounded-md"></div>
          </div>
        </div>
      </section>

      <section className="flex flex-1">
        <div className="flex-1 flex flex-col">
          <div className="h-12 flex items-center gap-6 px-6 border-b border-neutral-200">
            <Tab bgColor="900" />
            <Tab bgColor="200" />
            <Tab bgColor="200" />
            <Tab bgColor="200" />
          </div>

          <div className="flex-1 overflow-auto p-6">
            <div className="grid grid-cols-2 gap-6">
              <Entry/>

              <Entry/>
            </div>
          </div>
        </div>

        <aside className="w-80 border-l border-neutral-200 p-4 flex flex-col gap-4">
          <div className="w-24 h-6 bg-neutral-200 rounded-md"></div>


          <Notification />
          <Notification />
          <Notification />
          
        </aside>
      </section>
    </main>
  );
};

export default Salesforce;
