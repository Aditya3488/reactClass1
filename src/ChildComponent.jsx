import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <h1>{props.count} </h1>
      <button onClick={props.btn}> Add</button>
    </div>
  );
}
