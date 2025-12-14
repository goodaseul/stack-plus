import Button from "@/components/button/Button";

export function Filter({ filterMenus }: { filterMenus: string[] }) {
  return (
    <div className="my-5 flex justify-center gap-2">
      {filterMenus.map((filterMenu) => {
        return (
          <Button
            variant="outline"
            className=" text-xs sm:text-sm md:text-md w-25% lg:w-48"
            key={filterMenu}
          >
            {filterMenu}
          </Button>
        );
      })}
    </div>
  );
}
