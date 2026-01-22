import React from "react";
import OptionBox from "./OptionBox";

const Option = () => {
  return (
    <div className="flex gap-2">
      <OptionBox active />
      <OptionBox />
      <OptionBox />
      <OptionBox />
    </div>
  );
};

export default Option;
