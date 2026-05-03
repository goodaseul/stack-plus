import { deleteWords } from "@/api/words";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";

export function useDeleteWordMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (wordId: number) => deleteWords(wordId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wordsQueryKeys.all });
    },
  });
}
