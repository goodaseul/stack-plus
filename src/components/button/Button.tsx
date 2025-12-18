import clsx from "clsx";
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

const baseStyles =
  "transition-all inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium transition-colors focus:outline-none cursor-pointer";

const variantStyles: Record<ButtonVariant, string> = {
  default: "bg-slate-600 text-white px-4 py-2 hover:bg-slate-700",

  outline:
    "border border-slate-300 text-slate-600 bg-white px-4 py-2 hover:bg-slate-50",

  text: "text-slate-600 p-1 hover:underline",
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
