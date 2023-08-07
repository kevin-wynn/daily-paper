export type NewsSourceType = {
  name: string;
  sourceLogo: string;
  url: string;
  sourceURL: string;
  sourceName: string;
};

export const newsFeedURLs: NewsSourceType[] = [
  {
    name: "Top News",
    sourceLogo: "AP.png",
    url: "https://apnews.com/hub/ap-top-news.rss",
    sourceURL: "https://apnews.com",
    sourceName: "Associated Press",
  },
  {
    name: "Politics",
    sourceLogo: "AP.png",
    url: "https://apnews.com/politics.rss",
    sourceURL: "https://apnews.com",
    sourceName: "Associated Press",
  },
  {
    name: "World News",
    sourceLogo: "NYT.png",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    sourceURL: "https://nytimes.com",
    sourceName: "New York Times",
  },
  {
    name: "Movies",
    sourceLogo: "NYT.png",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Movies.xml",
    sourceURL: "https://nytimes.com",
    sourceName: "New York Times",
  },
  {
    name: "Arts",
    sourceLogo: "NYT.png",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    sourceURL: "https://nytimes.com",
    sourceName: "New York Times",
  },
  {
    name: "Economy",
    sourceLogo: "NYT.png",
    url: "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
    sourceURL: "https://www.nytimes.com",
    sourceName: "New York Times",
  },
];
