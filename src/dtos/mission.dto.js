export class MissionDTO {
  constructor(id, userId, title, reward, status, description, createdAt) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.reward = reward;
    this.status = status;
    this.description = description;
    this.createdAt = createdAt;
  }
}
