// src/Counter.js
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  const double=()=>setCount(count*2);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p className="counter">{count}</p>
      <button onClick={increase}>+</button>
      <button onClick={double}>double</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrease}>Decrease</button>

    </div>
  );
};

export default Counter;
