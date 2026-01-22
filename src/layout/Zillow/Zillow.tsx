
import Navbar from "./components/Navbar";
import Listing from "./components/Listing";

import Marker from "./components/Marker";

const Zillow = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-1">
        <section className="w-1/2 flex flex-col border-r border-neutral-200">
          <div className="h-12 flex items-center gap-2 px-4 border-b border-neutral-200">
            <div className="w-24 h-8 bg-neutral-100 rounded-full"></div>
            <div className="w-24 h-8 bg-neutral-100 rounded-full"></div>
            <div className="w-24 h-8 bg-neutral-100 rounded-full"></div>
          </div>

          <div className="flex-1 p-4 flex flex-col gap-4 overflow-auto">
            <Listing />

            <Listing />
            
            <Listing />
            <Listing />
          </div>
        </section>

        <section className="w-1/2 bg-neutral-200 relative">
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <div className="w-10 h-10 bg-white rounded-md shadow-md"></div>
            <div className="w-10 h-10 bg-white rounded-md shadow-md"></div>
          </div>

          <Marker top="20" left="32" />
          <Marker top="40" right="48" />
          <Marker bottom="32" left="48" />

          
        </section>
      </div>
    </div>
  );
};

export default Zillow;
