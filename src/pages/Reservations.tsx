import { useState } from "react";
import type { FormEvent } from "react";
import HeroSection from "../components/HeroSection";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { heroReservations } from "../assets/images";
import { contact, reservationHours } from "../data/restaurant";

export default function Reservations() {
  useScrollReveal();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  }

  return (
    <>
      <HeroSection
        image={heroReservations}
        title="Reserva tu Mesa"
        subtitle="Te esperamos para una experiencia inolvidable"
        variant="banner"
        alt="Mesa elegante preparada para una cena en la terraza del restaurante"
      />

      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 fade-in">
            {status === "sent" ? (
              <div className="bg-olive/10 border border-olive rounded-2xl p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-olive-dark">
                  Reserva recibida
                </h3>
                <p className="mt-4 text-charcoal/70">
                  Hemos recibido tu solicitud de reserva. Te confirmaremos por teléfono o email en
                  las próximas horas. Gracias por elegir La Terraza.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-terra font-semibold hover:underline"
                >
                  Hacer otra reserva
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                  Datos de la reserva
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-1">
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    disabled={status === "sending"}
                    className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-charcoal mb-1">
                      Fecha *
                    </label>
                    <input
                      id="date"
                      type="date"
                      required
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-semibold text-charcoal mb-1">
                      Hora *
                    </label>
                    <select
                      id="time"
                      required
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    >
                      <option value="">Seleccionar</option>
                      {reservationHours.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-charcoal mb-1">
                      Comensales *
                    </label>
                    <select
                      id="guests"
                      required
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    >
                      <option value="">Seleccionar</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="occasion" className="block text-sm font-semibold text-charcoal mb-1">
                    Ocasión especial
                  </label>
                  <select
                    id="occasion"
                    disabled={status === "sending"}
                    className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                  >
                    <option value="">Ninguna</option>
                    <option value="cumpleanos">Cumpleaños</option>
                    <option value="aniversario">Aniversario</option>
                    <option value="negocios">Comida de negocios</option>
                    <option value="otro">Otra</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-semibold text-charcoal mb-1">
                    Comentarios / Alergias
                  </label>
                  <textarea
                    id="comments"
                    rows={3}
                    disabled={status === "sending"}
                    className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-terra text-white py-3 rounded-full font-semibold text-lg hover:bg-terra-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Confirmar Reserva"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <aside className="lg:col-span-2 space-y-8 fade-in">
            <div className="bg-cream-dark rounded-2xl p-6">
              <h3 className="font-serif text-xl font-semibold text-charcoal">Información práctica</h3>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
                <li><span className="font-semibold text-charcoal">Comidas:</span> 13:00 – 16:00</li>
                <li><span className="font-semibold text-charcoal">Cenas:</span> 20:00 – 23:30</li>
                <li><span className="font-semibold text-charcoal">Cerrado:</span> Lunes</li>
                <li><span className="font-semibold text-charcoal">Capacidad:</span> 45 comensales interior + 20 terraza</li>
              </ul>
            </div>

            <div className="bg-cream-dark rounded-2xl p-6">
              <h3 className="font-serif text-xl font-semibold text-charcoal">Contacto directo</h3>
              <p className="mt-3 text-charcoal/70 text-sm">
                Llámanos para reservas inmediatas o grupos de más de 8 personas:
              </p>
              <a
                href={contact.phoneHref}
                className="mt-3 inline-block text-terra font-bold text-lg hover:underline"
              >
                {contact.phone}
              </a>
            </div>

            <div className="bg-cream-dark rounded-2xl p-6">
              <h3 className="font-serif text-xl font-semibold text-charcoal">Política de cancelación</h3>
              <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">
                Puedes cancelar o modificar tu reserva hasta 4 horas antes sin cargo.
                Para grupos de 6+ personas, pedimos 24 horas de antelación. Las reservas no
                confirmadas se mantienen 15 minutos.
              </p>
            </div>

            <div className="bg-terra/10 border border-terra/30 rounded-2xl p-6">
              <p className="text-sm text-charcoal/80 leading-relaxed">
                <span className="font-semibold">Grupos grandes:</span> Para reservas de más de 8
                personas, menús de grupo o eventos privados, contacta directamente por teléfono o
                escríbenos por WhatsApp.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
