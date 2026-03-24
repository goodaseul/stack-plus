type SectionWrapperProps = {
  title: React.ReactNode;
  desc: React.ReactNode;
  children: React.ReactNode;
};
export default function SectionWrapper({
  title,
  desc,
  children,
}: SectionWrapperProps) {
  return (
    <section
      className={`mx-auto w-full text-center bg-background text-foreground py-30`}
    >
      <div className="m-auto max-w-6xl flex flex-col justify-center px-4">
        <h2 className="break-keep text-3xl font-bold tracking-tight leading-normal md:text-4xl mb-5">
          {title}
        </h2>
        <p className="break-keep text-base leading-relaxed text-muted sm:text-lg">
          {desc}
        </p>
        {children}
      </div>
    </section>
  );
}
