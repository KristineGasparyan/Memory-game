import React from 'react'
import './cardStyle.css'


export default function Card({ id, imgType, width, height, flipped, handleClick, disabled, solved, }) {
  return (
    <div
      className={`container ${flipped ? 'flipped' : ''}`}
      style={{
        width, height
      }}
      onClick={() => disabled ? null : handleClick(id)}
    >
      <div className="flipper">
        <img
          id={id}
          style={{
            height, width
          }}
          className={flipped ? 'front' : 'back'}
          src={flipped ? `/img/${imgType}.svg` : ((solved) ? '/img/output-onlinepngtools.png' : '/img/back.svg')}
          alt='card'
        />
      </div>
    </div>
  )
}