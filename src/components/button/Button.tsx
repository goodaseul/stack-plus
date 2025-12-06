type ButtonVariant = "default" | "outline" | "text";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = `inline-flex items-center justify-center cursor-pointer font-bold transition-all focus:outline-none rounded-md text-sm`;

const variants: Record<ButtonVariant, string> = {
  default: `px-6 py-2.5 border bg-white text-blue border-blue hover:border-white hover:bg-blue hover:text-white`,
  outline: `px-6 py-2.5 border bg-blue text-white border-blue hover:border-blue hover:bg-white hover:text-blue`,
  text: `px-3 py-1.5 hover:font-bold`,
};

export default function Button({
  type = "button",
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
