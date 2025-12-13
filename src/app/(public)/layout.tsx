// import PublicHeader from "./_components/PublicHeader";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <PublicHeader /> */}
      <main role="main">{children}</main>
    </>
  );
}
