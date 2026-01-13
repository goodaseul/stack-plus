import clsx from "clsx";
import Link from "next/link";

type ButtonVariant = "default" | "outline" | "text" | "text_underline";

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
  "transition-all inline-flex items-center justify-center gap-1 rounded-full text-sm text-black font-medium focus:outline-none cursor-pointer hover:-translate-y-1";

const variantStyles: Record<ButtonVariant, string> = {
  default: "bg-point px-4 py-3.5",
  outline: "border border-point bg-white px-4 py-3.5 hover:bg-point",
  text_underline:
    "p-1 hover:translate-y-0 relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
  text: "p-1 hover:translate-y-0 relative",
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
