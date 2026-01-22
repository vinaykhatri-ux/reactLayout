import React from 'react'

interface BoxProps {
    width :string;
    height : string ;
    bgColor: string;
}

const Box = ({width, height, bgColor}: BoxProps) => {
  return (
    <div className={`w-${width} h-${height} bg-gray-${bgColor} rounded-md`} />
  )
}

export default Box