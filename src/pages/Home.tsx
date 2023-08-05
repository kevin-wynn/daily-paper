import { Hono } from "hono";
import { Layout } from "../components/Layout";
import convert from "xml-js";

const app = new Hono();

export const Home = ({ news }: { news: Object }) => {
  return (
    <Layout>
      <h1 class="text-9xl underline mb-2">The Daily Paper</h1>
      <p class="text-2xl mb-12">Your daily source for aggregated news.</p>
      {Object.keys(news).map((newsXML: any) => {
        const json = convert.xml2json((news as any)[newsXML], {
          compact: true,
        });

        const items = JSON.parse(json).rss.channel.item;

        return (
          <div class="mb-12">
            <h2 class="text-7xl font-bold underline">{newsXML}</h2>
            <div class="grid gap-6 grid-cols-3">
              {items.map((newsItem: any) => (
                <div class="mt-8 hover:bg-slate-200 p-4">
                  <a href={newsItem.link._text} target="_blank">
                    <h3 class="text-xl underline">{newsItem.title._text} </h3>
                    <span class="font-thin no-underline">
                      {newsItem.pubDate._text}
                    </span>
                    <p class="mt-4">{newsItem.description._text}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};
