import jwt from "jsonwebtoken";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEiLCJpYXQiOjE3MDg2NDYxMDEsImV4cCI6MTcwODczMjUwMX0.QSoGLyFDi9WVa6g1ixtWVJyRsCv-u8haoDjKqOpsW5c";
export const tokenCheck = (req, res, next) => {
  return jwt.verify(
    token,
    process.env.JWT_SECRET || "defaultSecret",
    (err, result) => {
      if (err) {
        res.status(401).send("provided token is not valid");
        console.log(err.message);
        return;
      } else {
        console.log(result);
        next();
        //
        res.send(result);
      }
    }
  );
};
