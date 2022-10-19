import { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  function Add() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>count : {count}</h1>
      <ChildComponent count={count} btn={Add} />
    </div>
  );
}
