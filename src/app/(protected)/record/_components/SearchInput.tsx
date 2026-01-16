import Input from "@/components/input/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const searchParamsString = searchParams.toString();
  const [searchValue, setSearchValue] = useState(keyword);
  const debouncedSearchValue = useDebouncedValue(searchValue, 300);

  useEffect(() => {
    setSearchValue(keyword);
  }, [keyword]);

  useEffect(() => {
    const params = new URLSearchParams(searchParamsString);
    params.delete("wordId");

    if (debouncedSearchValue.trim()) {
      params.set("keyword", debouncedSearchValue.trim());
    } else {
      params.delete("keyword");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearchValue, pathname, router, searchParamsString]);

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
      placeholder="단어를 검색할 수 있어요"
      className="mb-5"
    />
  );
}
