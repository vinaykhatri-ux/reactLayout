import React from 'react'

interface TabProps {
    active?: boolean;
}

const Tab = ({active=false}:TabProps) => {
  return (
    <div className={`h-8 w-8 rounded-md ${active ? "bg-[#171717]" : "bg-[#e5e5e5]"}`} />
  )
}

export default Tab