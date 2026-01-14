export function ModalField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const LabelStyles = "block text-sm font-medium text-gray-700";

  return (
    <div className="space-y-4">
      <label className={LabelStyles}>{label}</label>
      {children}
    </div>
  );
}
