import { client } from "/Users/23LP8204/Desktop/firstfullProject/Backend/index.js";
const addIncomeExpense = async (
  amount,
  category,
  date,
  time,
  payee,
  note,
  types,
  email
) => {
  const createIncomeExpenceTable = `INSERT INTO income_expense(amount,
        category,
        date,
        time,
        payee,
        note,
        types,
        email) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;
  const clientIncomeExpence = await client.query(createIncomeExpenceTable, [
    amount,
    category,
    date,
    time,
    payee,
    note,
    types,
    email,
  ]);
  return clientIncomeExpence;
};
export const incomeExpense = async (req, res) => {
  const { amount, category, date, time, payee, note, types, email } = req.body;
  try {
    if (
      !amount ||
      !category ||
      !date ||
      !time ||
      !payee ||
      !note ||
      !types ||
      !email
    ) {
      throw new Error("Please fill all the fields2");
    }
    const incomeExpence = await addIncomeExpense(
      amount,
      category,
      date,
      time,
      payee,
      note,
      types,
      email
    );
    console.log(incomeExpence);
    return "successs";
  } catch (err) {
    throw new Error(err.message);
  }
};
