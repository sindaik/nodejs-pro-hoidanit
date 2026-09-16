import express, {Express} from 'express';

const router = express.Router();
const webRoutes = (app: Express) =>{
    router.get("/", (req, res)=>{ 
        res.render("home.ejs")
    })

    router.get("/sindaik", (req, res)=>{
        res.send("Hello sindaik.id.vn")
    })

    router.get("/vnhax", (req, res)=>{
        res.send("Hello vnhax")
    })

    app.use("/", router);
}
export default webRoutes;