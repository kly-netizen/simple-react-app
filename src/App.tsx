import React, { useState, useMemo, useCallback } from "react";
import Counter from "./Counter";
import TrafficLight from "./TrafficLight";

const App: React.FC = () => {
  const [counter1, setCounter1] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const trafficState = useMemo(() => {
    return { value: counter1, label: "Traffic State" };
  }, [counter1]);

  const handleClick1 = useCallback((e: number) => {
      setTotalClicks((prev) => prev + 1);
      setCounter1(e);
    },
    [setTotalClicks, setCounter1]
  );

  const handleClick2 = useCallback((e: number) => {
      setTotalClicks((prev) => prev + 1);
    },
    [setTotalClicks]
  );

  return (
    <div className="App">
      <Counter onValueChange={handleClick1} />
      <Counter onValueChange={handleClick2} />
      <p>Total clicks: {totalClicks}</p>
      <TrafficLight state={trafficState} />
    </div>
  );
};

export default App;
