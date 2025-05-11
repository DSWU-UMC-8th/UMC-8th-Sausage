export class ReviewDTO {
  constructor(id, userId, content, rating, createdAt) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.rating = rating;
    this.createdAt = createdAt;
  }
}
