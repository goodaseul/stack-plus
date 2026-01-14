type BannerProps = {
  children: React.ReactNode;
  className?: string;
};
export function Banner({ children, className = "" }: BannerProps) {
  return (
    <div
      className={`
        rounded-xl bg-white px-6 py-5
        border border-gray-200
        transition-colors
        hover:bg-gray-50
        focus:outline-none focus:ring-2 focus:ring-gray-900/10
        flex flex-col justify-between
        group
        ${className}
      `}
    >
      {children}
    </div>
  );
}
