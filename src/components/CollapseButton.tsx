import { useStore } from "@nanostores/preact";
import { collapsedItems } from "../stores/collapsedItemsStore";
import { useEffect } from "preact/hooks";

export type CollapsedItems = {
  expire: string;
  collapsedItems: string[];
};

export const CollapseButton = ({ name }: { name: string }) => {
  const htmlFriendlyText = name.toLowerCase().replaceAll(" ", "_");
  const $collapsedItems = useStore(collapsedItems);
  useEffect(() => {
    const collapsedItemsLocalStorage: string | null =
      localStorage.getItem("collapsedItems");
    const todaysDate = new Date().getDate();
    if (collapsedItemsLocalStorage) {
      const expireDate = new Date(
        JSON.parse(collapsedItemsLocalStorage).expire
      ).getDate();
      if (expireDate < todaysDate || todaysDate === 1) {
        localStorage.removeItem("collapsedItems");
      } else {
        collapsedItems.set(JSON.parse(collapsedItemsLocalStorage));
      }
    }
  }, []);

  const handleClick = () => {
    const collapsedItemsCopy: CollapsedItems = $collapsedItems;
    collapsedItemsCopy.collapsedItems.includes(htmlFriendlyText)
      ? collapsedItemsCopy.collapsedItems.splice(
          collapsedItemsCopy.collapsedItems.indexOf(htmlFriendlyText),
          1
        )
      : collapsedItemsCopy.collapsedItems.push(htmlFriendlyText);
    const uniqueItems: CollapsedItems = {
      expire: new Date().toLocaleString(),
      collapsedItems: [...new Set(collapsedItemsCopy.collapsedItems)],
    };
    collapsedItems.set(uniqueItems);
    localStorage.setItem("collapsedItems", JSON.stringify(uniqueItems));
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
          class={`w-8 h-8 md:w-14 md:h-14 ${
            $collapsedItems.collapsedItems?.includes(htmlFriendlyText)
              ? "text-blue-500"
              : ""
          }`}
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
