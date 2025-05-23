import { client } from "../index";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  const { userIdentifier, password } = req.query;
  let queryUser = userIdentifier;
  let queryType;
  if (typeof userIdentifier === "string" && userIdentifier.includes("@")) {
    queryType = "email";
  } else if (typeof userIdentifier === "string") {
    queryType = "username";
  }

  try {
    const result = await client.query(
      `SELECT * FROM users WHERE ${queryType} = $1 AND password = $2`,
      [queryUser, password]
    );
    if (queryType == "email") {
      if (
        result.rows[0].email == userIdentifier &&
        result.rows[0].password == password
      ) {
        res.json({
          status: "success",
          login: true,
          username: result.rows[0].username,
          userId: result.rows[0].userid,
        });
      } else {
        res.json({ status: "success", login: false });
      }
    } else if (queryType == "username") {
      if (
        result.rows[0].username == userIdentifier &&
        result.rows[0].password == password
      ) {
        res.json({
          status: "success",
          login: true,
          username: result.rows[0].username,
          userId: result.rows[0].userId,
        });
      } else {
        res.json({ status: "success", login: false });
      }
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    res.json({ status: "error", message: "Failed to fetch user" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  try {
    const result = await client.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3)",
      [username, password, email]
    );
    res.json({
      status: "success",
      login: true,
    });
  } catch (err) {
    console.error("Error adding user:", err);
    res.json({ status: "error", message: "Failed to add user" });
  }
};
