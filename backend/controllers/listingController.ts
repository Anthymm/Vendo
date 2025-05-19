import { client } from "../index";
import { Request, Response } from 'express'

export const getListings = async (req: Request, res: Response) => {
	try {
		const result = await client.query()
	}
}
