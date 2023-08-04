import { Hono } from "hono";
import { Layout } from "../components/Layout";
import convert from "xml-js";

const app = new Hono();

export const Home = ({ news }: { news: Object }) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      {Object.keys(news).map((newsXML: any) => {
        const json = convert.xml2json((news as any)[newsXML], {
          compact: true,
        });

        const items = JSON.parse(json).rss.channel.item;

        return (
          <div className="h-screen bg-purple-400 flex items-center justify-center">
            <h2>{newsXML}</h2>
            {items.map((newsItem: any) => (
              <div>
                <a href={newsItem.link._text} target="_blank">
                  <h3>
                    {newsItem.title._text} - {newsItem.pubDate._text}
                  </h3>
                  <p>{newsItem.description._text}</p>
                </a>
              </div>
            ))}
          </div>
        );
      })}
    </Layout>
  );
};
