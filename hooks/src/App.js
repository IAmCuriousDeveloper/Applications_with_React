import React, { useState } from "react";
import "./App.css";

//our fisrt hook
//useState()
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <h1>hey i am count variable</h1>
      <p>my value is {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
