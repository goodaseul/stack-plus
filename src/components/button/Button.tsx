type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "flex  mx-auto mt-5 transition-all border-2 cursor-pointer  border-main";

const variants = {
  default: "px-8 py-3 rounded-2xl  hover:bg-main",
  small: "px-4 py-2 text-sm rounded-xl mr-0 hover:bg-white bg-main",
};

export default function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
