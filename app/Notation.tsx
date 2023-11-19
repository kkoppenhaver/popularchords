'use client';

import { useEffect, useId } from 'react';
import abcjs from 'abcjs';

// Define the types for your component's props
interface NotationProps {
  notation: string;
}

const Notation = ({ notation }: NotationProps) => {
  const notationId = useId();

  useEffect(() => {
    abcjs.renderAbc(notationId, notation);
  }, [notation, notationId]);

  return <div id={notationId} className="notation max-w-xs" data-notation={notation}></div>;
}

export default Notation;