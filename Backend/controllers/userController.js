import { MiddlewareOfLogin } from "../queries/loginQuery.js";
import { CreateNewUser } from "../queries/createAccount.js";
import { AddRecordQuery } from "../queries/addrecord.js";
import { AddRecordIncome } from "../queries/addRecordIncome.js";
import { incomeExpense } from "../queries/incomeExpemce.js";
import { GetUser } from "../queries/getUser.js";

export const getLogin = async (req, res) => {
  try {
    // res.send(req.allExpenceIncome);
    console.log(req.user);
    res.send(req.user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const getCreate = async (req, res) => {
  try {
    const tempCe = await CreateNewUser(req);
    res.send(tempCe);
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
