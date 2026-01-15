import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { toggleBookmark } from "@/api/words";
import { FilterValue } from "@/constants/filter";
import { WordsApi } from "@/api/types/words";

export function useToggleBookmarkMutation(filter?: FilterValue) {
  const queryClient = useQueryClient();
  const queryKey = wordsQueryKeys.list(filter ?? "ALL");

  return useMutation({
    mutationFn: ({
      wordId,
      bookmarked,
    }: {
      wordId: number;
      bookmarked: boolean;
    }) => toggleBookmark(wordId, bookmarked),

    onMutate: async ({ wordId }) => {
      await queryClient.cancelQueries({ queryKey });

      const previous = queryClient.getQueryData<WordsApi[]>(queryKey);

      queryClient.setQueryData<WordsApi[]>(queryKey, (old) =>
        old?.map((word) =>
          word.id === wordId ? { ...word, bookmarked: !word.bookmarked } : word
        )
      );

      return { previous };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wordsQueryKeys.all });
    },

    onError: (_err, _vars, ctx) => {
      if (ctx?.previous) {
        queryClient.setQueryData(queryKey, ctx.previous);
      }
    },
  });
}
