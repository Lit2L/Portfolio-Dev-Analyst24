// components/CustomScrollbar.js
import React from 'react'

const CustomScrollbar = () => {
  return (
    <div className='h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <p>Your content goes here...</p>
      {/* Repeat the content to make the scrollbar visible */}
      <p>Your content goes here...</p>
      <p>Your content goes here...</p>
      <p>Your content goes here...</p>
      <p>Your content goes here...</p>
    </div>
  )
}

export default CustomScrollbar
