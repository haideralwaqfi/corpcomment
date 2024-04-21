import React, { useState } from "react";
import { MAX_NUMBER_OF_WORDS } from "../../lib/constants.ts";
type FeedbackFormPropsTypes = {
  onAddToList: (text: string) => void;
};
export default function FeedbackForm({ onAddToList }: FeedbackFormPropsTypes) {
  const [text, setText] = useState<string>("");
  const [showValidIndicator, setShowValidIndicator] = useState<boolean>(false);
  const [showInValidIndicator, setShowInValidIndicator] =
    useState<boolean>(false);
  const wordsLeft: number = MAX_NUMBER_OF_WORDS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length >= MAX_NUMBER_OF_WORDS) return;
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validation
    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => {
        setShowValidIndicator(false);
      }, 2000);
    } else {
      setShowInValidIndicator(true);
      setTimeout(() => {
        setShowInValidIndicator(false);
      }, 2000);
      return;
    }
    onAddToList(text);
    setText("");
  };

  return (
    <form
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInValidIndicator ? "form--invalid" : ""
      }`}
      onSubmit={handleSubmit}>
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
