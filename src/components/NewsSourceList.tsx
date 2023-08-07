import { useStore } from "@nanostores/preact";
import { activeNewsSource } from "../stores/activeNewsSourceStore";
import type { FilterSourcesType } from "./NewsSourceFilter";
import { NewsItem } from "./NewsItem";
import type { NewsItemType } from "../pages/index.astro";

export const NewsSourceList = ({
  newsItem,
  items,
  lastBuildDate,
}: {
  newsItem: NewsItemType;
  items: any;
  lastBuildDate: string;
}) => {
  const $activeNewsSource = useStore(activeNewsSource);

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
          <NewsItem
            items={items}
            newsItem={newsItem}
            lastBuildDate={lastBuildDate}
          />
        )}
    </div>
  );
};
