'use client';

import { useEffect, useId } from 'react';
import abcjs from 'abcjs';

const Notation = ({ notation, width, steps, octave }) => {
  const notationId = useId();
  const octaveRegex = /(K:C octave=)\d+/;

   // Replace the existing octave number with the new one
  let newNotation = notation.replace(octaveRegex, `$1${octave}`);

  useEffect(() => {
    let visualObj = abcjs.renderAbc(notationId, newNotation);
    let updatedNotation = abcjs.strTranspose(newNotation, visualObj, steps);
    abcjs.renderAbc(notationId, updatedNotation);
  }, [notation, notationId, steps, octave, newNotation]);

  return <div data-steps={steps} id={notationId} data-octave={octave} className="notation max-w-xs" style={{maxWidth: width}}></div>;
}

export default Notation;