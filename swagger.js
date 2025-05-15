// swagger.js
import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/app.js"];

const doc = {
  swagger: "2.0",
  info: {
    title: "UMC 8th",
    description: "UMC 테스트 프로젝트입니다.",
    version: "1.0.0",
  },
  host: "localhost:3000",
  schemes: ["http"],
  paths: {
    "/api/user/{userId}": {
      get: {
        summary: "유저 정보 가져오기",
        parameters: [
          {
            name: "userId",
            in: "path",
            required: true,
            type: "string",
            description: "유저 ID",
          },
        ],
        responses: {
          200: {
            description: "유저 정보 조회 성공",
          },
        },
      },
    },
    "/api/complete/{missionId}": {
      put: {
        summary: "미션 완료 처리",
        parameters: [
          {
            name: "missionId",
            in: "path",
            required: true,
            type: "string",
            description: "미션 ID",
          },
        ],
        responses: {
          200: {
            description: "미션 완료 성공",
          },
        },
      },
    },
  },
};

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  console.log("✅ Swagger JSON 파일이 생성되었습니다.");
});
