const categories = ["한식", "중식", "일식", "아시안", "양식", "기타"] as const;

const categoryToIconNameMapper = {
  한식: "category-korean.png",
  중식: "category-chinese.png",
  일식: "category-japanese.png",
  아시안: "category-asian.png",
  양식: "category-western.png",
  기타: "category-etc.png",
};

const sortingStandards = ["name", "distance"] as const;

const sortingStandardsMapper = {
  name: "이름순",
  distance: "거리순",
} as const;

const distances = [5, 10, 15, 20, 30] as const;

const distancesMapper = {
  5: "5분 내",
  10: "10분 내",
  15: "15분 내",
  20: "20분 내",
  30: "30분 내",
} as const;

export {
  categories,
  categoryToIconNameMapper,
  sortingStandards,
  sortingStandardsMapper,
  distances,
  distancesMapper,
};
