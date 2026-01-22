import React from "react";

interface FormOptionProps {
  active?: boolean;
}
const FormOption = ({ active = false }: FormOptionProps) => {
  return (
    <div
      className={`p-3 rounded-md border ${
        active ? "border-[#171717] bg-[#f5f5f5]" : "border-[#e5e5e5]"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="h-4 w-4 bg-[#d4d4d4] rounded-md" />
        <div className="h-4 w-4 bg-[#e5e5e5] rounded-md" />
        <div className="flex-1 h-4 bg-[#e5e5e5] rounded-md" />
      </div>
      <div className="h-3 w-3/4 bg-[#f5f5f5] rounded-md" />
    </div>
  );
};

export default FormOption;
