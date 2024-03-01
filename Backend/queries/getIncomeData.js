import { client } from "../index.js";

const getIncomeData = async (types) => {
  const query = `SELECT * FROM income_expense WHERE types = $1 ORDER BY date DESC;`;
  const data = await client.query(query, [types]);
  return data.rows;
};

export const getIcomeOnly = async (req, res) => {
  const { types } = req.body;
  try {
    // if (!types || !email) {
    //   return res.status(400).send("Invalid request");
    // }
    const incomeData = await getIncomeData(types);
    console.log(incomeData);
    return incomeData;
  } catch (err) {
    res.status(500).send(err.message);
  }
};
