import React from "react";
import { useState } from "react";

const BubbleSort = () => {
  const [input, setArray] = useState("");
  const [result, setResult] = useState([]);

  const inputHandler = (e) => {
    setArray(e.target.value);
  };

  const submitHandler = () => {
    bubbleSort();
  };

  const bubbleSort = () => {
    let arr = input.split(",").map((el) => +el);
    // console.log(arr);
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    setResult(`Here are your sorted items: ${arr} `);
  };

  return (
    <div className="bubblesort_task">
      <h2>Bubble sort </h2>
      <p className="sort_desc">
        Bubble sort is a basic algorithm for arranging a string of numbers or
        other elements in the correct order. The method works by examining each
        set of adjacent elements in the string, from left to right, switching
        their positions if they are out of order.
      </p>
      <p>Please enter numbers separated by comma.</p>
      <div>
        <label htmlFor="word"></label>
        <input
          onChange={inputHandler}
          type="text"
          id="word"
          placeholder="e.g. 9,8,7,6,5"
        />
      </div>
      <button onClick={submitHandler}>Submit</button>
      <p>{result}</p>
    </div>
  );
};

export default BubbleSort;
