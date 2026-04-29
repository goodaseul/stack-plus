import Button from "@/components/button/Button";
import { useMobileSize } from "@/hooks/useMobileSize";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  console.log(totalItems, itemsPerPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isMobile = useMobileSize();
  const pageBlockSize = isMobile ? 5 : 10;

  if (totalPages <= 1) return null;

  const currentBlock = Math.floor((currentPage - 1) / pageBlockSize);
  const startPage = currentBlock * pageBlockSize + 1;
  const endPage = Math.min(startPage + pageBlockSize - 1, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) pages.push(i);

  return (
    <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
      {/* 첫 페이지 */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="disabled:opacity-50 disabled:cursor-not-allowed px-2 bg-transparent"
      >
        &lt;&lt;
      </button>

      {/* 이전 페이지 */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="disabled:opacity-50 disabled:cursor-not-allowed px-2 bg-transparent"
      >
        &lt;
      </button>

      {/* 페이지 번호 */}
      {pages.map((page) => (
        <Button
          key={page}
          variant="text_underline"
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "after:w-full" : ""}
        >
          {page}
        </Button>
      ))}

      {/* 다음 페이지 */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50 disabled:cursor-not-allowed px-2 bg-transparent"
      >
        &gt;
      </button>

      {/* 마지막 페이지 */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50 disabled:cursor-not-allowed px-2 bg-transparent"
      >
        &gt;&gt;
      </button>
    </div>
  );
}
