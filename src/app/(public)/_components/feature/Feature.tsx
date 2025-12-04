export default function Feature({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div>
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="text-lg font-semibold text-textStrong">{title}</h3>
      <p className="text-textMuted break-keep text-sm mt-2 leading-relaxed whitespace-pre-line">
        {desc}
      </p>
    </div>
  );
}
