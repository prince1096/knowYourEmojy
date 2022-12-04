import React from "react";
import { useState } from "react";
import "./style.css";

const emojiDictionary = {
  "☺": "Smiling",
  "😲": "disbelief",
  "😥": "sad",
  "🥡": "takeout box",
  "❤": "love",
  "😑": "annoyance",
  "🥱": "yawning",
  "🤡": "joker",
  "😀": "smiling",
  "🤐": "zipper-mouth",
  "😞": "disapponted-face",
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default () => {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    // console.log(event.target.value);

    const emoji = event.target.value;

    let meaning = emojiDictionary[emoji];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "we don't have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div>
      <h1> Inside outtt </h1>

      <input onChange={emojiInputHandler} />

      <div> {meaning} </div>

      <h3> emojis we Know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "30px", padding: "0 0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
};
