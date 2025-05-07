// 사용자 등록용 요청 DTO
export const createUserDto = (body) => {
  const { email, name } = body;

  if (!email || !name) {
    throw new Error("email과 name은 필수입니다.");
  }

  return {
    email,
    name,
  };
};

// 사용자 응답용 DTO
export const userResponseDto = (user) => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
};

// 사용자 선호 카테고리 응답용 DTO
export const userPreferencesDto = (preferences) => {
  return preferences.map((pref) => ({
    id: pref.id,
    userId: pref.userId,
    foodCategoryId: pref.foodCategoryId,
    categoryName: pref.foodCategory?.name || "Unknown",
  }));
};

export const responseFromUser = ({ user, preferences }) => {
  const preferFoods = preferences.map(
    (preference) => preference.foodCategory.name
  );

  return {
    email: user.email,
    name: user.name,
    preferCategory: preferFoods,
  };
};
