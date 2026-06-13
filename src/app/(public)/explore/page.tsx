import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import publicWordsQueryKeys from "@/hooks/queries/explore/querykey";
import { getPublicWords } from "@/api/public";
import ExploreClientView from "./_components/ExploreClientView";

export default async function ExplorePage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  await queryClient.prefetchInfiniteQuery({
    queryKey: publicWordsQueryKeys.all,
    queryFn: getPublicWords,
    initialPageParam: 0,
    pages: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ExploreClientView />
    </HydrationBoundary>
  );
}
