import express from "express";
import missionRoutes from "./routes/mission.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api", missionRoutes);
app.use("/api", reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
