import jwt from "jsonwebtoken";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImQiLCJpYXQiOjE3MDcyMTE2MDgsImV4cCI6MTcwNzI5ODAwOH0.B5nXgDeISH7hbHCv1_UQIANEB4g5cPZmi-IvE0RAcM4";
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
