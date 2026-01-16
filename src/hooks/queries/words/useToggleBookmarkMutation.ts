import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { toggleBookmark } from "@/api/words";
import { FilterValue } from "@/constants/filter";
import { WordsResponse } from "@/api/types/words";

export function useToggleBookmarkMutation(filter?: FilterValue) {
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
      // 모든 words 쿼리 취소
      await queryClient.cancelQueries({ queryKey: wordsQueryKeys.all });

      // 모든 쿼리의 이전 상태 저장
      const previousQueries = queryClient.getQueriesData<WordsResponse>({
        queryKey: wordsQueryKeys.all,
      });

      // 모든 words 쿼리에 낙관적 업데이트 적용
      queryClient.setQueriesData<WordsResponse>(
        { queryKey: wordsQueryKeys.all },
        (old) => {
          if (!old) return old;

          return {
            ...old,
            words: old.words.map((word) =>
              word.id === wordId
                ? { ...word, bookmarked: !word.bookmarked }
                : word
            ),
          };
        }
      );

      return { previousQueries };
    },

    onSuccess: () => {
      // 낙관적 업데이트로 충분
    },

    onError: (_err, _vars, ctx) => {
      // 에러 시 롤백
      if (ctx?.previousQueries) {
        ctx.previousQueries.forEach(([queryKey, data]) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
  });
}
