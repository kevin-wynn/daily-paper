export const getRSSNews = async (url: string) => {
  try {
    const res = await fetch(url);
    const text = await res.text();
    return text;
  } catch (e) {
    console.log("[ERROR]: news.ts getRSSNews:", e);
  }
};
