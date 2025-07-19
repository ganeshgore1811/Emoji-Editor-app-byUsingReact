import React from 'react';
import './ColorButton.css';

function ColorButton({ bgColor, setBgColor }) {
  return (
    <div
      className='color-button'
      onClick={() => setBgColor(bgColor)}
      style={{ backgroundColor: bgColor }}
      title={bgColor}
    ></div>
  );
}

export default ColorButton;