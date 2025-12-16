import { FaBookmark } from "react-icons/fa";

const bookmarks = [
  { id: 1, word: "tomorrow", meaning: "내일" },
  { id: 2, word: "yesterday", meaning: "어제" },
];

export function BookmarkList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {bookmarks.map((item) => (
        <li
          key={item.id}
          className="
            group flex items-center justify-between
            rounded-xl border border-gray-200 bg-white
            px-4 py-3
            transition-colors
            hover:bg-gray-50
          "
        >
          {/* 텍스트 */}
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">
              {item.word}
            </p>
            <p className="mt-0.5 text-xs text-gray-600">{item.meaning}</p>
          </div>

          {/* 북마크 아이콘 */}
          <FaBookmark
            className="
              shrink-0 text-gray-400
              transition-colors
              group-hover:text-gray-700
            "
            aria-label="북마크됨"
          />
        </li>
      ))}
    </ul>
  );
}
