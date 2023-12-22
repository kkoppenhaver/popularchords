'use client';

import { useState, ChangeEvent } from 'react';

// Define a type for the props
type OctaverProps = {
    onSliderChange: (value: number) => void,
    classes: string;
};

const Octaver = ({ onSliderChange }: OctaverProps) => {
  const octaveValues = [-1, 0, 1];
  const [sliderValue, setSliderValue] = useState(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Convert the value to a number
    const newValue = parseInt(event.target.value, 10);
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