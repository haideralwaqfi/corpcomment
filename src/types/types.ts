export type TFeedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type TFeedbackItems = Array<TFeedbackItem>;
