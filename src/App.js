import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncreaement = () => setCount(count + 1);

  return (
    <div div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <h2 className="my-5 ">{count}</h2>

            {/* <Button text="something" onClick={() => { }} className="sdsd" disabled={true} /> */}

            <button
              className="btn btn-success mx-3"
              onClick={handleIncreaement}
            >
              Increament
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Decrement
            </button>
            <button
              className="btn btn-secondary mx-3"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
