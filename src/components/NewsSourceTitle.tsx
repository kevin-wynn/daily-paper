import { CollapseButton } from "./CollapseButton";

export const NewsSourceTitle = ({
  name,
  sourceLogo,
  sourceURL,
  lastBuildDate,
}: {
  name: string;
  sourceLogo: string;
  sourceURL: string;
  lastBuildDate: string;
}) => {
  return (
    <div class="flex flex-col">
      <div class="flex flex-row items-baseline">
        <div class="flex flex-row items-baseline">
          <div class="w-6 mr-2">
            <a target="_blank" href={sourceURL}>
              <img
                alt="source logo image"
                class="object-scale-down"
                src={`/${sourceLogo}`}
              />
            </a>
          </div>
          <h2 class="text-3xl md:text-7xl font-bold mr-2">{name}</h2>
        </div>
        <CollapseButton name={name} />
      </div>
      <div class="my-2">
        <span>Last Built: {new Date(lastBuildDate).toLocaleString()}</span>
      </div>
    </div>
  );
};
