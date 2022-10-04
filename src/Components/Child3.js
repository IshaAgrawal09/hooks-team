import React, { memo } from "react";

const Child3 = (props) => {
  console.log('child3')
  return (
    <div>
      <h3>Child 3</h3>
      <div>Child 2 Value: {props.value2}</div>
    </div>
  );
};

export default memo(Child3);
