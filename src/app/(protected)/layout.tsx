import ProtectedProvider from "@/providers/ProtectedProvider";
import Header from "./_components/layout/Header";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedProvider>
      <Header />
      {children}
    </ProtectedProvider>
  );
}
