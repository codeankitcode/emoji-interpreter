import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
let emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    const userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Out of syllabus";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input style={{ padding: "10px" }} onChange={inputHandler} />

      <p style={{ fontWeight: "600" }}>{meaning}</p>

      <h2>Emojis We Know</h2>
      {/* <p style={{ fontWeight: 600 }}>{meaning}</p> */}

      {emojiWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
