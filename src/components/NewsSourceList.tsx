import { useStore } from "@nanostores/preact";
import { collapsedItems } from "../stores/collapsedItemsStore";
import { NewsSourceTitle } from "./NewsSourceTitle";
import type { NewsItem } from "../pages/index.astro";
import { activeNewsSource } from "../stores/activeNewsSourceStore";
import type { FilterSourcesType } from "./NewsSourceFilter";

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
  const $activeNewsSource = useStore(activeNewsSource);
  const htmlFriendlyText = newsItem.name.toLowerCase().replaceAll(" ", "_");

  const activeNewsSources = $activeNewsSource.filter(
    (source: FilterSourcesType) => {
      if (source.active) {
        return source;
      }
    }
  );

  const isActiveNewsSource: FilterSourcesType | undefined =
    activeNewsSources.find((source: FilterSourcesType) => {
      return source.sourceName === newsItem.sourceName;
    });

  return (
    <div class="mb-12">
      {isActiveNewsSource &&
        (isActiveNewsSource as FilterSourcesType).active && (
          <>
            <NewsSourceTitle
              name={newsItem.name}
              sourceLogo={newsItem.sourceLogo}
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
          </>
        )}
    </div>
  );
};
