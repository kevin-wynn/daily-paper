import { useStore } from "@nanostores/preact";
import { collapsedItems } from "../stores/collapsedItemsStore";
import { NewsSourceTitle } from "./NewsSourceTitle";
import type { NewsItem } from "../pages/index.astro";

export const NewsSourceList = ({
  newsItem,
  items,
  lastBuildDate,
}: {
  newsItem: NewsItem;
  items: any;
  lastBuildDate: string;
}) => {
  const $collapsedItems = useStore(collapsedItems);
  const htmlFriendlyText = newsItem.name.toLowerCase().replaceAll(" ", "_");

  return (
    <div class="mb-12">
      <NewsSourceTitle
        name={newsItem.name}
        source={newsItem.source}
        sourceURL={newsItem.sourceURL}
        lastBuildDate={lastBuildDate}
      />
      <div
        class={`grid md:gap-6 grid-cols-1 md:grid-cols-3 ${
          ($collapsedItems as string[]).includes(htmlFriendlyText)
            ? "hidden"
            : ""
        }`}
      >
        {items.map((newsItem: any) => (
          <a
            href={newsItem.link._text}
            target="_blank"
            class="hover:bg-slate-200 p-4 mt-8"
          >
            <h3 class="text-xl underline">{newsItem.title._text} </h3>
            <span class="font-thin no-underline">
              {new Date(newsItem.pubDate._text).toLocaleString()}
            </span>
            <p class="mt-4">{newsItem.description._text}</p>
          </a>
        ))}
      </div>
    </div>
  );
};
