"use client";

import { useSearchParams } from "next/navigation";
import { Filter } from "../_components/filter/Filter";
import { Title } from "../dashboard/_components/common/Title";
import { MemoList } from "./memo/MemoList";
import { BookmarkList } from "./bookmark/BookmarkList";

// /mypage
// /mypage?tab=memo
// /mypage?tab=memo&wordId=123
// /mypage?tab=bookmark
export default function Mypage() {
  const filterMenus = ["메모", "북마크"];
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") ?? "memo";
  return (
    <div
      className="
        w-full lg:py-10 mx-auto max-w-6xl p-6"
    >
      {/* 헤더 영역 */}
      <section className="mb-6">
        <Title>마이 페이지</Title>
        <p className="mt-2 text-sm text-gray-600">
          내가 작성한 메모와 북마크를 관리해요
        </p>
      </section>

      {/* 필터 영역 */}
      <section className="mb-6">
        <Filter filterMenus={filterMenus} />
      </section>

      {/* 콘텐츠 영역 */}
      <section>
        {tab === "memo" && <MemoList />}
        {tab === "bookmark" && <BookmarkList />}
      </section>
    </div>
  );
}
