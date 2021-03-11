import React from 'react';

const Detonate = () => {
  return (
    <button
      onClick={() => {
        fetch('/detonation');
      }}
    >
      Detonate!
    </button>
  );
};

export default Detonate;
