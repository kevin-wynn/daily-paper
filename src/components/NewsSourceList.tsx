import { useStore } from "@nanostores/preact";
import { collapsedItems } from "../stores/collapsedItemsStore";
import { CollapseButton } from "./CollapseButton";

export const NewsSourceList = ({
  items,
  name,
}: {
  items: any;
  name: string;
}) => {
  const $collapsedItems = useStore(collapsedItems);

  return (
    <div class="mb-12">
      <div class="flex flex-row items-center">
        <h2 class="text-3xl md:text-7xl font-bold mr-4 bg-orange-500 text-white p-2 underline">
          {name}
        </h2>
        <CollapseButton name={name} />
      </div>
      <div
        class={`grid md:gap-6 grid-cols-1 md:grid-cols-3 ${
          ($collapsedItems as string[]).includes(
            name.toLowerCase().replaceAll(" ", "_")
          )
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
