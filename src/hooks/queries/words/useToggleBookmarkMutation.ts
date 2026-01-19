import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { toggleBookmark } from "@/api/words";

type Variables = {
  wordId: number;
  bookmarked: boolean;
};

export function useToggleBookmarkMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ wordId, bookmarked }: Variables) =>
      toggleBookmark(wordId, bookmarked),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: wordsQueryKeys.all,
      });
    },
  });
}
