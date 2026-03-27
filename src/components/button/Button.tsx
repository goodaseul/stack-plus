import clsx from "clsx";
import Link from "next/link";

type ButtonVariant = "default" | "outline" | "text" | "text_underline";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  bookmarked?: boolean;
  onClick?: (id: number) => void;
};

type ButtonProps =
  | (BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (BaseProps & {
      href: string;
    });

const baseStyles =
  "inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium transition-all focus:outline-none cursor-pointer hover:-translate-y-1 group-hover:-translate-y-1";
const variantStyles: Record<ButtonVariant, string> = {
  default: `
  bg-point text-white
  p-2 md:px-4 md:py-3.5
`,

  outline: `
  border border-point text-point
  bg-transparent
   p-2 md:px-4 md:py-3.5
  hover:bg-point
  dark:hover:bg-point
  hover:text-white
`,

  text: `
    p-1 text-foreground
    hover:translate-y-0 group-hover:translate-y-0
  `,

  text_underline: `
  relative inline-block p-1 text-foreground
  hover:translate-y-0 group-hover:translate-y-0

  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0
  after:bg-point
  after:rounded-full

  after:transition-[width] after:duration-300 after:ease-out
  hover:after:w-full
`,
};
export default function Button(props: ButtonProps) {
  const { children, variant = "default", className = "" } = props;

  const styles = clsx(baseStyles, variantStyles[variant], className);

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
