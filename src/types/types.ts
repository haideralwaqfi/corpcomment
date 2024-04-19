export type feedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

export type feedbackItems = Array<feedbackItem>;
