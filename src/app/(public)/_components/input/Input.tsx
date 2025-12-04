type InputProps = {
  type: "email" | "password" | "text";
  placeholder: string;
};

const InputStyles = `w-full border border-gray-300 rounded-lg px-4 py-3 text-sm
                       focus:outline-none focus:ring-2 focus:ring-gray-900 transition`;
export default function Input({ type, placeholder }: InputProps) {
  return (
    <input type={type} placeholder={placeholder} className={InputStyles} />
  );
}
