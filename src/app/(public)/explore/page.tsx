import { getPublicWords } from "@/api/public";

export default async function ExplorePage() {
  const words = await getPublicWords();
  console.log(words);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          📢 공개 단어장
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          로그인 없이도 모두가 볼 수 있는 단어 목록입니다.
        </p>
      </header>

      {/* 2. 데이터가 없을 때의 예외 처리 */}
      {words.length === 0 ? (
        <div className="text-center py-12 text-slate-400">
          아직 공개된 단어가 없거나 데이터를 불러오지 못했습니다.
        </div>
      ) : (
        /* 3. 데이터가 있을 때 map으로 리스트 뿌려주기 */
        <div className="grid gap-4 sm:grid-cols-2">
          {words.map((word) => {
            const nickname = word?.profiles?.nickname ?? "익명";

            return (
              <div
                key={word.id}
                className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                    {word.expression}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">
                    {word.meaning}
                  </p>
                </div>

                {word.sentence && (
                  <div className="mt-2 pt-2 border-t border-slate-50 dark:border-slate-700 text-xs text-slate-400 italic">
                    {word.sentence}
                  </div>
                )}

                <div className="mt-4 text-right">
                  <span className="text-xs text-slate-400 bg-slate-50 dark:bg-slate-700 px-2.5 py-1 rounded-full font-medium">
                    ✍️ 작성자: {nickname}님
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
