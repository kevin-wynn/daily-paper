import { CollapseButton } from "./CollapseButton";

export const NewsSourceTitle = ({
  name,
  source,
  sourceURL,
  lastBuildDate,
}: {
  name: string;
  source: string;
  sourceURL: string;
  lastBuildDate: string;
}) => {
  const htmlFriendlyText = source.toLowerCase().replaceAll(" ", "_");
  return (
    <div class="flex flex-col">
      <div class="flex flex-row items-center">
        <h2 class="text-3xl md:text-7xl bg-rose-500 text-white font-bold mr-4 p-2 underline pr-8">
          {name}
        </h2>
        <CollapseButton name={name} />
      </div>
      <div class="my-2">
        <span>Last Built: {new Date(lastBuildDate).toLocaleString()}</span>
      </div>
      <div class="w-8 mt-4">
        <a target="_blank" href={sourceURL}>
          <img
            alt="source logo image"
            class="object-scale-down"
            src={`/public/${htmlFriendlyText}.png`}
          />
        </a>
      </div>
    </div>
  );
};
