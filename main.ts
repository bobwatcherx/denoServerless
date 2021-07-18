import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello dunia danta!";
});

addEventListener("fetch",app.fetchEventHandler());
