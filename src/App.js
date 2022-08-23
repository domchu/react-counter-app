import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-5 ">{count}</h2>
            <Button
              className="btn btn-success mx-3"
              text="Increment"
              onClick={() => setCount(count + 1)}
              disabled={false}
            />
            <Button
              className="btn btn-danger mx-3"
              text="Decrement"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            />
            <Button
              className="btn btn-secondary mx-3"
              text="Reset"
              onClick={() => setCount(0)}
              disabled={count === 0}
            />

            {/* <Button text="something" onClick={() => { }} className="sdsd" disabled={true} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
