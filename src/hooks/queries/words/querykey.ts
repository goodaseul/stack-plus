export const wordsQueryKeys = {
  all: ["words"] as const,
  list: (filter: string) => ["words", filter] as const,
};

export default wordsQueryKeys;
