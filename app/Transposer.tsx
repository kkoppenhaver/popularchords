'use client';

import { useState } from 'react';

const Transposer = ({ onSliderChange, classes }) => {
  const keyValues = ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#Eb', 'E', 'F', 'F#/Gb'];
  const [sliderValue, setSliderValue] = useState(6);

  const handleChange = (event) => {
      const newValue = event.target.value;
      setSliderValue(newValue);
      onSliderChange(newValue - 6);
  };

  return (
    <>
    <input
      className={classes}
      type="range"
      min="0"
      max="12"
      step="1"
      value={sliderValue}
      onChange={handleChange}
    />
    {keyValues[sliderValue]}
    </>
  );
};

export default Transposer;