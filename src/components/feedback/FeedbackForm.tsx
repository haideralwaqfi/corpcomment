import React, { useState } from "react";
import { MAX_NUMBER_OF_WORDS } from "../../lib/constants.ts";
type FeedbackFormPropsTypes = {
  onAddToList: (text: string) => void;
};
export default function FeedbackForm({ onAddToList }: FeedbackFormPropsTypes) {
  const [text, setText] = useState<string>("");
  const wordsLeft: number = MAX_NUMBER_OF_WORDS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length >= MAX_NUMBER_OF_WORDS) return;
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddToList(text);
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={handleChange}
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
