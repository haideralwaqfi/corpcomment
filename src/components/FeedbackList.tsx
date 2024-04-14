import { TriangleUpIcon } from "@radix-ui/react-icons";
import React from "react";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>Haider</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            excepturi fuga exercitationem molestiae cupiditate impedit deleniti,
            nam qui, aut temporibus ullam iste ipsa! Repudiandae alias pariatur,
            voluptates velit molestiae distinctio.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
