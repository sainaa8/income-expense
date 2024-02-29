import fs from "fs";

import jwt from "jsonwebtoken";

import { compareHash } from "../utils/passwordHash.js";
import { client } from "/Users/23LP8204/Desktop/firstfullProject/Backend/index.js";

const getExpenceIncomeTable = async (email) => {

  const allExpenceIncomeQuery = `SELECT * FROM income_expense WHERE email = $1`;
  const expenceIncome = await client.query(allExpenceIncomeQuery, [email]);
 
  return expenceIncome.rows;
};

const getUserQuery = async (email) => {
 
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);
  
  return user.rows;
};

export const MiddlewareOfLogin = async (req, res) => {
  const { password, email } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("email or password is wronggggg");
    }
    // if (email === "" || password === "") {
    //   res.status(400).send("please provide email and password");
    // }
    const users = await getUserQuery(email);
    const allExpenceIncome = await getExpenceIncomeTable(email);
    console.log(allExpenceIncome);
    console.log(users);
    if (users.length === 0) {
      res.status(400).send("email or password is wrong");
    }
    const user = users[0];

    const checkPassword = compareHash(password, user.password);
    if (checkPassword) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        process.env.JWT_SECRET || "defaultSecret",
        {
          expiresIn: "1d",
        }
      );
      // console.log(token);
      // req.token = token;
      // req.allExpenceIncome = allExpenceIncome;
      // req.token = { mail: users[0].email, allExpenceIncome: allExpenceIncome };

      // await client.end();
    } else {
      res.status(400).send("email or password is wrongpas");
    }
    await client.end();
    return res.status(200).send({
      token: token,
      mail: users[0].email,
      allExpenceIncome: allExpenceIncome,
    });
    // return "succ";
  } catch (err) {
    res.status(500).send(err.maessage);
  }
};
