import { useState } from "react";


const Counter = () => {
  let [stateCounter, setStateCounter] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
            stateCounter = stateCounter + 1;
            setStateCounter(stateCounter)
            console.log("stateCounter", stateCounter)
        }}
        >
        Counter Button
      </button>
      :{stateCounter}
    </div>
  );
};

export default Counter;
