import { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
}

export default function SafeImage({ src, alt = "", className, fallback, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    if (fallback) return <>{fallback}</>;

    return (
      <div className={`${className ?? ""} bg-cream-dark flex items-center justify-center`}>
        <div className="text-center px-4 py-6">
          <svg
            className="w-10 h-10 text-charcoal/20 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
            />
          </svg>
          {alt && <p className="text-xs text-charcoal/40 mt-2">{alt}</p>}
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
