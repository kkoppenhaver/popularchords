'use client';

import { useEffect, useId } from 'react';
import abcjs from 'abcjs';

// Define the types for your component's props
interface NotationProps {
  notation: string;
  width: string;
  steps: number;
}

const Notation = ({ notation, width, steps }: NotationProps) => {
  const notationId = useId();

  useEffect(() => {
    let visualObj = abcjs.renderAbc(notationId, notation);
    let updatedNotation = abcjs.strTranspose(notation, visualObj, steps);
    abcjs.renderAbc(notationId, updatedNotation);
  }, [notation, notationId, steps]);

  return <div data-steps={steps} id={notationId} className="notation max-w-xs" style={{maxWidth: width}}></div>;
}

export default Notation;