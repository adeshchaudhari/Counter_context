// src/Counter.js
import React from 'react';
import { useCounter } from './CounterContext';

const Counter = () => {
  const { count, incrementCounter, decrementCounter } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>Increment</button><br/><br/>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default Counter;
