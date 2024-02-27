import { Login } from "../queries/login.js";
import { CreateNewUser } from "../queries/createAccount.js";
import { AddRecordQuery } from "../queries/addrecord.js";
import { AddRecordIncome } from "../queries/addRecordIncome.js";
import { incomeExpense } from "../queries/incomeExpemce.js";

export const getLogin = async (req, res) => {
  try {
    // res.send(req.allExpenceIncome);
    res.send(req.token);
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
