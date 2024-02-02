import fs from "fs";
const userDB =
  "/Users/23LP8204/Desktop/firstfullProject/Backend/models/user.json";

export const Login = async (req, res) => {
  const { password, email: bodyMail } = req.body;
  try {
    const usersFile = await fs.readFileSync(userDB, "utf-8");
    console.log(usersFile);
    const users = JSON.parse(usersFile);
    const user = users.find((el) => el.email === bodyMail);
    return user;
  } catch (err) {
    throw new Error(err.messsage);
  }
};
