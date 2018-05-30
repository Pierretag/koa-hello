import * as Router from "koa-router"
import { artpieces } from "./artists"

const router = new Router();

const version ="/v1";


router.prefix("/api"+version);


// Hello World Page
router.get('/', async (ctx) => {
    ctx.body = "Hello world!";
})

router.use(artpieces);



export const routes = router.routes();