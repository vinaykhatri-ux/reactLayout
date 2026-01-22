import React from "react";

interface BoxProps {
  size: string;
  color: string;
  borderRound: string;
}
const Box = ({ size, color, borderRound }: BoxProps) => {
  return <div className={`h-${size} bg-neutral-${color} rounded-${borderRound}`}></div>;
};

export default Box;
