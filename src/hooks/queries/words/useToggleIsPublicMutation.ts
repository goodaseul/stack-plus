import { useMutation, useQueryClient } from "@tanstack/react-query";
import wordsQueryKeys from "./querykey";
import { toggleIsPublic } from "@/api/words";

type Variables = {
  wordId: number;
  is_public: boolean;
};

export default function useToggleIsPublicMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ wordId, is_public }: Variables) =>
      toggleIsPublic(wordId, is_public),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: wordsQueryKeys.all,
      });
    },
  });
}
