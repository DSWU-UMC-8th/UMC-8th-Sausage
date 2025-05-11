import prisma from "../prisma.js";

export const findMissionsByUser = async (userId) => {
  return await prisma.mission.findMany({ where: { userId } });
};

export const updateMissionStatus = async (missionId, status) => {
  return await prisma.mission.update({
    where: { id: missionId },
    data: { status },
  });
};
