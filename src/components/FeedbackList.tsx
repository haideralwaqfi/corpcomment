import FeedbackItem from "./FeedbackItem";
import { type feedbackItem } from "../types/types";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        const data = await res.json();
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      } catch (error) {
        if (error) {
          setErrorMessage("Something went wrong");
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <ol className="feedback-list">
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isLoading && <Spinner />}
      {feedbackItems.map((feedbackItem: feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
