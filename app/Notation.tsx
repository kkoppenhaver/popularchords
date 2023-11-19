'use client'

import { useEffect, useId } from 'react';
import abcjs from "abcjs";

const Notation = ( {notation} ) => {
  const notationId = useId();

  useEffect(() => {
    abcjs.renderAbc(notationId, notation);
  });

  return <div id={notationId} className="notation max-w-xs" data-notation={notation}></div>;
}

export default Notation;