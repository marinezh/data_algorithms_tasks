import React from "react";
import { useState } from "react";

const StackData = () => {
  const [stack, setStack] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const pushHandler = () => {
    if (input.length) {
      setStack([...stack, input]);
    }
    setInput("");
    console.log(stack);
  };

  const popHandler = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1));
    } else {
      setStack([]);
    }
  };

  return (
    <div className="stackdata_task">
      <h2>Stack data structure</h2>
      <p className="sort_desc">
        A LIFO (Last in - First out) data structure! The last element added to
        the stack will be the first element removed from the stack. Think about
        a stack of plates, or a stack of markers.
      </p>
      <div>
        <label htmlFor="numbers"></label>
        <input onChange={inputHandler} type="text" id="numbers" />
      </div>

      <p className="stack_result">{stack.join(", ")}</p>
      <div className="pushpop_buttons">
        <button onClick={pushHandler}>Push</button>
        <button onClick={popHandler}>Pop</button>
      </div>
    </div>
  );
};

export default StackData;
