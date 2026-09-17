import express, { Express } from "express";
import { getCreateUserPage, getHomePage, postCreateUser, postDeleteUser } from "controllers/user.controller";

const router = express.Router();
const webRoutes = (app: Express) => {
    router.get("/", getHomePage);
    router.get("/create-user", getCreateUserPage); // lấy data để hiện thị
    router.post("/handle-create-user", postCreateUser); // lấy data đi
    router.post("/handle-delete-user/:id", postDeleteUser); // lấy data đi

    app.use("/", router);
};
export default webRoutes;
