// import express from "express";
import cors from "cors";
// import userRouter from "./routes/userRouter.js";

// const app = express();
// app.use(express.json());

// const port = 8000;

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });

import pg from "pg";
import userRouter from "./routes/userRouter.js";
import express from "express";
const CONNECTION_STRING =
  "postgresql://gnasainaa4:LRwQON20WoVl@ep-sparkling-star-a1bmllqg.ap-southeast-1.aws.neon.tech/incomeExpense?sslmode=require";

export const client = new pg.Client({ connectionString: CONNECTION_STRING });

const dbinit = async () => {
  await client.connect();
  await createYserTable();
  // await createAddrecordTable();
  await createCati();
};
dbinit();

const createYserTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    age SMALLINT 
  )`;
  await client.query(query);
};

const createCati = async () => {
  const add = `CREATE TABLE IF NOT EXISTS addd (
    id SERIAL PRIMARY KEY,
    amount TEXT NOT NULL,
    category TEXT NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    payee TEXT NOT NULL,
    note TEXT NOT NULL 
    
  )`;
  await client.query(add);
};

// const createAddrecordTable = async () => {
//   const addrecordq = `CREATE TABLE IF NOT EXISTS record (
//     id SERIAL PRIMARY KEY,
//     amount TEXT NOT NULL,
//     category TEXT NOT NULL,
//     date DATE NOT NULL,
//     time TIME NOT NULL,
//     payee TEXT NOT NULL,
//     note TEXT NOT NULL

//   )`;
//   await client.query(addrecordq);
// };

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);

// app.post("/sign", async (req, res) => {
//   const { username, password, email, age } = req.body;
//   try {
//     const userId = await createUser(username, password, email, age);
//     console.log(userId);
//     res.send(userId);
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.get("/get-users", async (req, res) => {
//   const query = `SELECT * FROM users`;
//   const result = await client.query(query);
//   res.send(result.rows);
// });

// app.use("/auth", userRouter);
app.listen(8000, () => {
  console.log("http://localhost:8000");
});
