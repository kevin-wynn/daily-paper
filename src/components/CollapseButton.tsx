import { useStore } from "@nanostores/preact";
import { collapsedItems } from "../stores/collapsedItemsStore";

export const CollapseButton = ({ newsXML }: { newsXML: string }) => {
  const $collapsedItems = useStore(collapsedItems);

  // todo typings
  const handleClick = (e: any) => {
    const htmlFriendlyText = newsXML.toLowerCase().replaceAll(" ", "_");
    const collapsedItemsCopy: string[] = $collapsedItems;
    collapsedItemsCopy.includes(htmlFriendlyText)
      ? collapsedItemsCopy.splice(
          collapsedItemsCopy.indexOf(htmlFriendlyText),
          1
        )
      : collapsedItemsCopy.push(htmlFriendlyText);
    const uniqueItems: string[] = [...new Set(collapsedItemsCopy)];
    (collapsedItems as any).set(uniqueItems);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          class="w-14 h-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      </button>
    </div>
  );
};
