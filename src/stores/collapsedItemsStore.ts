import { atom } from "nanostores";

// todo typing
export const collapsedItems = atom({
  expire: "",
  collapsedItems: [] as string[],
});
