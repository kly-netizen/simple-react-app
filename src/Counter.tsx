import React, { useState } from "react";

interface CounterProps {
  onValueChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = React.memo(({ onValueChange }) => {
  const [value, setValue] = useState(0);

  const handleClick = (e: number) => {
    const nextValue = value + e;
    setValue(nextValue);
    onValueChange(nextValue);
  };

  return (
    <div className="counter">
      <button onClick={() => handleClick(-1)}>-</button>
      <span>{value}</span>
      <button onClick={() => handleClick(1)}>+</button>
    </div>
  );
});

export default Counter;
