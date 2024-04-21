import FeedbackItem from "./FeedbackItem";
import { type TFeedbackItem } from "../../types/types";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStores";

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemsStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );
  return (
    <ol className="feedback-list">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      {filteredFeedbackItems.map((feedbackItem: TFeedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
