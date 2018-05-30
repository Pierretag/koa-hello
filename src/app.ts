import * as Koa from "koa";
import {routes } from "./app/routes/index"
const app = module.exports = new Koa();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  

  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });
  

  // logger
  app.use(routes);

if (!module.parent) app.listen(3000);
console.log("server is running on port 3000");