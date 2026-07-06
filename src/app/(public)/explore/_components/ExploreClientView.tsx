"use client";
import { useEffect, useRef } from "react";
import { PublicWordList } from "./PublicWordList";
import { usePublicInfiniteQuery } from "@/hooks/queries/explore/usePublicInfiniteQuery";

export default function ExploreClientView() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePublicInfiniteQuery();
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = observerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.5,
      },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const words = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <section className="pt-24">
      <div
        className="
        w-full lg:py-10 mx-auto max-w-6xl p-6"
      >
        <h2 className="text-center mb-10 font-bold text-xl md:text-2xl text-slate-800 dark:text-white tracking-tight break-keep">
          다른 사람들은 어떤 표현을 쌓았을까요? 🤔
        </h2>

        {words.length === 0 && !isFetchingNextPage ? (
          <div className="text-center py-12 text-slate-400">
            아직 공개된 단어가 없습니다.
          </div>
        ) : (
          <>
            <PublicWordList words={words} />
            <div ref={observerRef} className="py-8 flex justify-center">
              {isFetchingNextPage && (
                <span className="text-sm text-point">불러오는 중...</span>
              )}
              {!hasNextPage && words.length > 0 && (
                <span className="text-sm text-point">모두 불러왔습니다.</span>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
