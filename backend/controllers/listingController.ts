import { client } from "../index";
import { Request, Response } from "express";

export const getListings = async (req: Request, res: Response) => {
  try {
    res.json(200);
    // const result = await client.query()
  } catch (err) {}
};

export const publishListing = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.json(200);
  } catch (err) {
    console.log(err);
  }
};
