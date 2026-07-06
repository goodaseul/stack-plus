"use client";
import { useUserStore } from "@/store/useUserStore";
import { Title } from "../dashboard/_components/common/Title";
import { useWordStats } from "@/hooks/queries/words";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { updateMyProfile } from "@/api/profile";

export default function Mypage() {
  const { nickname } = useUserStore();
  const { total, memo, bookmark, publicWords } = useWordStats();

  const [isEditing, setIsEditing] = useState(false);
  const [editNickname, setEditNickname] = useState(nickname || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (nickname) setEditNickname(nickname);
  }, [nickname]);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const initial = nickname?.slice(0, 2) ?? "?";

  const stats = [
    { label: "등록한 표현", value: total },
    { label: "북마크한 표현", value: bookmark },
    { label: "메모한 표현", value: memo },
    { label: "공유한 표현", value: publicWords },
  ];

  const handleSaveClick = async () => {
    if (!editNickname.trim()) {
      toast.error("닉네임을 입력해주세요");
      return;
    }
    if (editNickname === nickname) {
      toast.error("변경된 닉네임이 없습니다.");
      setIsEditing(false);
      return;
    }
    setIsLoading(true);

    try {
      await updateMyProfile(editNickname);

      toast.success("닉네임이 성공적으로 변경되었습니다.");
      setIsEditing(false);
    } catch (error) {
      console.error("닉네임 수정 실패:", error);
      toast.error("닉네임 업데이트에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full lg:py-10 mx-auto max-w-6xl p-6">
      <div className="flex items-end justify-between mb-8">
        <Title>마이 페이지</Title>
        <span className="text-xs text-foreground/40 bg-foreground/5 px-3 py-1.5 rounded-full border border-foreground/10">
          {year}-{month}-{day}
        </span>
      </div>

      <div className="flex items-center gap-4 p-5 rounded-xl border border-foreground/10 bg-background mb-4">
        <div className="w-12 h-12 rounded-full bg-point/10 flex items-center justify-center shrink-0 text-point font-medium text-lg">
          {initial}
        </div>
        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={editNickname}
              onChange={(e) => setEditNickname(e.target.value)}
              disabled={isLoading}
              maxLength={10}
              className="w-full max-w-[200px] text-base font-medium text-foreground px-2 py-1 bg-foreground/5 border border-foreground/20 rounded-md focus:outline-none focus:border-point"
            />
          ) : (
            <>
              <p className="text-base font-medium text-foreground">
                {nickname} 님
              </p>
              <p className="text-sm text-foreground/40 mt-0.5">
                안녕하세요, 오늘도 열심히!
              </p>
            </>
          )}
        </div>
        {isEditing ? (
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => {
                setIsEditing(false);
                setEditNickname(nickname || "");
              }}
              disabled={isLoading}
              className="text-xs text-foreground/40 border border-foreground/10 px-3 py-1.5 rounded-full hover:bg-foreground/5 transition-colors"
            >
              취소
            </button>
            <button
              onClick={handleSaveClick}
              disabled={isLoading}
              className="text-xs text-white bg-point px-3 py-1.5 rounded-full hover:bg-point/80 transition-colors disabled:bg-point/50"
            >
              {isLoading ? "저장 중..." : "저장"}
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="ml-auto text-xs text-foreground/40 border border-foreground/10 px-3 py-1.5 rounded-full hover:text-point hover:border-point transition-colors"
          >
            수정하기
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="bg-background rounded-lg p-4 flex flex-col gap-2 border border-foreground/10"
          >
            <h2 className="text-xs text-foreground flex items-center gap-1.5">
              {label}
            </h2>
            <p className="text-2xl font-medium text-foreground leading-none">
              {value}
              <span className="text-sm font-normal text-foreground/40 ml-1">
                개
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
