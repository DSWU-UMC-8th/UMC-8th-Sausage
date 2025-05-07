import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes.js";
import ChallengeController from "./controllers/challenge.controller.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Mission Store API Server");
});

// API 라우트 설정
app.use("/api", routes);

// 초기 데이터베이스 설정
async function initDatabase() {
  try {
    // 필요한 초기화 코드를 이곳에 추가
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
}

// 서버 시작
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await initDatabase();
});
