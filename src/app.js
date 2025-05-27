import express from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUiExpress from "swagger-ui-express";
import { createRequire } from "module";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { prisma } from "./db.config.js";
console.log("✅ prisma loaded:", prisma); 
import { googleStrategy } from "./auth.config.js";

import missionRoutes from "./routes/mission.routes.js";
import reviewRoutes from "./routes/review.routes.js";

dotenv.config();
const app = express();
const require = createRequire(import.meta.url);
const swaggerDocument = require("../swagger-output.json");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 세션 설정정
app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
    }),
  })
);

// passport 초기화 및 세션 연동
app.use(passport.initialize());
app.use(passport.session());
passport.use(googleStrategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);

app.use("/api", missionRoutes);
app.use("/api", reviewRoutes);

app.get("/oauth2/login/google", passport.authenticate("google"));

app.get(
  "/oauth2/callback/google",
  passport.authenticate("google", {
    failureRedirect: "/oauth2/login/google",
    failureMessage: true,
  }),
  (req, res) => res.redirect("/")
);

app.get("/", (req, res) => {
  res.send("✅ Hello ~~~");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
