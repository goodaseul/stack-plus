type SectionWrapperProps = {
  bg?: string;
  title: React.ReactNode;
  desc: React.ReactNode;
  children: React.ReactNode;
};
export default function SectionWrapper({
  bg,
  title,
  desc,
  children,
}: SectionWrapperProps) {
  return (
    <section className={`mx-auto min-h-screen w-full text-center ${bg}`}>
      <div className="m-auto max-w-6xl min-h-screen flex flex-col justify-center px-4 py-10 md:py-0">
        <h2 className="break-keep text-3xl font-bold tracking-tight md:text-4xl mb-5">
          {title}
        </h2>
        <p className="break-keep text-base leading-relaxed text-gray-600 sm:text-lg">
          {desc}
        </p>
        {children}
      </div>
    </section>
  );
}
