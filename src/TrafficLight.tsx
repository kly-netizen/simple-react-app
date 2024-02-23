import React from "react";

interface TrafficLightProps {
  state: {
    value: number;
    label: string;
  };
}

const TrafficLight: React.FC<TrafficLightProps> = React.memo(({ state }) => {
  const getColor = (value: number) => ["red", "yellow", "green"][value % 3];

  return (
    <div className="traffic-light">
      <div
        style={{
          backgroundColor: getColor(state.value),
          width: "50px",
          height: "50px",
        }}
      ></div>
      <p>{state.label}</p>
    </div>
  );
});

export default TrafficLight;
