import React, { useMemo, useState } from "react";

const Main = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [add, setAdd] = useState(0);
  const [toggle, setToggle] = useState(false);

  const addition = () => {
    console.log("addition");
    setAdd(+value1 + +value2);
  };
  const multiplication = useMemo(() => {
    console.log("multiply");
    return +value1 * +value2;
  }, [value1, value2]);

  const toggleEvent = () => {
    console.log(toggle);
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <div className="main">
      <div className="inputField">
        <input
          type="number"
          value={value1}
          onChange={(event) => setValue1(event.target.value)}
        />
      </div>
      <div className="inputField">
        <input
          type="number"
          value={value2}
          onChange={(event) => setValue2(event.target.value)}
        />
      </div>
      <div>
        <p>Addition : {add}</p>
        <p>Multiplication: {multiplication}</p>
      </div>
      <div className="btn">
        <button onClick={addition}>ADD</button>
        <button className={toggle ? "orange" : "blue"} onClick={toggleEvent}>
          TOGGLE BUTTON
        </button>
      </div>
    </div>
  );
};

export default Main;
