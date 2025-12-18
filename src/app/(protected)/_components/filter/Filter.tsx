import Button from "@/components/button/Button";
import { FILTER_MAP, FilterValue } from "@/constants/filters";

export type FilterProps = {
  filterMenus: string[];
  onClick: (value: FilterValue) => void;
  activeFilter: FilterValue;
};

export function Filter({ filterMenus, onClick, activeFilter }: FilterProps) {
  return (
    <div className="my-5 flex justify-center gap-2">
      {filterMenus.map((filterMenu) => {
        const value = FILTER_MAP[filterMenu as keyof typeof FILTER_MAP];
        const isActive = value === activeFilter;
        return (
          <Button
            variant={isActive ? "default" : "outline"}
            className=" text-xs sm:text-sm md:text-md w-25% lg:w-48"
            key={filterMenu}
            onClick={() => onClick(value)}
          >
            {filterMenu}
          </Button>
        );
      })}
    </div>
  );
}
