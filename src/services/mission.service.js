import prisma from "../prisma.js";

export const getUserMissions = async (userId) => {
  return await prisma.mission.findMany({
    where: { userId, status: "진행 중" },
  });
};

export const completeMission = async (missionId) => {
  return await prisma.mission.update({
    where: { id: missionId },
    data: { status: "완료" },
  });
};

export const getStoreMissions = async (storeId) => {
  return await prisma.mission.findMany({ where: { storeId } });
};
