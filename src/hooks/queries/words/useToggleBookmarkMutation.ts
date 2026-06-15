import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { toggleBookmark } from "@/api/words";
import { Word } from "@/types/word";

interface BookmarkVariables {
  wordId: number;
  bookmarked: boolean;
}

interface WordsListResponse {
  words: Word[];
  totalCount: number;
}

export function useToggleBookmarkMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ wordId, bookmarked }: BookmarkVariables) => {
      return toggleBookmark(wordId, bookmarked);
    },
    onMutate: async ({ wordId, bookmarked }) => {
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
              word.id === wordId ? { ...word, bookmarked } : word,
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
