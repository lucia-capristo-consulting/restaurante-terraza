import type { FormEvent } from "react";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { heroContact } from "../assets/images";
import { contact } from "../data/restaurant";

export default function Contact() {
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
        image={heroContact}
        title="Contacto"
        subtitle="Estamos encantados de atenderte"
        variant="banner"
        alt="Fachada del restaurante La Terraza en el barrio de Gràcia, Barcelona"
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
                    <p>{contact.address}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-terra font-bold text-xl leading-none">&#9743;</span>
                  <div>
                    <p className="font-semibold text-charcoal">Teléfono</p>
                    <a href={contact.phoneHref} className="hover:text-terra transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-terra font-bold text-xl leading-none">&#9993;</span>
                  <div>
                    <p className="font-semibold text-charcoal">Email</p>
                    <a href={`mailto:${contact.email}`} className="hover:text-terra transition-colors">
                      {contact.email}
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
              <div className="mt-3 flex gap-4">
                <a
                  href="https://www.instagram.com/laterrazabcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-cream-dark flex items-center justify-center hover:bg-terra hover:text-white transition-colors text-charcoal"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.773.898.957 1.47.163.46.349 1.26.404 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.241 1.97-.404 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.163-1.26.349-2.43.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.241-2.43-.404a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.163-.46-.349-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.241-1.97.404-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.064 2.3c.46-.163 1.26-.349 2.43-.404C8.76 1.838 9.14 1.826 12 1.826L12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.902.333 4.14.63a5.882 5.882 0 00-2.126 1.384A5.882 5.882 0 00.63 4.14C.333 4.902.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.059 1.278.261 2.15.558 2.913a5.882 5.882 0 001.384 2.126 5.882 5.882 0 002.126 1.384c.763.297 1.635.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.059 2.15-.261 2.913-.558a5.882 5.882 0 002.126-1.384 5.882 5.882 0 001.384-2.126c.297-.763.499-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.278-.261-2.15-.558-2.913a5.882 5.882 0 00-1.384-2.126A5.882 5.882 0 0019.86.63C19.097.333 18.225.131 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/laterrazabcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-cream-dark flex items-center justify-center hover:bg-terra hover:text-white transition-colors text-charcoal"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.018 1.792-4.684 4.533-4.684 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.886v2.273h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tripadvisor.com/laterrazabcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-cream-dark flex items-center justify-center hover:bg-terra hover:text-white transition-colors text-charcoal"
                  aria-label="TripAdvisor"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 4.5 2 4.5S4.1 2.8 7.4 2.2c-.1 0-.1 0-.2.1C4.1 3.5 2 6.4 2 9.8c0 4.4 3.6 8 8 8 1.3 0 2.5-.3 3.6-.9L12 19l-1.6-2.1c1.1.6 2.3.9 3.6.9 4.4 0 8-3.6 8-8 0-3.4-2.1-6.3-5.2-7.5-.1 0-.1-.1-.2-.1C19.9 2.8 22 4.5 22 4.5S17.5 2 12 2zM7 6.8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm10 0c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM7 8.3c-.8 0-1.5.7-1.5 1.5S6.2 11.3 7 11.3s1.5-.7 1.5-1.5S7.8 8.3 7 8.3zm10 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="fade-in">
            {status === "sent" ? (
              <div className="bg-olive/10 border border-olive rounded-2xl p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-olive-dark">Mensaje enviado</h3>
                <p className="mt-4 text-charcoal/70">
                  Gracias por escribirnos. Te responderemos lo antes posible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
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
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
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
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
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
                    disabled={status === "sending"}
                    className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
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
                    "Enviar Mensaje"
                  )}
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
