import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-logo text-4xl text-white mb-2">La Terraza</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Sabores del Mediterráneo en el corazón de Gràcia
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/laterrazabcn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terra transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current text-cream-dark" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.773.898.957 1.47.163.46.349 1.26.404 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.241 1.97-.404 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.349-2.43.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.241-2.43-.404a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.241-1.97.404-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.064 2.3c.46-.163 1.26-.349 2.43-.404C8.76 1.838 9.14 1.826 12 1.826L12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.059 1.278.261 2.15.558 2.913a5.882 5.882 0 001.384 2.126 5.882 5.882 0 002.126 1.384c.763.297 1.635.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.059 2.15-.261 2.913-.558a5.882 5.882 0 002.126-1.384 5.882 5.882 0 001.384-2.126c.297-.763.499-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.278-.261-2.15-.558-2.913a5.882 5.882 0 00-1.384-2.126A5.882 5.882 0 0019.86.63C19.097.333 18.225.131 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/laterrazabcn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terra transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current text-cream-dark" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.018 1.792-4.684 4.533-4.684 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.886v2.273h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
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
