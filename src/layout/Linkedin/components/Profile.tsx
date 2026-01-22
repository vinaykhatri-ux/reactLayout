import React from "react";

const Profile = () => {
  return (
    <div className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden">
      <div className="h-32 bg-[#d4d4d4]" />

      <div className="relative p-4">
        <div className="w-24 h-24 bg-[#e5e5e5] rounded-full border-4 border-white absolute -top-12 left-4" />

        <div className="ml-28 flex flex-col gap-2">
          <div className="w-48 h-6 bg-[#e5e5e5] rounded-md" />
          <div className="w-64 h-4 bg-[#f5f5f5] rounded-md" />
        </div>

        <div className="flex gap-2 mt-4">
          <div className="w-28 h-8 bg-[#171717] rounded-md" />
          <div className="w-28 h-8 bg-[#f5f5f5] border border-[#d4d4d4] rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
