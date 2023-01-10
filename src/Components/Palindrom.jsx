import React from "react";
import { useState } from "react";

const Palindrom = () => {
  const [word, SetWord] = useState("");
  const [result, SetResult] = useState("");

  const inputHandler = (e) => {
    SetWord(e.target.value);
  };

  const submitHandler = () => {
    isPalindrom();
  };

  const isPalindrom = () => {
    const reversedWord = word.toLowerCase().split("").reverse().join("");
    console.log("word", word);
    console.log("rw", reversedWord);

    if (reversedWord === word.toLowerCase())
      SetResult(`${word} is a palindrome!`);
    else SetResult(`${word} is not a palindrome!`);
  };
  return (
    <div className="palindrom_task">
      <h2>Palindrome checker</h2>
      <p>Check if the word is a palindrome or not ?</p>
      <div>
        <label htmlFor="numbers"></label>
        <input onChange={inputHandler} type="text" id="numbers" />
      </div>
      <button onClick={submitHandler}>Submit</button>
      <p>{result}</p>
    </div>
  );
};

export default Palindrom;
