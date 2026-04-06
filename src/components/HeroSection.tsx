import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
  titleClassName?: string;
  variant?: "cover" | "banner";
  overlay?: boolean;
  alt?: string;
}

export default function HeroSection({
  image,
  title,
  subtitle,
  ctaLabel,
  ctaTo,
  titleClassName,
  variant = "cover",
  overlay = true,
  alt = "",
}: HeroSectionProps) {
  const isBanner = variant === "banner";

  return (
    <section
      className={`relative overflow-hidden ${
        isBanner
          ? "h-[40vh] md:h-[50vh] flex items-end"
          : "h-[70vh] md:h-[85vh] flex items-center justify-center"
      }`}
    >
      <SafeImage
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {overlay && (
        <div className={`absolute inset-0 ${
          isBanner
            ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            : "bg-gradient-to-t from-black/70 via-black/30 to-black/10"
        }`} />
      )}
      <div
        className={`relative z-10 px-4 ${
          isBanner
            ? "max-w-7xl mx-auto w-full pb-8 md:pb-12 sm:px-6 lg:px-8"
            : "text-center max-w-3xl"
        }`}
      >
        <h1
          className={
            titleClassName ??
            `font-serif font-bold text-white leading-tight drop-shadow-lg ${
              isBanner
                ? "text-3xl sm:text-4xl md:text-5xl"
                : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            }`
          }
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 md:mt-4 text-lg md:text-xl text-white/90 font-light drop-shadow">
            {subtitle}
          </p>
        )}
        {ctaLabel && ctaTo && (
          <Link
            to={ctaTo}
            className="inline-block mt-8 bg-terra text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-lg font-semibold hover:bg-terra-dark transition-colors shadow-lg"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
