import prisma from "../prisma.js";

export const getUserReviews = async (userId) => {
  return await prisma.review.findMany({ where: { userId } });
};
