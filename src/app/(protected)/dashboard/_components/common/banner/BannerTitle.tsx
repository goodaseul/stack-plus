type BannerTitleProps = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export function BannerTitle({ title, description }: BannerTitleProps) {
  return (
    <div className="space-y-2 pb-3 text-black dark:text-white">
      <h3
        className="
          text-base font-semibold
        "
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}
