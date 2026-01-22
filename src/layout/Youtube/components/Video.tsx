import React from "react";

const Video = () => {
  return (
    <section className="flex-1 flex flex-col gap-4">
      <div className="aspect-video bg-[#171717] rounded-xl" />

      <div className="flex flex-col gap-3">
        <div className="w-3/4 h-6 bg-[#d4d4d4] rounded-md" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#e5e5e5] rounded-full" />

            <div className="flex flex-col gap-1">
              <div className="w-32 h-4 bg-[#e5e5e5] rounded-md" />
              <div className="w-24 h-3 bg-[#f5f5f5] rounded-md" />
            </div>

            <div className="w-28 h-9 bg-[#171717] rounded-full ml-4" />
          </div>

          <div className="flex gap-2">
            <div className="w-24 h-9 bg-[#e5e5e5] rounded-full" />
            <div className="w-24 h-9 bg-[#e5e5e5] rounded-full" />
            <div className="w-9 h-9 bg-[#e5e5e5] rounded-full" />
          </div>
        </div>
      </div>

      <div className="bg-[#e5e5e5] p-4 rounded-xl">
        <div className="w-48 h-4 bg-[#d4d4d4] rounded-md mb-2" />
        <div className="w-full h-4 bg-[#d4d4d4] rounded-md" />
      </div>
    </section>
  );
};

export default Video;
