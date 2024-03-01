import { MiddlewareOfLogin } from "../queries/loginQuery.js";
import { CreateNewUser } from "../queries/createAccount.js";
import { AddRecordQuery } from "../queries/addrecord.js";
import { AddRecordIncome } from "../queries/addRecordIncome.js";
import { incomeExpense } from "../queries/incomeExpemce.js";
import { GetUser } from "../queries/getUser.js";
import { getIncomeExpence } from "../queries/GetIncomeExpence.js";
import { userUpdate } from "../queries/UpdateUser.js";
import { getIcomeOnly } from "../queries/getIncomeData.js";

export const getLogin = async (req, res) => {
  try {
    // res.send(req.allExpenceIncome);
    console.log(req.user);
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const Create = async (req, res) => {
  try {
    const temp = await CreateNewUser(req);
    res.send(temp);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const addRecordController = async (req, res) => {
  try {
    const tempCe = await AddRecordQuery(req);
    res.send(tempCe);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const addRecordIncomeController = async (req, res) => {
  try {
    const tempCe = await AddRecordIncome(req);
    res.send(tempCe);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const IncomeExpenseQuery = async (req, res) => {
  try {
    const temCe = await incomeExpense(req);
    res.send(temCe);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const GetUserController = async (req, res) => {
  try {
    const temCe = await GetUser(req);
    res.send(temCe);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getIncomeExpenceController = async (req, res) => {
  try {
    const userTempce = await getIncomeExpence(req);
    res.send(userTempce);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const userUpdateController = async (req, res) => {
  try {
    const updateTempce = await userUpdate(req);
    res.send(updateTempce);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getIcomeOnlyController= async (req, res)=>{
  try{
    const tempI = await getIcomeOnly(req);
    res.send(tempI);
  }catch(err){
    res.status(500).send(err.message);
  }
}