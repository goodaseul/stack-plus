import ErrorState from "@/components/error-state/ErrorState";
import clsx from "clsx";

type InputProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
  errors?: string;
};

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  errors,
  className,
}: InputProps) {
  return (
    <div className="w-full">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={clsx(
          "w-full rounded-lg px-4 py-3 text-sm transition focus:outline-none",
          errors
            ? "border border-red-500 focus:ring-2 focus:ring-red-500"
            : "border border-gray-300 focus:ring-2 focus:ring-gray-900",
          className
        )}
      />
      <div className="mt-1">{errors && <ErrorState>{errors}</ErrorState>}</div>
    </div>
  );
}
