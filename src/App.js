import "./App.css";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import Child3 from "./Components/Child3";
import React, { useCallback, useState } from "react";

function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();

  var setInput1 = useCallback((value) => {
    setValue1(value);
  }, []);

  var setInput2 = useCallback((value) => {
    setValue2(value);
  }, []);
  return (
    <div className="App">
      <Child1 setInput1={setInput1} />
      <Child2 value1={value1} setInput2={setInput2} />
      <Child3 value2={value2} />
    </div>
  );
}

export default App;
