import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { toggleIsPublic } from "@/api/words";
import { Word } from "@/types/word";

interface ToggleVariables {
  wordId: number;
  is_public: boolean;
}

interface WordsListResponse {
  words: Word[];
  totalCount: number;
}

export default function useToggleIsPublicMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ wordId, is_public }: ToggleVariables) =>
      toggleIsPublic(wordId, is_public),
    onMutate: async ({ wordId, is_public }) => {
      await queryClient.cancelQueries({ queryKey: wordsQueryKeys.lists() });
      const previousQueries = queryClient.getQueriesData<WordsListResponse>({
        queryKey: wordsQueryKeys.lists(),
      });

      queryClient.setQueriesData<WordsListResponse>(
        { queryKey: wordsQueryKeys.lists() },
        (old) => {
          if (!old) return old;
          return {
            ...old,
            words: old.words.map((word) =>
              wordId === word.id ? { ...word, is_public } : word,
            ),
          };
        },
      );
      return { previousQueries };
    },
    onError: (err, _, context) => {
      if (context?.previousQueries) {
        context.previousQueries.forEach(([queryKey, previousData]) => {
          queryClient.setQueryData(queryKey, previousData);
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: wordsQueryKeys.lists() });
    },
  });
}
