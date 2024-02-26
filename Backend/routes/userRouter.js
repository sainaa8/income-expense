import express from "express";
import { getLogin } from "../controllers/userController.js";
import { MiddlewareOfLogin } from "../middleware/loginPass.js";
import { getCreate } from "../controllers/userController.js";
import { tokenCheck } from "../middleware/tokenpass.js";
import { addRecordController } from "../controllers/userController.js";
import { addRecordIncomeController } from "../controllers/userController.js";
import { IncomeExpenseQuery } from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/login", MiddlewareOfLogin, getLogin);
userRouter.post("/create", getCreate);
userRouter.get("/user", tokenCheck);
userRouter.post("/addRecord", addRecordController);
userRouter.post("/addRecordIncome", addRecordIncomeController);
userRouter.post("/incomeExpence", IncomeExpenseQuery);
export default userRouter;
