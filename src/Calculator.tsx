import React, { useState, useEffect } from "react";

const Calculator: React.FC = () => {
  const [distance, setDistance] = useState<number | string>("");
  const [speed, setSpeed] = useState<number | string>("");
  const [eta, setETA] = useState<number | string>("");

  // useState for handling when user edits the distance
  const handleDistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.valueAsNumber;
    // Ensures that number can't be less than 0
    if (value >= 0) {
      setDistance(value);
    }
  };

  // useState for handling when user edits the speed
  const handleSpeedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.valueAsNumber;
    // Ensures that number can't be less than 0
    if (value >= 0) {
      setSpeed(value);
    }
  };

  // useEffect to recalculate ETA when distance or speed changes
  useEffect(() => {
    calculateETA();
  }, [distance, speed]);

  // Function to calculate ETA
  const calculateETA = () => {
    // distance && speed makes sure that the variables have value
    // Checks that the types of distance and speed are number so we can do our ETA calculation below
    if (
      distance &&
      speed &&
      typeof distance === "number" &&
      typeof speed === "number"
    ) {
      // Math equation to get ETA rounded to 2 decimals
      const time: number = distance / speed;
      setETA(time.toFixed(2));
    } else {
      setETA("");
    }
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="distance">Distance</label>
          <input
            type="number"
            id="distance"
            value={distance}
            placeholder="Enter Distance"
            onChange={handleDistanceChange}
          ></input>
        </div>
        <div>
          <label htmlFor="speed">Speed</label>
          <input
            type="number"
            id="speed"
            value={speed}
            placeholder="Enter Speed"
            onChange={handleSpeedChange}
          ></input>
        </div>
      </form>
      <div>
        <h3>Estimated Time of Arrival (ETA): {`${eta} hours`}</h3>
      </div>
    </>
  );
};

export default Calculator;
