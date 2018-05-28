import * as Router from "koa-router"
import { artpieces } from "./artists"

const router = new Router();

const version ="/v1";

router.prefix("/api"+version);
router.use(artpieces);



export const routes = router.routes();