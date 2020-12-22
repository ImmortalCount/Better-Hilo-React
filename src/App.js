import React, { useState } from "react";
import "./styles.css";
import _ from "lodash";

function App() {
  const [guess, setGuess] = useState("");
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [hiScore, setHiscore] = useState(0);
  const [display, setDisplay] = useState("");
  const [cards, setCards] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ]);
  const images = {
    1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/800px-Playing_card_spade_A.svg.png",

    2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/800px-Playing_card_spade_2.svg.png",

    3: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/800px-Playing_card_spade_3.svg.png",

    4: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/800px-Playing_card_spade_4.svg.png",

    5: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/800px-Playing_card_spade_5.svg.png",

    6: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/800px-Playing_card_spade_6.svg.png",

    7: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/800px-Playing_card_spade_7.svg.png",

    8: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/800px-Playing_card_spade_8.svg.png",

    9: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/800px-Playing_card_spade_9.svg.png",

    10: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/800px-Playing_card_spade_10.svg.png",

    11: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/800px-Playing_card_spade_J.svg.png",

    12: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/800px-Playing_card_spade_Q.svg.png",

    13: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/800px-Playing_card_spade_K.svg.png"
  };

  function Shuffle(cards) {
    return setCards(_.shuffle(cards));
  }

  function Correct(guess, higher) {
    if (guess === higher) {
      return "Correct";
    } else {
      return "Incorrect";
    }
  }

  function Higher(cards, count) {
    if (cards[count] > cards[count - 1]) {
      return "H";
    } else {
      return "L";
    }
  }

  function Highernow(cards, count) {
    if (cards[count + 1] > cards[count]) {
      return "H";
    } else {
      return "L";
    }
  }

  function Scoreincrease(guess, highernow) {
    if (guess === highernow) {
      setScore(score + 1);
    }
  }

  return (
    <div className="App">
      {count < 1 && <h1> Welcome to Higher or Lower</h1>}
      {count < 1 && <h1> Click Shuffle to Begin</h1>}
      {count > 1 && <h1> The previous card is {cards[count - 1]}</h1>}
      {count > 0 && <h1> The current card is {cards[count]}</h1>}
      {count > 1 && (
        <h1>
          {" "}
          You guessed {display} , you were{" "}
          {Correct(guess, Higher(cards, count))}{" "}
        </h1>
      )}
      {count > 1 && (
        <img className="Image" src={images[cards[count - 1]]} alt="new" />
      )}
      {count > 0 && (
        <img className="Image" src={images[cards[count]]} alt="new" />
      )}
      {count > 0 && <h1> Is the next one higher or lower? </h1>}
      {count > 0 && <h1> Your score is {score} </h1>}
      {count > 0 && <h1> Hiscore: {hiScore} </h1>}

      <button
        className="Button"
        onClick={() => {
          setGuess("H");
          setCount(count + 1);
          setDisplay("Higher");
          Scoreincrease("H", Highernow(cards, count));
        }}
      >
        Higher
      </button>
      <button
        className="Button"
        onClick={() => {
          Shuffle(cards);
          setCount(1);
          setScore(0);
        }}
      >
        Shuffle
      </button>
      <button
        className="Button"
        onClick={() => {
          setGuess("L");
          setDisplay("Lower");
          setCount(count + 1);
          Scoreincrease("L", Highernow(cards, count));
        }}
      >
        Lower
      </button>
    </div>
  );
}

export default App;
