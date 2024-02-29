import { client } from "../index.js";
// import { incomeExpense } from "./incomeExpemce.js";
const getUserQuery = async (email) => {
  const userInformation = `SELECT * FROM income_expense WHERE email = $1 ORDER BY date DESC;`;
  const incomeExpence = await client.query(userInformation, [email]);

  return incomeExpence.rows;
};

export const getIncomeExpence = async (req, res) => {
  const { email } = req.body;
  try {
    const incomeExpence = await getUserQuery(email);
    console.log(incomeExpence);
    return incomeExpence;
  } catch (err) {
    res.status(500).send(err.message);
  }
};
