type BannerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Banner({ children, className = "" }: BannerProps) {
  return (
    <div
      className={`group h-48 rounded-xl p-6 
            transition-all duration-200 ease-out
            hover:-translate-y-0.5 hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-green/40
            flex flex-col justify-between group
            ${className}`}
    >
      {children}
    </div>
  );
}
