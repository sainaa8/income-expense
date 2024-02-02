import bcrypt from "bcrypt";

export const Makehash = (pass) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pass, salt);
  return hash;
};
export const compareHash = (pass, hash) => {
  const isItTrue = bcrypt.compareSync(pass, hash);
  console.log(pass, hash);
  return isItTrue;
};
