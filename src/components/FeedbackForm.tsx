import React, { useState } from "react";
import { MAX_NUMBER_OF_WORDS } from "../lib/constants.js";
export default function FeedbackForm() {
  const [text, setText] = useState("");
  const wordsLeft: number = MAX_NUMBER_OF_WORDS - text.length;

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="blabla"
        spellCheck={false}
        id="feedback-textarea"
        maxLength={MAX_NUMBER_OF_WORDS}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{wordsLeft}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
