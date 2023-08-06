export type NewsSourceType = {
  name: string;
  source: string;
  url: string;
};

export const newsFeedURLs: NewsSourceType[] = [
  {
    name: "Top News",
    source: "AP",
    url: "https://apnews.com/hub/ap-top-news.rss",
  },
  {
    name: "World News",
    source: "AP",
    url: "https://apnews.com/hub/world-news.rss",
  },
  {
    name: "Entertainment",
    source: "AP",
    url: "https://apnews.com/entertainment.rss",
  },
];
