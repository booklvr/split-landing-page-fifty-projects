import React, { useState } from 'react'

const SplitLandingPage = () => {
  const [hoverDirection, setHoverDirection] = useState('')
  return (
    <div
      className={
        hoverDirection && hoverDirection === 'left'
          ? 'container hover-left'
          : hoverDirection && hoverDirection === 'right'
          ? 'container hover-right'
          : 'container'
      }
    >
      <div
        className='split left'
        onMouseEnter={() => setHoverDirection('left')}
        onMouseLeave={() => setHoverDirection('')}
      >
        <h1>Playstation 5</h1>
        <a href='#' className='btn'>
          Buy Now
        </a>
      </div>
      <div
        className='split right'
        onMouseEnter={() => setHoverDirection('right')}
        onMouseLeave={() => setHoverDirection('')}
      >
        <h1>XBox Series X</h1>
        <a href='#' className='btn'>
          Buy Now
        </a>
      </div>
    </div>
  )
}

export default SplitLandingPage
