import React from 'react';

function Button({ onAdd }) {
  return (
    <button onClick={onAdd}>
      Add 1!
    </button>
  );
}

export default Button;
