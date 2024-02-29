import jwt from "jsonwebtoken";

import { compareHash } from "../utils/passwordHash.js";
// import { client } from "/Users/23LP8204/Desktop/firstfullProject/Backend/index.js";
import { client } from "../index.js";

const getUserQuery = async (email) => {
  const loginUserQuery = `SELECT * FROM users WHERE email = $1`;
  const user = await client.query(loginUserQuery, [email]);

  return user.rows[0];
};

export const MiddlewareOfLogin = async (req, res, next) => {
  const { password, email } = req.body;

  try {
    if (!email || !password) {
      res.status(400).send("email or password is wronggggg");
    }

    const users = await getUserQuery(email);

    const user = users;

    const checkPassword = compareHash(password, user.password);

    if (!checkPassword) {
      res.status(400).send("email or password is wrong");
    }

    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET || "defaultSecret",
      {
        expiresIn: "1d",
      }
    );
    console.log({ token, user });

    req.user = { token, user };

    next();
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
