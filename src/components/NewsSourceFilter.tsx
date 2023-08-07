import { useStore } from "@nanostores/preact";
import { useEffect, useState } from "preact/hooks";
import { activeNewsSource } from "../stores/activeNewsSourceStore";
import type { NewsSourceType } from "../helpers/newsHelper";

/**
 * I feel like this component is overly complex and can be simplified...
 */
export type FilterSourcesType = {
  sourceLogo: string;
  sourceName: string;
  active: boolean;
};

export const NewsSourceFilter = ({
  sources,
}: {
  sources: NewsSourceType[];
}) => {
  const [activeNewsSourceState, setActiveNewsSourceState] = useState<
    FilterSourcesType[] | undefined
  >();
  const $activeNewsSource = useStore(activeNewsSource);
  const cleanSources = sources.map((source) => {
    return {
      sourceLogo: source.sourceLogo,
      sourceName: source.sourceName,
      active: true,
    };
  });

  const uniqueSources: FilterSourcesType[] = cleanSources.filter(
    (obj, index) =>
      cleanSources.findIndex((item) => item.sourceName === obj.sourceName) ===
      index
  );

  useEffect(() => {
    setActiveNewsSourceState(uniqueSources);
    (activeNewsSource as any).set(uniqueSources);
  }, []);

  // todo typing
  const toggleActiveSources = (sourceName: string) => {
    const activeNewsSourceCopy: FilterSourcesType[] = $activeNewsSource;
    activeNewsSourceCopy.find((item: FilterSourcesType) => {
      if (item.sourceName === sourceName) {
        item.active = !item.active;
      }
    });
    setActiveNewsSourceState([...activeNewsSourceCopy]);
    (activeNewsSource as any).set([...activeNewsSourceCopy]);
  };

  return (
    <div class="flex flex-row mb-12">
      <span class="text-xl md:text-2xl mr-4">Active News Sources:</span>
      {activeNewsSourceState &&
        activeNewsSourceState.map((source: FilterSourcesType) => (
          <div>
            <button
              type="button"
              onClick={() => toggleActiveSources(source.sourceName)}
            >
              <img
                src={`/${source.sourceLogo}`}
                alt="news source logo"
                class={`h-8 mr-4 ${source.active ? "" : "opacity-50"}`}
              />
            </button>
          </div>
        ))}
    </div>
  );
};
