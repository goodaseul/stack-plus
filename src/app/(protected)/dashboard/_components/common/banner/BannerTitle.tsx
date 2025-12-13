type BannerTitleProps = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export function BannerTitle({ title, description }: BannerTitleProps) {
  return (
    <>
      <h3 className="mb-1 text-lg font-semibold text-gray-strong/80 group-hover:text-gray-strong">
        {title}
      </h3>
      <p className="mb-4 text-sm text-gray-strong/60 group-hover:text-gray-strong/80">
        {description}
      </p>
    </>
  );
}
