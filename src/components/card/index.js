import React from 'react'
import './cardStyle.css'

export default function Card({ id, type, width, height, flipped, handleClick }) {
  return (
    <div
      className={`container ${flipped ? 'flipped' : ''}`}
      style={{
        width, height
      }}
      onClick={() => handleClick(id)}
    >
      <div className="flipper">
        <img
          style={{
            height, width
          }}
          className={flipped ? 'front' : 'back'}
          src={flipped ? `/img/${type}.svg` : '/img/bak.svg'}
          alt='card'
        />
      </div>
    </div>
  )
}