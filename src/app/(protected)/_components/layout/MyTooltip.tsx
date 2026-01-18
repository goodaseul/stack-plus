type MyTooltipProps = {
  nickname: string | null;
  total: number;
  memo: number;
  bookmark: number;
};

export default function MyTooltip({
  nickname,
  total,
  memo,
  bookmark,
}: MyTooltipProps) {
  return (
    <div
      className="absolute z-10 -left-35 top-10 w-max rounded-xl
                 bg-white px-5 py-3 border border-gray-200 shadow-sm"
    >
      <p className="font-bold">
        닉네임: <span className="bg-point px-1">{nickname}</span>
      </p>
      <p className="font-bold mt-2">
        현재 저장 단어: <span className="bg-point px-1">{total}</span>
      </p>
      <p className="font-bold mt-2">
        메모가 있는 단어: <span className="bg-point px-1">{memo}</span>
      </p>
      <p className="font-bold mt-2">
        북마크가 있는 단어: <span className="bg-point px-1">{bookmark}</span>
      </p>
    </div>
  );
}
