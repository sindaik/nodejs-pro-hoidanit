import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "services/user.services";

const getHomePage = async (req: Request, res: Response) => {
    //get users
    const users = await getAllUsers();
    // console.log(">>> check users: ", users);
    return res.render("home", {
        users: users,
    });
};
const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user.ejs");
};
const postCreateUser = async (req: Request, res: Response) => {
    console.log(">>> check data: ", req.body);
    const { fullName, email, address } = req.body;
    //handle create user
    await handleCreateUser(fullName, email, address);
    return res.redirect("/");
};
const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(">>> check id:", req.params.id);
    return res.redirect("/");
};
export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser };
