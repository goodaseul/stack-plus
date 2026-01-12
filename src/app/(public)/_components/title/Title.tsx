type TitleProps = {
  title: string;
  desc: string;
};

export default function Title({ title, desc }: TitleProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-black">
        {title}
      </h1>
      <p className="mt-5 text-sm font-medium leading-relaxed text-gray-600">
        {desc}
      </p>
    </div>
  );
}
