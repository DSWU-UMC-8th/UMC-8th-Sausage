import express from "express";
import {
  fetchUserMissions,
  markMissionComplete,
  fetchStoreMissions,
} from "../controllers/mission.controller.js";

const router = express.Router();

router.get("/user/:userId", fetchUserMissions);
router.put("/complete/:missionId", markMissionComplete);
router.get("/store/:storeId", fetchStoreMissions);

export default router;
