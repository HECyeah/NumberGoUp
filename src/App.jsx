//Link CSS and React pre-made fucntion useState to this JS doc.
import "./App.css";
import { useState } from "react";

//You can only pop a Hook in a function. Hooks will exicute in the oder you place them. 
export default function App() {

  //useState is an array. Destructer it to tinker with it's propeties:
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1)
  }

  function decrementCount() {
    setCount(count - 1)
  }

  //Captain's log: I tried to tackle the reset task with the obviouse (count = 0). It did not work. So I treid to think like a computer. Be the computer!!! below is what I came up with. 
  function reSet() {
    setCount(count - count)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <button onClick={reSet}>Reset</button>
    </div>
  )
}
