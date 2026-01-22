import React from 'react'

interface BarProps {
  size: string;
  color: string;
}
const Bar = ({ size, color }: BarProps) => {
  return (
    <div className={`h-${size} bg-neutral-${color} rounded-md`}></div>
  )
}

export default Bar