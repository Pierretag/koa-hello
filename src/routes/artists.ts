import * as Router from "koa-router"
const router = new Router();


router.get("/hello/", async (ctx) => {
    ctx.body = "hello World";
})


export const artists = router.routes();