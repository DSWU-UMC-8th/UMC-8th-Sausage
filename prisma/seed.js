import prisma from "../src/prisma.js";

async function main() {
  // 유저 생성
  await prisma.user.createMany({
    data: [{ nickname: "닉네임1234" }, { nickname: "테스터" }],
  });

  // 가게 생성
  await prisma.store.createMany({
    data: [
      { name: "반이학생마라탕", location: "서울 강남구" },
      { name: "기계이름에서", location: "서울 마포구" },
    ],
  });

  // 리뷰 생성
  await prisma.review.createMany({
    data: [
      { content: "너무 맛있어요", rating: 4.5, userId: 1, storeId: 1 },
      { content: "괜찮았어요", rating: 3.0, userId: 2, storeId: 2 },
    ],
  });

  // 미션 생성
  await prisma.mission.createMany({
    data: [
      {
        title: "식사 인증",
        description: "12,000원 이상 식사를 하세요!",
        reward: 500,
        status: "진행 중",
        userId: 1,
        storeId: 1,
      },
      {
        title: "음식 리뷰 작성",
        description: "리뷰를 남겨주세요!",
        reward: 300,
        status: "진행 중",
        userId: 2,
        storeId: 2,
      },
    ],
  });

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
