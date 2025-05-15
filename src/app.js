import express from "express";
import missionRoutes from "./routes/mission.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import dotenv from "dotenv";
import swaggerUiExpress from "swagger-ui-express";
import { createRequire } from "module";

dotenv.config();
const app = express();
app.use(express.json());

// JSON 파일 불러오기
const require = createRequire(import.meta.url);
const swaggerDocument = require("../swagger-output.json");

// Swagger UI 설정
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

// 기존 API 경로 설정
app.use("/api", missionRoutes);
app.use("/api", reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
