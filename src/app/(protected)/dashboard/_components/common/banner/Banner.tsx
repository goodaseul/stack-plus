type BannerProps = {
  children: React.ReactNode;
  className?: string;
};
export function Banner({ children, className = "" }: BannerProps) {
  return (
    <div
      className={`
        px-6 py-5
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-gray-900/10
        flex flex-col justify-between
        group h-full

        border border-gray-200 dark:border-point rounded-lg 
        ${className}
      `}
    >
      {children}
    </div>
  );
}
