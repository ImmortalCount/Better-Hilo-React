import React, { useState } from "react";
import "./styles.css";
import _ from "lodash";

function App() {
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [display, setDisplay] = useState("");
  const cards = [13, 2, 7, 6, 11, 5, 23, 1, 56, 2, 54, 6];

  function Correct(guess, higher) {
    if (guess === higher) {
      return "Correct";
    } else {
      return "Incorrect";
    }
  }

  function Scoreincrease(Correct) {
    if (Correct === "Correct") {
      setScore(score + 1);
    }
  }

  function Higher(cards, count) {
    if (cards[count] > cards[count - 1]) {
      return "H";
    } else {
      return "L";
    }
  }

  return (
    <div className="App">
      <h1> The previous card is {cards[count - 1]}</h1>
      <h1> The current card is {cards[count]}</h1>
      <h1>
        {" "}
        You guessed {display} , you were {Correct(guess, Higher(cards, count))}{" "}
      </h1>
      <h1> The count is {count}</h1>
      <h1> Your score is {score}</h1>
      {Scoreincrease(Correct)}
      <button
        onClick={() => {
          setGuess("H");
          setCount(count + 1);
          setDisplay("Higher");
        }}
      >
        Higher
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Shuffle
      </button>
      <button
        onClick={() => {
          setGuess("L");
          setDisplay("Lower");
          setCount(count + 1);
        }}
      >
        Lower
      </button>
    </div>
  );
}

export default App;
