import { useEffect, useState } from "react";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import HashtagList from "./components/hashtag/HashtagList";
import { TFeedbackItem } from "./types/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const filetedFeedbackItems = selectedCompany
    ? feedbackItems.filter(
        (feedbackItem) => feedbackItem.company === selectedCompany
      )
    : feedbackItems;
  const companyList = feedbackItems
    .map((item) => {
      return item.company;
    })
    .filter((company, i, array) => {
      return array.indexOf(company) === i;
    });

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word: string) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      company: companyName,
      text: text,
      daysAgo: 0,
    };
    setFeedbackItems([...feedbackItems, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  const handleSelectedCompany = (company: string) => {
    setSelectedCompany(company);
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
        feedbackItems={filetedFeedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList
        companyList={companyList}
        handleSelectedCompany={handleSelectedCompany}
      />
    </div>
  );
}

export default App;
