import React from "react";
import Header from "./Header";
import FeedbackList from "./FeedbackList";

export default function Container() {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
}
