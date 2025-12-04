type EmptyStateProps = {
  className: string;
  children?: React.ReactNode;
};

export default function EmptyState({ children, className }: EmptyStateProps) {
  return (
    <p className={`${className} text-base text-center text-gray-500`}>
      {children}
    </p>
  );
}
