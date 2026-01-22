import React from "react";

interface MarkerProps {
    top?:string;
    left?:string;
    bottom?:string;
    right?:string;
}

const Marker = (props: MarkerProps) => {
  return (
    <div className={`absolute h-8 px-3 bg-white rounded-full shadow-md ${props.top ? `top-${props.top}` : ''} ${props.left ? `left-${props.left}` : ''} ${props.bottom ? `bottom-${props.bottom}` : ''} ${props.right ? `right-${props.right}` : ''}`}></div>
  );
};

export default Marker;
