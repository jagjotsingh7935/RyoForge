import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count Updated to ${count}`);
  }, [count]);

  const addValue = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const deleteValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetValue = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter Function</h1>
      <p>Count: {count}</p>
      <button onClick={addValue}>Add Value</button>
      <button onClick={deleteValue}>Delete Value</button>
      <button onClick={resetValue}>Reset Value</button>
    </>
  );
}

export default App;
