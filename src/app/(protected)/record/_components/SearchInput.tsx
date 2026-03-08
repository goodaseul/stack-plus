import Input from "@/components/input/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function useDebouncedValue(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default function SearchInput({ keyword }: { keyword: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(keyword);
  const debouncedSearchValue = useDebouncedValue(searchValue, 300);

  const prevKeywordRef = useRef(searchParams.get("keyword") ?? "");

  useEffect(() => {
    setSearchValue(keyword);
  }, [keyword]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("wordId");

    const trimmed = debouncedSearchValue.trim();
    const currentKeyword = searchParams.get("keyword") ?? "";

    if (trimmed) {
      params.set("keyword", trimmed);

      // 🔥 검색어가 바뀌었으면 page 초기화
      if (prevKeywordRef.current !== trimmed) {
        params.set("page", "1");
      }
    } else {
      params.delete("keyword");
      params.set("page", "1");
    }

    prevKeywordRef.current = trimmed;

    const newQuery = params.toString();
    if (newQuery !== searchParams.toString()) {
      router.replace(`${pathname}?${newQuery}`);
    }
  }, [debouncedSearchValue, pathname, router, searchParams]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Input
      id="record-search"
      value={searchValue}
      type="text"
      name="search-input"
      onChange={onChange}
      placeholder="표현/뜻을 검색할 수 있어요"
      className="mb-5"
    />
  );
}
