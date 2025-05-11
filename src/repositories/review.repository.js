import prisma from "../prisma.js";

export const findReviewsByUser = async (userId) => {
  return await prisma.review.findMany({ where: { userId } });
};
