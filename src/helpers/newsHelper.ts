export type NewsSourceType = {
  name: string;
  source: string;
  url: string;
  sourceURL: string;
};

export const newsFeedURLs: NewsSourceType[] = [
  {
    name: "Top News",
    source: "AP",
    url: "https://apnews.com/hub/ap-top-news.rss",
    sourceURL: "https://apnews.com",
  },
  {
    name: "World News",
    source: "NYT",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    sourceURL: "https://nytimes.com",
  },
  {
    name: "Movies",
    source: "NYT",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Movies.xml",
    sourceURL: "https://nytimes.com",
  },
  {
    name: "Arts",
    source: "NYT",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    sourceURL: "https://nytimes.com",
  },
  {
    name: "Economy",
    source: "NYT",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
    sourceURL: "https://www.nytimes.com",
  },
];
