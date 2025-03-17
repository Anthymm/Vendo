import { client } from "../index";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  try {
    res.send({ callback: "Success" });
  } catch (err) {}
};

export const createUser = async (req: Request, res: Response) => {
  try {
  } catch (err) {}
};
