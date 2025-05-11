import express from "express";
import { fetchUserReviews } from "../controllers/review.controller.js";

const router = express.Router();

router.get("/user/:userId", fetchUserReviews);

export default router;
