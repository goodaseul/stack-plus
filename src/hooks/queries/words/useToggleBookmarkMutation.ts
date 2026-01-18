import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { toggleBookmark } from "@/api/words";
import { WordsResponse } from "@/api/types/words";

export function useToggleBookmarkMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      wordId,
      bookmarked,
    }: {
      wordId: number;
      bookmarked: boolean;
    }) => toggleBookmark(wordId, bookmarked),

    onMutate: async ({ wordId }) => {
      await queryClient.cancelQueries({ queryKey: wordsQueryKeys.all });

      const previousQueries = queryClient.getQueriesData<WordsResponse>({
        queryKey: wordsQueryKeys.all,
      });

      queryClient.setQueriesData<WordsResponse>(
        { queryKey: wordsQueryKeys.all },
        (old) => {
          if (!old) return old;

          return {
            ...old,
            words: old.words.map((word) =>
              word.id === wordId
                ? { ...word, bookmarked: !word.bookmarked }
                : word,
            ),
          };
        },
      );

      return { previousQueries };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: wordsQueryKeys.all,
      });
    },

    onError: (_err, _vars, ctx) => {
      if (ctx?.previousQueries) {
        ctx.previousQueries.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
  });
}
