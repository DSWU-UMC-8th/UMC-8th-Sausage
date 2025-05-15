import { getUserReviews } from "../services/review.service.js";

export const fetchUserReviews = async (req, res, next) => {
  /*
  #swagger.summary = '유저 리뷰 조회'
  #swagger.parameters['userId'] = {
    in: 'path',
    description: '유저의 ID',
    required: true,
    type: 'integer'
  }
  #swagger.responses[200] = {
    description: '유저 리뷰 목록 조회 성공',
    content: {
      "application/json": {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number', example: 1 },
              content: { type: 'string', example: '리뷰 내용' },
              rating: { type: 'number', example: 4.5 }
            }
          }
        }
      }
    }
  }
  */
  try {
    const { userId } = req.params;
    const reviews = await getUserReviews(parseInt(userId));
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};
