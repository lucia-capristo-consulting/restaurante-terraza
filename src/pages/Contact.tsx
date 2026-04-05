import type { FormEvent } from "react";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { heroContact } from "../assets/images";

export default function Contact() {
  useScrollReveal();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <HeroSection
        image={heroContact}
        title="Contacto"
        subtitle="Estamos encantados de atenderte"
        variant="banner"
      />

      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8 fade-in">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                Encuéntranos
              </h2>
              <ul className="mt-6 space-y-4 text-charcoal/70">
                <li className="flex gap-3">
                  <span className="text-terra font-bold text-xl leading-none">&#9906;</span>
                  <div>
                    <p className="font-semibold text-charcoal">Dirección</p>
                    <p>Carrer de Verdi, 42, 08012 Barcelona</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-terra font-bold text-xl leading-none">&#9743;</span>
                  <div>
                    <p className="font-semibold text-charcoal">Teléfono</p>
                    <a href="tel:+34933XXXXXX" className="hover:text-terra transition-colors">
                      +34 933 XXX XXX
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-terra font-bold text-xl leading-none">&#9993;</span>
                  <div>
                    <p className="font-semibold text-charcoal">Email</p>
                    <a href="mailto:hola@laterraza.es" className="hover:text-terra transition-colors">
                      hola@laterraza.es
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-charcoal">Cómo llegar</h3>
              <ul className="mt-3 space-y-2 text-charcoal/70 text-sm">
                <li><span className="font-semibold text-charcoal">Metro:</span> Fontana (Línea L3, verde) — 3 min a pie</li>
                <li><span className="font-semibold text-charcoal">Bus:</span> Líneas 22, 24, 87 — parada Travessera de Gràcia</li>
                <li><span className="font-semibold text-charcoal">Parking:</span> SABA Gràcia (Carrer de Torrent de l'Olla) — 5 min a pie</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl font-semibold text-charcoal">Síguenos</h3>
              <div className="mt-3 flex gap-3">
                {[
                  { name: "Instagram", url: "#" },
                  { name: "Facebook", url: "#" },
                  { name: "TripAdvisor", url: "#" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    className="px-4 py-2 bg-cream-dark rounded-full text-sm font-semibold text-charcoal hover:bg-terra hover:text-white transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="fade-in">
            {sent ? (
              <div className="bg-olive/10 border border-olive rounded-2xl p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-olive-dark">Mensaje enviado</h3>
                <p className="mt-4 text-charcoal/70">
                  Gracias por escribirnos. Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-terra font-semibold hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">
                  Escríbenos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-charcoal mb-1">
                      Nombre *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-charcoal mb-1">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-charcoal mb-1">
                    Asunto
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-charcoal mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-terra text-white py-3 rounded-full font-semibold text-lg hover:bg-terra-dark transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 fade-in rounded-2xl overflow-hidden shadow-sm">
          <iframe
            title="Ubicación La Terraza"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5!2d2.1565!3d41.4036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI0JzEzLjAiTiAywrAwOScyMy40IkU!5e0!3m2!1ses!2ses!4v1700000000000"
            className="w-full h-72 md:h-96 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
