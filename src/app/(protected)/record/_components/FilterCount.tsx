type FilterCountItem = {
  label: string;
  count: number;
};

export function FilterCount() {
  const items: FilterCountItem[] = [
    { label: "단어", count: 12 },
    { label: "메모", count: 5 },
    { label: "북마크", count: 3 },
  ];

  return (
    <div className="mb-4 flex justify-end">
      <ul className="flex items-center gap-3 text-sm text-gray-600">
        {items.map(({ label, count }, index) => (
          <li key={label} className="flex items-center gap-1">
            {index !== 0 && <span className="text-gray-400">·</span>}
            <span>{label}</span>
            <span className="font-medium text-gray-900">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
