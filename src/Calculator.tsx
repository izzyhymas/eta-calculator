import React, { useState, useEffect } from "react";
import "./App.css";

const Calculator: React.FC = () => {
  const [distance, setDistance] = useState<number | string>("");
  const [speed, setSpeed] = useState<number | string>("");
  const [eta, setETA] = useState<number | string>("");

  // useState for handling when user edits the distance
  const handleDistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    // Clears input by converting value to number
    if (value === "" || Number(value) >= 0) {
      setDistance(value);
    }
  };

  // useState for handling when user edits the speed
  const handleSpeedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    // Clears input by converting value to number
    if (value === "" || Number(0) >= 0) {
      setSpeed(value);
    }
  };

  // useEffect to recalculate ETA when distance or speed changes
  useEffect(() => {
    calculateETA();
  }, [distance, speed]);

  // Function to calculate ETA
  const calculateETA = () => {
    // Checks that distance and speed are not equal to empty strings
    // Checks if distance and speed can be converted into numbers
    if (
      distance !== "" &&
      speed != "" &&
      !isNaN(Number(distance)) &&
      !isNaN(Number(speed))
    ) {
      // Math equation to get ETA rounded to 2 decimals
      const time: number = Number(distance) / Number(speed);
      setETA(time.toFixed(2));
    } else {
      setETA("");
    }
  };

  return (
    <>
      <div className="calculator">
        <form>
          <div className="input-group">
            <label htmlFor="distance">Distance</label>
            <input
              type="number"
              id="distance"
              value={distance}
              placeholder="Enter Distance"
              onChange={handleDistanceChange}
            ></input>
          </div>
          <div className="input-group">
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
        <div className="eta">
          <h3>Estimated Time of Arrival (ETA): {`${eta} hours`}</h3>
        </div>
      </div>
    </>
  );
};

export default Calculator;
