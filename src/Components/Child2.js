import React, { memo } from "react";

const Child2 = ({setInput2,value1}) => {
  
  console.log('child2')
  return (
    <div>
      <h3>Child 2</h3>
      <div>
        <input type="text" onChange={(event) => setInput2(event.target.value)} />
      </div>
      <br />
      <br />
      <p>Child 1 Value: {value1}</p>
    </div>
  );
};

export default memo(Child2);
