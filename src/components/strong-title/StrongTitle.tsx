export default function StrongTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <strong className={`font-permanent-marker text-blue`}>{children}</strong>
  );
}
