import * as Koa from "koa";
import {routes } from "./routes/index"
const app = new Koa();


app.use(routes);

app.listen(3000);
console.log("server is running on port 3000");
