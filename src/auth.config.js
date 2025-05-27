import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { prisma } from "./db.config.js";

dotenv.config();

export const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID,
    clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/oauth2/callback/google",
    scope: ["email", "profile"],
    state: true,
  },
  (accessToken, refreshToken, profile, cb) => {
    return googleVerify(profile)
      .then((user) => cb(null, user))
      .catch((err) => cb(err));
  }
);

const googleVerify = async (profile) => {
  const nickname = profile.displayName;
  if (!nickname) {
    throw new Error(`profile.displayName was not found: ${profile}`);
  }

  let user = await prisma.user.findUnique({
    where: { nickname },
  });

  if (user !== null) {
    return { id: user.id, nickname: user.nickname };
  }

  // 중복 방지를 위해 nickname이 중복될 경우 뒤에 숫자 추가함.
  let finalNickname = nickname;
  let suffix = 1;
  while (await prisma.user.findUnique({ where: { nickname: finalNickname } })) {
    finalNickname = `${nickname}_${suffix++}`;
  }

  const created = await prisma.user.create({
    data: {
      nickname: finalNickname,
    },
  });

  return { id: created.id, nickname: created.nickname };
};
