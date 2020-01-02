import React from "react";


const ChildComponent = (props) => {
  return <button onClick = {() => props.HandleClick('Kiran')}>Click Me</button>;
};

export default ChildComponent;
