import { Login } from "../queries/login.js";
import { CreateNewUser } from "../queries/createAccount.js";
export const getLogin = async (req, res) => {
  try {
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
