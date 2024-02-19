import jwt from "jsonwebtoken";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUiLCJpYXQiOjE3MDgzMTE4NDksImV4cCI6MTcwODM5ODI0OX0.yWPahI4L8C8lRSB3NLlN8LV7i8U_UGrwvuh0e3DIBu0";
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
