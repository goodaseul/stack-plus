import Link from "next/link";

type ButtonVariant = "default" | "outline" | "text";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonProps =
  | (BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (BaseProps & {
      href: string;
    });

const baseStyles = `inline-flex items-center justify-center cursor-pointer font-bold transition-all focus:outline-none rounded-md`;
const roundStyles = `gap-1 bg-white px-4 py-2 text-sm text-green shadow-md hover:-translate-y-0.5 hover:shadow-md`;
const variants: Record<ButtonVariant, string> = {
  default: `${roundStyles}`,
  outline: `${roundStyles} border border-green hover:bg-green/15`,
  text: `p-1.5 hover:font-bold text-md`,
};

export default function Button(props: ButtonProps) {
  const { children, variant = "default", className = "" } = props;
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if ("href" in props) {
    return (
      <Link href={props.href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={styles}>
      {children}
    </button>
  );
}
