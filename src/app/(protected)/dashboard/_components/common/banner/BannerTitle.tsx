import clsx from "clsx";

type BannerTitleProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  variant?: "default" | "white";
};

export function BannerTitle({
  title,
  description,
  variant = "default",
}: BannerTitleProps) {
  const isWhite = variant === "white";

  return (
    <div className="space-y-2 pb-3">
      <h3
        className={clsx(
          "text-base font-semibold",
          isWhite
            ? "dark:text-black"
            : "text-black dark:group-hover:text-white",
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "text-sm leading-relaxed",
          isWhite ? "text-black" : "text-gray-600 dark:group-hover:text-white",
        )}
      >
        {description}
      </p>
    </div>
  );
}
