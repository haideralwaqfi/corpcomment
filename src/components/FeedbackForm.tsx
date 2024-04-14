import React from "react";

export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea
        placeholder="blabla"
        spellCheck={false}
        id="feedback-textarea"
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
