type TitleProps = {
  title: string;
  desc: React.ReactNode;
};

export default function Title({ title, desc }: TitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-5 text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  );
}
