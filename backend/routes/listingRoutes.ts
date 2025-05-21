import express, { Request, Response } from "express";
import * as listingController from "../controllers/listingController";

const router = express.Router();

router.get("/api/listings", (req: Request, res: Response) =>
  listingController.getListings(req, res)
);
router.post("/api/listings", (req: Request, res: Response) =>
  listingController.publishListing(req, res)
);

export default router;
