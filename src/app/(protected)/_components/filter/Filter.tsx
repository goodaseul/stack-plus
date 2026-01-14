import Button from "@/components/button/Button";
import { FilterKey } from "@/constants/filter";

export type FilterProps = {
  filterMenus: Record<FilterKey, string>;
  activeFilter: FilterKey | null;
  onClick: (key: FilterKey) => void;
};

export function Filter({ filterMenus, activeFilter, onClick }: FilterProps) {
  return (
    <div className="my-5 flex justify-center gap-2">
      {(Object.keys(filterMenus) as FilterKey[]).map((key) => (
        <Button
          key={key}
          onClick={() => onClick(key)}
          variant={activeFilter === key ? "default" : "outline"}
        >
          {filterMenus[key]}
        </Button>
      ))}
    </div>
  );
}
