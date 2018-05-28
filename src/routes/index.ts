import * as Router from "koa-router"
import { artists } from "./artists"

const router = new Router();

const version ="/v1";

router.prefix("/api"+version);
router.use(artists);



export const routes = router.routes();