import React from "react";
import { useState } from "react";

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const queueHandler = () => {
    if (input.length) {
      setQueue([...queue, input]);
    }
    setInput("");
    console.log(queue);
  };

  const dequeueHandler = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    } else {
      setQueue([]);
    }
  };
  return (
    <div className="queue_task">
      <h2>Queue data</h2>
      <p className="sort_desc">A FIFO data structure! First In First Out!</p>
      <div>
        <label htmlFor="numbers"></label>
        <input onChange={inputHandler} type="text" id="numbers" />
      </div>

      <p className="queue_result">{queue.join(", ")}</p>
      <div className="pushpop_buttons">
        <button onClick={queueHandler}>Queue </button>
        <button onClick={dequeueHandler}>Dequeue</button>
      </div>
    </div>
  );
};

export default Queue;
