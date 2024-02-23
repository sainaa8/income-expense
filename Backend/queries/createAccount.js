import { Makehash } from "../utils/passwordHash.js";

import { client } from "/Users/23LP8204/Desktop/firstfullProject/Backend/index.js";

const createUser = async (username, password, email, age) => {
  const userCreateQuery = `
  INSERT INTO users(username, password, email, age)
  VALUES ($1, $2, $3, $4);
  `;

  const iserId = await client.query(userCreateQuery, [
    username,
    Makehash(password),
    email,
    age,
  ]);

  return iserId.rows[0];
};
const getUserQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);

  return user.rows;
};

export const CreateNewUser = async (req, res) => {
  const { username, password, email, age } = req.body;

  try {
    if (!username || !email || !password) {
      return "Something is missing";
    }
    const userscheck = await getUserQuery(email);
    console.log(userscheck);
    if (userscheck.length > 0) {
      console.log("user already exist");
      return "User already exist";
    }

    const users = await createUser(username, password, email, age);

    console.log(users);
    return "succsess";
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
