'use client';

import { useState } from 'react';

const Octaver = ({ onSliderChange }) => {
  const octaveValues = [-1, 0, 1];
  const [sliderValue, setSliderValue] = useState(1);

  const handleChange = (event) => {
      const newValue = event.target.value;
      setSliderValue(newValue);
      onSliderChange(octaveValues[newValue]);
  };

  return (
    <>
    <input
      type="range"
      min="0"
      max="2"
      step="1"
      value={sliderValue}
      onChange={handleChange}
    />
    {octaveValues[sliderValue]}
    </>
  );
};

export default Octaver;