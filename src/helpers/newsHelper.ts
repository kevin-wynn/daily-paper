export type NewsSourceType = {
  name: string;
  sourceLogo: string;
  url: string;
  sourceURL: string;
  sourceName: string;
};

export const newsFeedURLs: NewsSourceType[] = [
  {
    name: 'Futurism',
    sourceLogo: 'futurism.jpeg',
    url: 'https://futurism.com/feed',
    sourceURL: 'https://futurism.com',
    sourceName: 'Futurism'
  }
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
    name: "Nextdraft",
    sourceLogo: "nextdraft.jpeg",
    url: "https://managingeditor.substack.com/feed",
    sourceURL: "https://managingeditor.substack.com/",
    sourceName: "Nextdraft",
  },
  {
    name: "National",
    sourceLogo: "NPR.png",
    url: "https://feeds.npr.org/1001/rss.xml",
    sourceURL: "https://www.npr.org/",
    sourceName: "NPR",
  },
  {
    name: "Movies",
    sourceLogo: "NPR.png",
    url: "https://feeds.npr.org/1008/rss.xml",
    sourceURL: "https://www.npr.org/",
    sourceName: "NPR",
  },
  {
    name: "Science",
    sourceLogo: "NPR.png",
    url: "https://feeds.npr.org/1007/rss.xml",
    sourceURL: "https://www.npr.org/",
    sourceName: "NPR",
  },
];
