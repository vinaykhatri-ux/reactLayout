import React from 'react'

interface OptionProps {
    width :string;
    bgColor : string;
}

const Option = ({width , bgColor} :OptionProps) => {
  return (
    <div className={`h-5 w-${width} bg-[${bgColor}] rounded-md`} />
  )
}

export default Option