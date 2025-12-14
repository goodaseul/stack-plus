import { FaBookmark } from "react-icons/fa";

const bookmarks = [
  { id: 1, word: "tomorrow", meaning: "내일" },
  { id: 2, word: "yesterday", meaning: "어제" },
];

export default function BookmarkList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {bookmarks.map((item) => (
        <li
          key={item.id}
          className="
            group relative flex items-center justify-between
            rounded-xl border border-gray-200 bg-white
            px-4 py-3 transition-all
            hover:border-green hover:bg-[rgba(183,194,118,0.12)]
          "
        >
          {/* 텍스트 */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-strong">
              {item.word}
            </span>
            <span className="text-xs text-gray">{item.meaning}</span>
          </div>

          {/* 북마크 아이콘 */}
          <FaBookmark
            className="
              text-gray-300 transition-colors
              group-hover:text-green
            "
          />
        </li>
      ))}
    </ul>
  );
}
