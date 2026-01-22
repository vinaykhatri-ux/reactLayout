import React from "react";
import Card from "./Card";

interface ListProps {
  num: number;
}

const List = ({ num }: ListProps) => {
  const arr: number[] = [];

  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return (
    <div className="w-72 bg-[#e5e5e5] rounded-xl p-3 flex flex-col shrink-0">
     
      <div className="flex justify-between mb-3">
        <div className="w-24 h-5 bg-[#a3a3a3] rounded-md" />
        <div className="w-6 h-5 bg-[#a3a3a3] rounded-md" />
      </div>

     
      <div className="flex-1 flex flex-col gap-2">
        {arr.map((index) => (
          <Card key={index} />
        ))}
      </div>

      
      <div className="h-8 bg-[#d4d4d8] rounded-md mt-2" />
    </div>
  );
};

export default List;
