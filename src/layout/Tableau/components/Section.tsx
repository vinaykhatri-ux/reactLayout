import React from "react";

interface SectionProps {
  height: string;
  width: string;
}

const Section = ({ height, width }: SectionProps) => {
  return (
    <div className={`${height} bg-white border border-neutral-200 rounded-xl p-4 flex flex-col`}>
      <div className={`${width} h-6 bg-neutral-200 rounded-md mb-4`}></div>
      <div className="flex-1 bg-neutral-100 rounded-md"></div>
    </div>
  );
};

export default Section;
