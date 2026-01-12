type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Title({ children, className = "" }: TitleProps) {
  return (
    <h2 className={`text-xl font-bold text-black ${className}`}>{children}</h2>
  );
}
