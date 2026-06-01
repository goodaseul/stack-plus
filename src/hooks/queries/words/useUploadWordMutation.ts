import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { uploadWords } from "@/api/words";
import publicWordsQueryKeys from "../explore/querykey";
export function useUploadWordMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadWords,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wordsQueryKeys.all });
      queryClient.invalidateQueries({ queryKey: publicWordsQueryKeys.all });
    },
  });
}
