import React from "react";
import nativeOperations from "../services/native";
import { useState } from "react";
import Map from "./Map";

const Gps = () => {
  const [position, setPosition] = useState(null);
  const [flag, setFlag] = useState(false);

  const successFn = (pos) => {
    console.log("Success Call", pos);
    setPosition(position);
    setFlag(true);
  };

  const failureFn = (error) => {
    console.log("Failure Call", error);
  };

  const getLocation = () => {
    nativeOperations.gps(successFn, failureFn);
    console.log("Test");
  };

  return (
    <>
      {flag ? (
        <Map position={position} />
      ) : (
        <button onClick={getLocation}>Get Location</button>
      )}
    </>
  );
};

export default Gps;
