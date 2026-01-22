import React from 'react'

interface OptionBoxProps {
    active? :boolean;
}

const OptionBox = ({active=false }:OptionBoxProps) => {
  return (
    <div className={`w-10 h-10 bg-[${active ? "#e5e5e5": "#f5f5f5"}] rounded-md ${active ? 'border-2 border-[#171717]' : ''}`} />
  )
}

export default OptionBox