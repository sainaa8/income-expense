import express from "express";
import { getLogin } from "../controllers/userController.js";
import { MiddlewareOfLogin } from "../middleware/loginPass.js";
import { getCreate } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", MiddlewareOfLogin, getLogin);
userRouter.post("/create", getCreate);
export default userRouter;
