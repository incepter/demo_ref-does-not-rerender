import React from "react";
import "./styles.css";

export default function App() {
  const rerenderRef = React.useRef(0);
  const [rerenderState, setRerenderState] = React.useState(0);
  console.log("rendering");
  return (
    <div className="App">
      <span>Ref: {rerenderRef.current}</span>
      <br />
      <span>State: {rerenderState}</span>
      <br />
      <button onClick={() => setRerenderState(old => old + 1)}>
        Increment State
      </button>
      <br />
      <button
        onClick={() => {
          rerenderRef.current += 1;
        }}
      >
        Increment Ref
      </button>
      <br />
    </div>
  );
}
