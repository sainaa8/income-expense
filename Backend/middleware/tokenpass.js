import jwt from "jsonwebtoken";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InciLCJpYXQiOjE3MDcxOTM1MzMsImV4cCI6MTcwNzE5NzEzM30.GjwTqZPxyXXAqavOY0V0_RM2UD4UJihvRsr9aDrPjbk";
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
