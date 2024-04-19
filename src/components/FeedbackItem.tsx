import { TriangleUpIcon } from "@radix-ui/react-icons";
import { type feedbackItem } from "../types/types";
export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: feedbackItem;
}) {
  const { badgeLetter, companyName, upvoteCount, text, daysAgo } = feedbackItem;
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{companyName}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo}d</p>
    </li>
  );
}
