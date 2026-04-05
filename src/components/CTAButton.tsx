import { Link } from "react-router-dom";

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({
  to,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base = "inline-block px-8 py-3 rounded-full font-semibold transition-colors text-center";
  const styles =
    variant === "primary"
      ? "bg-terra text-white hover:bg-terra-dark"
      : "border-2 border-terra text-terra hover:bg-terra hover:text-white";

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
