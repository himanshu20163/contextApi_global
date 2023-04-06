import { useState } from "react";
import B from "./B";
import mySecondContext from "./context";

function A(props) {
  const [state, setState] = useState("");
  return (
    <div>
      <h2>A Component</h2>
      <p>D Comp : {state} </p>
      <hr />
      <mySecondContext.Provider value={{ setState }}>
        <B />
      </mySecondContext.Provider>
    </div>
  );
}

export default A;