type ErrorStateProps = {
  children: React.ReactNode;
};
export default function ErrorState({ children }: ErrorStateProps) {
  return (
    <p
      role="alert"
      className="
        mt-1 text-xs text-red-600
        leading-relaxed
      "
    >
      {children}
    </p>
  );
}
