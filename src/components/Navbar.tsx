import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "Carta" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/reservas", label: "Reservas" },
  { to: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-4xl md:text-5xl font-logo font-medium text-terra-dark tracking-wide">
            La Terraza
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`font-nav text-sm font-bold uppercase tracking-wider transition-colors hover:text-terra ${
                  pathname === l.to ? "text-terra border-b-2 border-terra pb-1" : "text-charcoal"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/reservas"
              className="font-nav bg-terra text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-terra-dark transition-colors"
            >
              Reservar Mesa
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-charcoal transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-cream-dark">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block font-nav text-lg font-bold transition-colors ${
                    pathname === l.to ? "text-terra" : "text-charcoal"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/reservas"
                onClick={() => setOpen(false)}
                className="inline-block font-nav bg-terra text-white px-6 py-3 rounded-full font-bold hover:bg-terra-dark transition-colors"
              >
                Reservar Mesa
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
