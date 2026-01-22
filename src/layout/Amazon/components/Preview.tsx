import React from 'react'

interface PreviewProps {
  active?: boolean
}
const Preview = ({active = false}:PreviewProps) => {
  return (
    <div className={`h-20 bg-[#e5e5e5] rounded-md ${active ? 'border-2 border-[#171717]' : ''}`}/>
  )
}

export default Preview