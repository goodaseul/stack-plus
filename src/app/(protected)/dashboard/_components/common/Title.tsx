export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex justify-between items-center px-2 text-xl mb-4">
      {children}
    </h2>
  );
}
