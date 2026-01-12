type BannerTitleProps = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export function BannerTitle({ title, description }: BannerTitleProps) {
  return (
    <div className="space-y-2 pb-3">
      <h3 className="text-base font-semibold text-black">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
