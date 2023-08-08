import { useStore } from "@nanostores/preact";
import type { NewsItemType } from "../pages/index.astro";
import { NewsSourceTitle } from "./NewsSourceTitle";
import { collapsedItems } from "../stores/collapsedItemsStore";

export const NewsItem = ({
  newsItem,
  lastBuildDate,
  items,
}: {
  newsItem: NewsItemType;
  lastBuildDate: string;
  items: any;
}) => {
  const $collapsedItems = useStore(collapsedItems);
  const htmlFriendlyText = newsItem.name.toLowerCase().replaceAll(" ", "_");

  return (
    <>
      <NewsSourceTitle
        name={newsItem.name}
        sourceLogo={newsItem.sourceLogo}
        sourceURL={newsItem.sourceURL}
        lastBuildDate={lastBuildDate}
      />
      <div
        class={`grid md:gap-6 grid-cols-1 md:grid-cols-3 ${
          $collapsedItems.collapsedItems?.includes(htmlFriendlyText)
            ? "hidden"
            : ""
        }`}
      >
        {items.map((newsItem: any) => {
          return (
            <a
              href={newsItem.link._text}
              target="_blank"
              class="p-4 mb-4 hover:bg-slate-200"
            >
              <h3 class="text-xl underline">
                {newsItem.title?._text || newsItem.description?._cdata}
              </h3>
              <span class="font-thin no-underline">
                {new Date(newsItem.pubDate._text).toLocaleString()}
              </span>
              <p class="mt-4">
                {newsItem.description?._text || newsItem.description?._cdata}
              </p>
            </a>
          );
        })}
      </div>
    </>
  );
};
