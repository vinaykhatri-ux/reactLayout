import React from "react";

interface TabProps {
  bgColor: string;
}

const Tab = ({bgColor} : TabProps) => {
  return <div className={`w-10 h-10 bg-neutral-${bgColor} rounded-md`}></div>;
};

export default Tab;
