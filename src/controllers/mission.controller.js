import {
  getUserMissions,
  completeMission,
  getStoreMissions,
} from "../services/mission.service.js";

export const fetchUserMissions = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const missions = await getUserMissions(parseInt(userId));
    res.json(missions);
  } catch (error) {
    next(error);
  }
};

export const markMissionComplete = async (req, res, next) => {
  try {
    const { missionId } = req.params;
    const updatedMission = await completeMission(parseInt(missionId));
    res.json(updatedMission);
  } catch (error) {
    next(error);
  }
};

export const fetchStoreMissions = async (req, res, next) => {
  try {
    const { storeId } = req.params;
    const missions = await getStoreMissions(parseInt(storeId));
    res.json(missions);
  } catch (error) {
    next(error);
  }
};
