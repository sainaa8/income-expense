import fs from "fs";
import { compareHash } from "../utils/passwordHash.js";
const userDb =
  "/Users/23LP8204/Desktop/firstfullProject/Backend/models/user.json";

export const MiddlewareOfLogin = async (req, res, next) => {
  const { password, email: bodyMail } = req.body;

  try {
    const userfile = await fs.readFileSync(userDb, "utf-8");
    const users = JSON.parse(userfile);
    const user = users.find((el) => el.email === bodyMail);

    if (!user) {
      res.status(400).send("email or password is wrong");
    }

    const passs = compareHash(password, user.pass);

    if (passs) {
      req.userData = user;
      next();
    } else {
      res.status(400).send("email or password is wrong");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};
