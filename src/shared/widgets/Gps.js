import React from "react";
import nativeOperations from "../services/native";

const Gps = () => {
  const successFn = (pos) => {
    console.log("Success Call", pos);
  };

  const failureFn = (error) => {
    console.log("Failure Call", error);
  };

  const getLocation = () => {
    nativeOperations.gps(successFn, failureFn);
    console.log("Test");
  };

  return <button onClick={getLocation}>Get Location</button>;
};

export default Gps;
