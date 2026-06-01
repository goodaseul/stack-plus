"use client";
import { PublicWordList } from "./_components/PublicWordList";
import { usePublicWordsQuery } from "@/hooks/queries/explore/usePubliceWordsQuery";

export default function ExplorePage() {
  const { data: words = [] } = usePublicWordsQuery();
  return (
    <section className="pt-24">
      <div
        className="
        w-full lg:py-10 mx-auto max-w-6xl p-6"
      >
        <h2 className="text-center mb-10 font-bold text-xl md:text-2xl text-slate-800 dark:text-white tracking-tight break-keep">
          다른 사람들은 어떤 표현을 쌓았을까요? 🤔
        </h2>

        {words.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            아직 공개된 단어가 없습니다.
          </div>
        ) : (
          <>
            <PublicWordList words={words} />
          </>
        )}
      </div>
    </section>
  );
}
