import React, { memo } from "react";

const Child1 = ({setInput1}) => {

  console.log('child1')
  return (
    <div>
      <h3>Child 1</h3>
      <div>
        <input type="text"  onChange={(event)=>setInput1(event.target.value)} />
      </div>
    </div>
  );
};

export default memo(Child1);
