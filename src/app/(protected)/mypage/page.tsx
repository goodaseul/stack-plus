"use client";

import { useSearchParams } from "next/navigation";
import { Filter } from "../_components/filter/Filter";
import { Title } from "../dashboard/_components/common/Title";
import MemoList from "./memo/MemoList";
import BookmarkList from "./bookmark/BookmarkList";

// /mypage
// /mypage?tab=memo
// /mypage?tab=memo&wordId=123
// /mypage?tab=bookmark
export default function Mypage() {
  const filterMenus = ["메모", "북마크"];
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") ?? "memo";
  return (
    <div className="w-full p-5 md:p-15">
      <Title>마이 페이지</Title>

      <p>내가 작성한 메모와 북마크를 관리해요</p>
      <Filter filterMenus={filterMenus} />

      {/* 컨텐츠 */}
      {tab === "memo" && <MemoList />}
      {tab === "bookmark" && <BookmarkList />}
    </div>
  );
}
