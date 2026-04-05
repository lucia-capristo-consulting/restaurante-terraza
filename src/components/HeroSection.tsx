import { Link } from "react-router-dom";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
  overlay?: boolean;
}

export default function HeroSection({
  image,
  title,
  subtitle,
  ctaLabel,
  ctaTo,
  overlay = true,
}: HeroSectionProps) {
  return (
    <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      )}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/90 font-light drop-shadow">
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
