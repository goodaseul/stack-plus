import { FILTER_LABELS, FilterKey, FILTERS } from "@/constants/filter";
import { Filter } from "../../_components/filter/Filter";
import { FilterCount } from "./FilterCount";
import SearchInput from "./SearchInput";
import { ReadonlyURLSearchParams, useRouter } from "next/navigation";

export default function RecordTopContent({
  searchParams,
  pathname,
  keyword,
  activeFilterKey,
  totalCount,
}: {
  searchParams: ReadonlyURLSearchParams;
  pathname: string;
  keyword: string;
  activeFilterKey: FilterKey;
  totalCount: number;
}) {
  const router = useRouter();

  const handleFilterClick = (filterKey: FilterKey) => {
    const value = FILTERS[filterKey];
    const params = new URLSearchParams(searchParams);

    if (value === null) params.delete("filter");
    else params.set("filter", value);

    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mt-6 space-y-3">
      <SearchInput keyword={keyword} />
      <FilterCount filterKey={activeFilterKey} total={totalCount} />

      <Filter
        filterMenus={FILTER_LABELS}
        activeFilter={activeFilterKey}
        onClick={handleFilterClick}
      />
    </div>
  );
}
