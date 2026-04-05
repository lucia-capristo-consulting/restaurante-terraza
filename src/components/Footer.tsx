import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">La Terraza</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Sabores del Mediterráneo en el corazón de Gràcia. Cocina de mercado con productos de
              proximidad desde 2008.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {["Instagram", "Facebook", "TripAdvisor"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold hover:bg-terra transition-colors"
                  aria-label={name}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-sm mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { to: "/", label: "Inicio" },
                { to: "/carta", label: "Carta" },
                { to: "/nosotros", label: "Sobre Nosotros" },
                { to: "/reservas", label: "Reservas" },
                { to: "/contacto", label: "Contacto" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-sm mb-4">
              Horarios
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Martes - Viernes: 13:00 – 16:00 / 20:00 – 23:30</li>
              <li>Sábados: 13:00 – 16:30 / 20:00 – 00:00</li>
              <li>Domingos: 13:00 – 16:30</li>
              <li>Lunes: Cerrado</li>
            </ul>
            <div className="mt-4 text-sm opacity-80">
              <p>Carrer de Verdi, 42, 08012 Barcelona</p>
              <p>+34 933 XXX XXX</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs opacity-60">
          &copy; 2026 Restaurante La Terraza. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
