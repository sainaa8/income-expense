import { client } from "../index.js";

const getData = async (category) => {
  const queryIE = `SELECT * FROM income_expense WHERE category = $1 ORDER BY date DESC`;
  const data = await client.query(queryIE, [category]);
  return data.rows;
};
export const getCategoryDataQuery = async (req, res) => {
  const { category } = req.body;
  //   console.log(category, "sdsd");
  console.log(category, "ugihojp");
  try {
    const incomeDaTA = await getData(category);
    console.log(category);
    return incomeDaTA;
  } catch (err) {
    res.status(500).send(err.message);
  }
};
