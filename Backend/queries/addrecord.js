import { client } from "/Users/23LP8204/Desktop/firstfullProject/Backend/index.js";

const addRecord = async (amount, category, date, time, payee, note) => {
  const createTableRecord = `INSERT INTO addd(amount, category, date, time, payee, note) VALUES ($1, $2, $3, $4, $5, $6);`;

  const rescordsValue = await client.query(createTableRecord, [
    amount,
    category,
    date,
    time,
    payee,
    note,
  ]);
  return rescordsValue;
};

export const AddRecordQuery = async (req, res) => {
  const { amount, category, date, time, payee, note } = req.body;
  try {
    if (!amount || !category || !date || !time || !payee || !note) {
      throw new Error("Please fill all the fields");
    }
    const records = await addRecord(amount, category, date, time, payee, note);
    console.log(records);
    return "success";
  } catch (err) {
    throw new Error(err.message);
  }
};
