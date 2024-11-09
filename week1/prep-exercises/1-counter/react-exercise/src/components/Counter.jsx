import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  return (
    <div>
      <h1>Counter</h1>
      <Count count={count} />
      <Button onAdd={() => setCount(count + 1)} />
      <p>{feedback}</p>
    </div>
  );
}

export default Counter;
