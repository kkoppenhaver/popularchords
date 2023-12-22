'use client';

import { useState } from 'react';

type TransposerProps = {
  onSliderChange: (value: number) => void;
  classes: string;
};

const Transposer = ({ onSliderChange, classes }: TransposerProps) => {
  const keyValues = ['F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#Eb', 'E', 'F', 'F#/Gb'];
  const [sliderValue, setSliderValue] = useState(6);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Convert the value to a number
    const newValue = parseInt(event.target.value, 10);
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