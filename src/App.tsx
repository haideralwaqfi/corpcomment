import { useEffect, useState } from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import HashtagList from "./components/HashtagList";
import { TFeedbackItem } from "./types/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word: string) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      companyName: companyName,
      text: "",
      daysAgo: 0,
    };
    setFeedbackItems([...feedbackItems, newItem]);
  };

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
    <div className="app">
      <Footer />
      <Container
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList />
    </div>
  );
}

export default App;
