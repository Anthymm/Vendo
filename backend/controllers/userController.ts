import { client } from "../index";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  const { userIdentifier, password } = req.body;
  let queryUser = userIdentifier
  let queryType
  if(userIdentifier && userIdentifier.includes("@")) {
    queryType = "email"
  } else if(userIdentifier) {
    queryType = "username"
  }

  try {
    res.json(queryUser + password);
    const result = await client.query(
      `SELECT * FROM users WHERE ${queryType} = $1 AND password = $2`,
      [queryUser, password]
    );
    res.json({ callback: "success", user: result.rows[0] });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.json({ callback: "error", message: "Failed to fetch user" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  try {
    const result = await client.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3)",
      [username, password, email]
    );
    res.json({ callback: "Success" });
  } catch (err) {
    console.error("Error adding user:", err);
    res.json({ callback: "error", message: "Failed to add user" });
  }
};
