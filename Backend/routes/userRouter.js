import express from "express";
import { getLogin } from "../controllers/userController.js";
import { MiddlewareOfLogin } from "../middleware/loginPass.js";
import { Create } from "../controllers/userController.js";
import { tokenCheck } from "../middleware/tokenpass.js";
import { addRecordController } from "../controllers/userController.js";
import { addRecordIncomeController } from "../controllers/userController.js";
import { IncomeExpenseQuery } from "../controllers/userController.js";
import { GetUserController } from "../controllers/userController.js";
import { getIncomeExpenceController } from "../controllers/userController.js";
import { userUpdateController } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", MiddlewareOfLogin, getLogin);
userRouter.post("/create", Create);
userRouter.get("/user", tokenCheck);
userRouter.post("/addRecord", addRecordController);
userRouter.post("/addRecordIncome", addRecordIncomeController);
userRouter.post("/incomeExpence", IncomeExpenseQuery);
userRouter.post("/getUser", GetUserController);
userRouter.post("/getIncomeExpence", getIncomeExpenceController);
userRouter.post("/userUpdate", userUpdateController);
export default userRouter;
