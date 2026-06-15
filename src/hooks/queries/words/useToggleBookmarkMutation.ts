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
      console.log("API 호출:", wordId, bookmarked);

      return toggleBookmark(wordId, bookmarked);
    },
    onMutate: async ({ wordId, bookmarked }) => {
      await queryClient.cancelQueries({ queryKey: wordsQueryKeys.all });

      const previousQueries = queryClient.getQueriesData<WordsListResponse>({
        queryKey: wordsQueryKeys.all,
      });

      queryClient.setQueriesData<WordsListResponse>(
        { queryKey: wordsQueryKeys.all },
        (old) => {
          if (!old?.words) return old;
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

    onError: (err, variables, context) => {
      console.error("에러:", err);
      if (context?.previousQueries) {
        context.previousQueries.forEach(([queryKey, previousData]) => {
          queryClient.setQueryData(queryKey, previousData);
        });
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: wordsQueryKeys.all });
    },
  });
}
