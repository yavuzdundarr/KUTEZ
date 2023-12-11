import React, { useState } from 'react';
import './Mycard.css'


const Mycard = ({ cardno }) => {
  const colorOptions = [
    { id: 'yellowgold', color: '#E6CA97' },
    { id: 'whitegold', color: '#D9D9D9' },
    { id: 'redgold', color: '#E1A4A9' },
  ];

  const [selectedColor, setSelectedColor] = useState(colorOptions[0].id);

  const getImageUrl = (cardno, color) => {
    return `${process.env.PUBLIC_URL}/rings/image${cardno}_${color.toLowerCase()}.jpg`;
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className='mycard'>
      <img src={getImageUrl(cardno, selectedColor)} alt={`Card ${cardno}`} />
      <p>Engagement Ring {cardno} </p>
      <p> $101.00 USD</p>
      <div className='color-options'>
        {colorOptions.map((option) => (
          <div
            key={option.id}
            className='color-swatch'
            style={{ backgroundColor: option.color }}
            onClick={() => handleColorChange(option.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Mycard;