import React from "react";
import Header from "./Header";
import FeedbackList from "./FeedbackList";
import { TFeedbackItems } from "../types/types";

type ContainerPropsTypes = {
  feedbackItems: TFeedbackItems;
  isLoading: boolean;
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

export default function Container({
  feedbackItems,
  errorMessage,
  isLoading,
  handleAddToList,
}: ContainerPropsTypes) {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        errorMessage={errorMessage}
        isLoading={isLoading}
      />
    </main>
  );
}
