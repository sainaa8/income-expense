import { client } from "/Users/23LP8204/Desktop/firstfullProject/Backend/index.js";

export const userUpdate = async (req, res) => {
  const { cash } = req.body;
  const getUserQuery = `SELECT * FROM users`;
  const data = await client.query(getUserQuery);
  const lastUser = data.rows[data.rows.length - 1];
  console.log(data.rows[data.rows.length - 1]);
  const updateUserQuery = `UPDATE users SET cash = $1 WHERE id = ${lastUser.id} RETURNING *`;

  try {
    if (!cash) {
      return res.status(400).send("Please provide cash");
    }
    const userUpd = await client.query(updateUserQuery, [cash]);
    // res.status(200).send("User updated successfully");
    return userUpd.rows[0];
  } catch (error) {
    console.log(error);
  }
};
