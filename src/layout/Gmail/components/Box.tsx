import React from "react";

interface BoxProps {
  size: string;
  color: string;
}
const Box = ({ size, color }: BoxProps) => {
  return <div className={`h-${size} bg-neutral-${color} rounded-md`}></div>;
};

export default Box;
