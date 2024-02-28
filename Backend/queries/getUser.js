import jwt from "jsonwebtoken";
export const GetUser = async (req, res) => {
  const header = req.headers.authorization;
  console.log(header);
  if (!header) {
    res.status(400).send("token not found");
    return;
  }

  const token = header.split(" ")[1];
  const { email } = jwt.decode(token);
  console.log(email);

  try {
    // res.status(200).send("hello");
    return email;
  } catch (err) {
    console.log(err);
  }
};
