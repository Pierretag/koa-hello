import * as Router from "koa-router"
import {museumClient} from "../services/musuemService"


const router = new Router();


router.get("/search/:name", async (ctx) => {

    console.log(`name is ${ctx.params.name}`)

    await museumClient.searchByName(ctx.params.name).then(json => {
        ctx.body = json
    }).catch(err => ctx.body = err);
    

})


export const artpieces = router.routes();