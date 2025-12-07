import ErrorState from "@/components/error-state/ErrorState";

type InputProps = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
  errors: string;
};

const InputStyles = `w-full border border-gray-300 rounded-lg px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-gray-900 transition`;
export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  errors,
}: InputProps) {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={InputStyles}
        onChange={onChange}
      />
      {errors && <ErrorState>{errors}</ErrorState>}
    </div>
  );
}
