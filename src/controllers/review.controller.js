import { getUserReviews } from "../services/review.service.js";

export const fetchUserReviews = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const reviews = await getUserReviews(parseInt(userId));
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};
