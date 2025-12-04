type ButtonVariant = "default" | "outline" | "text";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = `
  inline-flex items-center justify-center
  cursor-pointer font-medium transition-all
  focus:outline-none
  rounded-md text-sm
`;

const variants: Record<ButtonVariant, string> = {
  default: `
    px-6 py-2.5
    bg-gray-900 text-white
    hover:bg-gray-800
  `,
  outline: `
    px-6 py-2.5
    border border-gray-900 text-gray-900 bg-white
    hover:bg-gray-100
  `,
  text: `
    px-3 py-1.5 hover:font-bold
  `,
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
