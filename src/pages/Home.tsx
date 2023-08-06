import { Layout } from "../components/Layout";
import convert from "xml-js";

export const Home = ({ news }: { news: Object }) => {
  return (
    <Layout>
      <h1 class="text-5xl md:text-9xl underline mb-2">The Daily Paper</h1>
      <p class="text-xl md:text-2xl mb-12">
        Your daily source for aggregated news.
      </p>
      {Object.keys(news).map((newsXML: any) => {
        const json = convert.xml2json((news as any)[newsXML], {
          compact: true,
        });

        const items = JSON.parse(json).rss.channel.item;

        return (
          <div class="mb-12">
            <div class="flex flex-row items-center">
              <h2 class="text-3xl md:text-7xl font-bold mr-4 bg-orange-500 p-2 underline">
                {newsXML}
              </h2>
            </div>
            <div class="grid md:gap-6 grid-cols-1 md:grid-cols-3">
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
