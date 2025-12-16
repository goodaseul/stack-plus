type EmptyStateProps = {
  className?: string;
  children: React.ReactNode;
};

export default function EmptyState({
  children,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex w-full items-center justify-center px-4 py-12 ${className}`}
    >
      <p className="max-w-sm text-center text-sm text-gray-500 leading-relaxed">
        {children}
      </p>
    </div>
  );
}
