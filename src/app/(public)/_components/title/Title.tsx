type TitleProps = {
  title: string;
  desc: string;
};
export default function Title({ title, desc }: TitleProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
      <p className="text-gray-600 text-sm mb-10">{desc}</p>
    </>
  );
}
