import ErrorState from "@/components/error-state/ErrorState";
import clsx from "clsx";

type InputProps = {
  id?: string;
  name: string;
  children?: React.ReactNode;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  type?: string;
  placeholder?: string;
  className?: string;
  errors?: string;
};

export default function Input({
  id,
  name,
  children,
  type = "text",
  placeholder,
  value,
  onChange,
  onClick,
  errors,
  className,
}: InputProps) {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={clsx(
            "w-full rounded-full px-5 py-3.5 text-sm transition focus:outline-none",
            errors
              ? "border border-red-500 focus:ring-2 focus:ring-red-500"
              : "border border-gray-100 focus:ring-2 shadow-md focus:ring-gray-900",
            className
          )}
        />
        <button
          onClick={onClick}
          type="button"
          className={clsx(
            "absolute right-5 top-1/2 -translate-y-1/2",
            errors ? "text-red-500" : "text-black"
          )}
        >
          {children}
        </button>
      </div>
      <div className="mt-3">{errors && <ErrorState>{errors}</ErrorState>}</div>
    </div>
  );
}
