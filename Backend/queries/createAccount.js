import fs from "fs";
import { Makehash } from "../utils/passwordHash.js";
const userDB =
  "/Users/23LP8204/Desktop/firstfullProject/Backend/models/user.json";
export const CreateNewUser = async (req, res) => {
  try {
    const { password, email, username } = req.body;
    if (!username || !email || !password) {
      return "Something is missing";
    }

    const tempo = await fs.readFileSync(userDB, "utf-8");
    const users = JSON.parse(tempo);

    const user = users.find((user) => user.email === email);

    if (user) {
      return "User already exist";
    }
    const pass = Makehash(password);
    users.push({
      username,
      email,
      pass,
    });
    await fs.writeFileSync(userDB, JSON.stringify(users));
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};
