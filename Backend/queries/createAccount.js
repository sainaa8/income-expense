import fs from "fs";
import { Makehash } from "../utils/passwordHash.js";

import { client } from "/Users/23LP8204/Desktop/firstfullProject/Backend/index.js";

const createUser = async (username, password, email, age) => {
  const userCreateQuery = `
  INSERT INTO users(username, password, email, age)
  VALUES ($1, $2, $3, $4) RETURNING *;
  `;

  const iserId = await client.query(userCreateQuery, [
    username,
    Makehash(password),
    email,
    age,
  ]);

  console.log(iserId.rows[0]);
  return iserId.rows[0];
};
// const getUserQuery = async (username, password, email, age) => {
//   const loginUserQuery = `SELECT * FROM users`;
//   const user = await client.query(loginUserQuery);
//   console.log(user.rows);
//   return user.rows;
// };

export const CreateNewUser = async (req, res) => {
  const { username, password, email, age } = req.body;
  try {
    const users = await createUser(username, password, email, age);

    // const userscheck = await getUserQuery(username, password, email, age);
    // const user = userscheck.find((user) => user.email === email);
    // if (!user) {
    //   throw new Error("user alreday exist");
    // }

    console.log(users);
    return users;
  } catch (err) {
    console.log();
    err.message;
  }
};

// const userDB =
//   "/Users/23LP8204/Desktop/firstfullProject/Backend/models/user.json";

// export const CreateNewUser = async (req, res) => {
//   try {
//     const { password, email, username } = req.body;
//     console.log(req.body);
//     if (!username || !email || !password) {
//       return "Something is missing";
//     }

//     const tempo = await fs.readFileSync(userDB, "utf-8");
//     const users = JSON.parse(tempo);

//     const user = users.find((user) => user.email === email);

//     if (user) {
//       return "User already exist";
//     }
//     const pass = Makehash(password);
//     users.push({
//       username,
//       email,
//       pass,
//     });
//     await fs.writeFileSync(userDB, JSON.stringify(users));
//     return users;
//   } catch (err) {
//     throw new Error(err.message);
//   }
// };
