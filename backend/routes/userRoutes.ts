import express, { Request, Response } from "express";
import * as userController from "../controllers/userController";

const router = express.Router();

router.get("/api/user", (req: Request, res: Response) =>
  userController.getUser(req, res)
);
router.post("/api/user");
router.patch("/api/user");
router.delete("/api/user");

export default router;
