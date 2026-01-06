type ListContentProps = {
  expression: string;
  meaning: string;
};

export default function ListContent({ expression, meaning }: ListContentProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 w-full min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate md:w-1/2">
          {expression}
        </p>

        <p className="text-sm text-gray-600 truncate md:w-1/2 break-keep">
          {meaning}
        </p>
      </div>
    </>
  );
}
