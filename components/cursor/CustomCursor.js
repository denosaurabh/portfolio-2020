import React, { useEffect, useRef } from 'react';

import { Cursor } from '../../styles/components/customCursor';

const CustomCursor = () => {
  const cursor = useRef(null);

  const onMouseMove = (event) => {
    console.log('mouse moving!');

    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  console.log('CustomCursor!');

  useEffect(() => {
    console.log('on Effect');
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <>
      <Cursor
        ref={cursor}
        intial={{ width: '16px', height: '16px' }}
        animate={{ width: '32px', height: '32px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="cursor"
      />
    </>
  );
};

export default CustomCursor;
