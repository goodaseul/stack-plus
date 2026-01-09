type ListContentProps = {
  expression: string;
  meaning: string;
};

export default function ListContent({ expression, meaning }: ListContentProps) {
  return (
    <>
      <div className="gap-1 md:gap-6 w-full">
        <p className="text-md font-medium mb-5 text-gray-900 truncate">
          {expression}
        </p>

        <p className="text-sm text-gray-600 font-bold truncate  break-keep">
          : {meaning}
        </p>
      </div>
    </>
  );
}
