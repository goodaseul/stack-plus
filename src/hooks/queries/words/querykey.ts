export const wordsQueryKeys = {
  all: ["words"] as const,
  list: (params: {
    filter: string;
    keyword: string;
    wordId: string;
    page?: string;
  }) => [...wordsQueryKeys.all, params] as const,
};

export default wordsQueryKeys;
