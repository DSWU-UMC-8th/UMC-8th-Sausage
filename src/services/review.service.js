import reviewRepository from "../repositories/review.repository.js";
import storeRepository from "../repositories/store.repository.js";
import * as userRepository from "../repositories/user.repository.js";
import ReviewDto from "../dtos/review.dto.js";

class ReviewService {
  async createReview(reviewData, storeId) {
    // 가게 존재 여부 확인
    const store = await storeRepository.findById(storeId);
    if (!store) {
      throw new Error(`Store with id ${storeId} not found`);
    }

    // 첫 번째 사용자 가져오기 (과제 요구사항)
    const user = await userRepository.findFirstUser();
    if (!user) {
      throw new Error("No users found in the system");
    }

    // 리뷰 별점 검증
    if (reviewData.rating < 1 || reviewData.rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }

    // 리뷰 생성
    const createdReview = await reviewRepository.create(
      reviewData,
      storeId,
      user.id
    );
    return new ReviewDto(createdReview);
  }
}

export default new ReviewService();
