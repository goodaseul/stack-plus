type TitleProps = {
  title: string;
  desc: string;
};

export default function Title({ title, desc }: TitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
        {title}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}
