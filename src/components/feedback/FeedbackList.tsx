import FeedbackItem from "./FeedbackItem";
import { type TFeedbackItems, type TFeedbackItem } from "../../types/types";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

type FeedbackItemType = {
  feedbackItems: TFeedbackItems;
  isLoading: boolean;
  errorMessage: string;
};

export default function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackItemType) {
  return (
    <ol className="feedback-list">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      {feedbackItems.map((feedbackItem: TFeedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
