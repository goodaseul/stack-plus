export const wordsQueryKeys = {
  all: ["words"] as const,
  list: () => [...wordsQueryKeys.all] as const,
};

export default wordsQueryKeys;
