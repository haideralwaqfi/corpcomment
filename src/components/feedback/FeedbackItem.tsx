import { TriangleUpIcon } from "@radix-ui/react-icons";
import { type TFeedbackItem } from "../../types/types";
export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: TFeedbackItem;
}) {
  const { badgeLetter, company, upvoteCount, text, daysAgo } = feedbackItem;
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
        <p>{company}</p>
        <p>{text}</p>
      </div>
      {daysAgo == 0 ? <p>Now</p> : <p>{daysAgo}d</p>}
    </li>
  );
}
