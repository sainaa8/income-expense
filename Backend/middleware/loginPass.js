import fs from "fs";

import jwt from "jsonwebtoken";

import { compareHash } from "../utils/passwordHash.js";
import { client } from "/Users/23LP8204/Desktop/firstfullProject/Backend/index.js";

const getUserQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);
  return user.rows;
};

export const MiddlewareOfLogin = async (req, res, next) => {
  const { password, email } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("email or password is wronggggg");
    }
    // if (email === "" || password === "") {
    //   res.status(400).send("please provide email and password");
    // }
    const users = await getUserQuery(email);
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
      console.log(token);
      req.token = token;
      next();
    } else {
      res.status(400).send("email or password is wrongpas");
    }
  } catch (err) {
    res.status(500).send(err.maessage);
  }
};

// const userDb =
//   "/Users/23LP8204/Desktop/firstfullProject/Backend/models/user.json";

// export const MiddlewareOfLogin = async (req, res, next) => {
//   const { password, email: bodyMail } = req.body;

//   try {
//     const userfile = await fs.readFileSync(userDb, "utf-8");
//     const users = JSON.parse(userfile);
//     const user = users.find((el) => el.email === bodyMail);

//     if (!user) {
//       res.status(400).send("email or password is wrong");

//       return;
//     }
//     const token = jwt.sign(
//       { email: user.email },
//       process.env.JWT_SECRET || "defaultSecret",
//       { expiresIn: "1d" }
//     );

//     const passs = compareHash(password, user.pass);

//     if (passs) {
//       req.token = token;

//       next();
//     } else {
//       res.status(400).send("email or password is wrongg");
//     }
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// };
