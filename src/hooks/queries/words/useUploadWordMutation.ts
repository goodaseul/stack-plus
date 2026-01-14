import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { uploadWords } from "@/api/words";
export function useUploadWordMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadWords,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wordsQueryKeys.all });
    },
  });
}
