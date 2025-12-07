export default function ErrorState({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="text-red-600 text-base p-2 text-left">{children}</p>;
}
