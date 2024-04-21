import { TriangleUpIcon } from "@radix-ui/react-icons";
import { type TFeedbackItem } from "../../types/types";
import { useState } from "react";

export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: TFeedbackItem;
}) {
  const { badgeLetter, company, upvoteCount, text, daysAgo } = feedbackItem;
  const [upVoteCount, setUpvoteCount] = useState(upvoteCount);
  const [open, setOpen] = useState(false);
  const handleUpVote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };
  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}>
      <button onClick={handleUpVote}>
        <TriangleUpIcon />
        <span>{upVoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      {daysAgo == 0 ? <p>Now</p> : <p>{daysAgo}d</p>}
    </li>
  );
}
