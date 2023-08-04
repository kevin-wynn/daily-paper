import { Context, Hono } from "hono";
import { Home } from "./pages/Home";
import { getRSSNews } from "./api/news";
import { newsFeedURLs } from "./helpers/newsHelper";

const app = new Hono();

app.get("/public/*", async (ctx: Context) => {
  return await ctx.env.ASSETS.fetch(ctx.req);
});

app.get("/", async (ctx) => {
  let news = {};
  for (const key in newsFeedURLs) {
    if (newsFeedURLs.hasOwnProperty(key)) {
      const url: string = (newsFeedURLs as any)[key];
      const newsText = await getRSSNews(url);
      (news as any)[key] = newsText;
    }
  }

  return ctx.html(<Home news={news} />);
});

export default app;
