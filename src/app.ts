import express from "express";
import 'dotenv/config';
import path from "path";
import webRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8083;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
webRoutes(app);

//config static file : images/css/js
app.use(express.static('public'));
 
app.listen(PORT, ()=>{
    console.log(`My app is running on port: ${PORT}`)
    console.log(__dirname + '/views')
});

