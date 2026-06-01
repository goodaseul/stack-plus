import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { modifyWords } from "@/api/words";
import publicWordsQueryKeys from "../explore/querykey";
export function useModifyWordMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: modifyWords,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wordsQueryKeys.all });
      queryClient.invalidateQueries({ queryKey: publicWordsQueryKeys.all });
    },
  });
}
