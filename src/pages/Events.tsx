import { useState } from "react";
import type { FormEvent } from "react";
import HeroSection from "../components/HeroSection";
import SafeImage from "../components/SafeImage";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  heroEvents,
  galleryEvento1,
  galleryEvento2,
  galleryEvento3,
  galleryEvento4,
  galleryEvento5,
  galleryEvento6,
} from "../assets/images";
import { contact } from "../data/restaurant";

const eventTypes = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12 14.625v-1.5" />
      </svg>
    ),
    title: "Cumpleaños",
    description: "Celebra tu día especial con una velada inolvidable en nuestra terraza privada.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Aniversarios",
    description: "Un marco romántico para celebrar vuestro amor con una cena íntima y personalizada.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Cenas de empresa",
    description: "Eventos corporativos con menús exclusivos y servicio profesional impecable.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Despedidas",
    description: "Una fiesta única para despedirte de la soltería rodeado de buena comida y amigos.",
  },
];

const galleryImages = [
  { src: galleryEvento1, alt: "Cumpleaños decorado con globos y luces en la terraza" },
  { src: galleryEvento2, alt: "Cena de empresa con mesa larga y servicio elegante" },
  { src: galleryEvento3, alt: "Aniversario romántico con velas y pétalos de rosa" },
  { src: galleryEvento4, alt: "Celebración de despedida con brindis en grupo" },
  { src: galleryEvento5, alt: "Mesa decorada con flores para un evento privado" },
  { src: galleryEvento6, alt: "Detalle de la decoración temática de un evento" },
];

const testimonials = [
  {
    name: "María José Delgado",
    event: "Cumpleaños 50",
    quote:
      "Celebramos el 50 cumpleaños de mi marido en la terraza privada y fue absolutamente mágico. El equipo preparó una decoración preciosa con las flores que pedimos, y el menú degustación dejó a todos sin palabras. Varios invitados me han dicho que fue la mejor cena a la que han ido nunca.",
    rating: 5,
  },
  {
    name: "Àlex Puigdomènech",
    event: "Cena de empresa - Navidad",
    quote:
      "Organizamos la cena de Navidad de la empresa (32 personas) y el resultado fue impecable. Nos ayudaron con todo: desde el menú adaptado a intolerancias hasta la disposición de las mesas para facilitar el networking. El servicio fue atento sin ser intrusivo. Repetiremos seguro.",
    rating: 5,
  },
  {
    name: "Laura Martín y Sergio Ruiz",
    event: "Aniversario de boda",
    quote:
      "Para nuestro décimo aniversario queríamos algo íntimo y especial. Nos reservaron el rincón de la terraza con vistas, pusieron nuestra playlist y el chef preparó un menú sorpresa basado en nuestros platos favoritos. Fue como revivir nuestra primera cena juntos, pero mejor.",
    rating: 5,
  },
];

const includes = [
  { icon: "🎨", title: "Decoración temática", description: "Personalizada según tu evento" },
  { icon: "🎵", title: "Música ambiental", description: "Playlist propia o selección nuestra" },
  { icon: "🍽️", title: "Menú personalizado", description: "Diseñado con nuestro chef" },
  { icon: "👨‍🍳", title: "Servicio exclusivo", description: "Camareros dedicados a tu evento" },
];

export default function Events() {
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
        image={heroEvents}
        title="Eventos Privados"
        subtitle="Haz de tu celebración un momento inolvidable"
        variant="banner"
        alt="Terraza decorada para un evento privado nocturno con luces"
      />

      {/* Intro */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
            Tu celebración, nuestra pasión
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed">
            En La Terraza organizamos eventos privados para que solo tengas que preocuparte de
            disfrutar. Desde cumpleaños íntimos hasta cenas de empresa, nuestro equipo se encarga de
            cada detalle para crear una experiencia gastronómica a medida.
          </p>
        </div>

        {/* Event types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {eventTypes.map((ev) => (
            <div
              key={ev.title}
              className="fade-in bg-white rounded-2xl p-6 text-center shadow-sm border border-cream-dark hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terra/10 text-terra mb-4">
                {ev.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal">{ev.title}</h3>
              <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{ev.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capacity & pricing */}
      <section className="bg-cream-dark py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
                Espacios y capacidad
              </h2>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-terra/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-terra" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg">Terraza privada</h3>
                    <p className="text-charcoal/70">
                      Hasta <span className="font-semibold text-charcoal">40 personas</span> al aire
                      libre con vistas, iluminación y ambiente exclusivo.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg">Salón completo</h3>
                    <p className="text-charcoal/70">
                      Hasta <span className="font-semibold text-charcoal">80 personas</span> con
                      climatización, equipo de sonido y espacio polivalente.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="fade-in bg-white rounded-2xl p-8 shadow-sm border border-cream-dark">
              <h3 className="font-serif text-2xl font-bold text-charcoal">Menús cerrados</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-terra">35€</span>
                <span className="text-charcoal/70">/persona</span>
              </div>
              <p className="text-sm text-charcoal/50 mt-1">Precio desde · mínimo 15 personas</p>
              <ul className="mt-6 space-y-3">
                {includes.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="text-xl leading-none mt-0.5">{item.icon}</span>
                    <div>
                      <span className="font-semibold text-charcoal text-sm">{item.title}</span>
                      <span className="text-charcoal/60 text-sm"> — {item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-charcoal/50 leading-relaxed">
                El precio final depende del menú elegido y los servicios adicionales. Te enviaremos un
                presupuesto personalizado sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal text-center fade-in">
          Galería de eventos
        </h2>
        <p className="text-center text-charcoal/70 mt-4 fade-in">
          Algunos momentos de las celebraciones que hemos acogido
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="fade-in aspect-[4/3] rounded-xl overflow-hidden bg-cream-dark"
            >
              <SafeImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center fade-in">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t) => (
              <div key={t.name} className="fade-in bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex gap-1 text-amber-warm mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cream-dark/80 text-sm leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-cream-dark/50 text-xs mt-0.5">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal text-center">
            Solicita tu evento
          </h2>
          <p className="text-center text-charcoal/70 mt-4 max-w-2xl mx-auto">
            Cuéntanos qué tienes en mente y te enviaremos una propuesta personalizada sin compromiso.
          </p>

          <div className="mt-12">
            {status === "sent" ? (
              <div className="bg-olive/10 border border-olive rounded-2xl p-8 text-center">
                <h3 className="font-serif text-2xl font-bold text-olive-dark">
                  Solicitud recibida
                </h3>
                <p className="mt-4 text-charcoal/70">
                  Hemos recibido tu solicitud de evento. Nuestro equipo te contactará en un plazo de
                  24-48 horas con una propuesta personalizada. Gracias por confiar en La Terraza.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-terra font-semibold hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-cream-dark">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="ev-name" className="block text-sm font-semibold text-charcoal mb-1">
                      Nombre completo *
                    </label>
                    <input
                      id="ev-name"
                      type="text"
                      required
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="ev-type" className="block text-sm font-semibold text-charcoal mb-1">
                      Tipo de evento *
                    </label>
                    <select
                      id="ev-type"
                      required
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    >
                      <option value="">Seleccionar</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="aniversario">Aniversario</option>
                      <option value="empresa">Cena de empresa</option>
                      <option value="despedida">Despedida</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="ev-date" className="block text-sm font-semibold text-charcoal mb-1">
                      Fecha deseada *
                    </label>
                    <input
                      id="ev-date"
                      type="date"
                      required
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="ev-guests" className="block text-sm font-semibold text-charcoal mb-1">
                      N.º de asistentes *
                    </label>
                    <input
                      id="ev-guests"
                      type="number"
                      min={15}
                      max={80}
                      required
                      disabled={status === "sending"}
                      placeholder="15 - 80"
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="ev-budget" className="block text-sm font-semibold text-charcoal mb-1">
                      Presupuesto aprox.
                    </label>
                    <select
                      id="ev-budget"
                      disabled={status === "sending"}
                      className="w-full border border-cream-dark rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-terra/50 disabled:opacity-50"
                    >
                      <option value="">Sin definir</option>
                      <option value="500-1000">500€ - 1.000€</option>
                      <option value="1000-2000">1.000€ - 2.000€</option>
                      <option value="2000-3000">2.000€ - 3.000€</option>
                      <option value="3000+">Más de 3.000€</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="ev-comments" className="block text-sm font-semibold text-charcoal mb-1">
                    Comentarios o peticiones especiales
                  </label>
                  <textarea
                    id="ev-comments"
                    rows={4}
                    disabled={status === "sending"}
                    placeholder="Cuéntanos los detalles de tu evento: temática, preferencias gastronómicas, necesidades especiales..."
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
                    "Solicitar Presupuesto"
                  )}
                </button>
              </form>
            )}
          </div>

          <p className="text-center text-sm text-charcoal/50 mt-6">
            Prefieres llamar? Contacta directamente al{" "}
            <a href={contact.phoneHref} className="text-terra font-semibold hover:underline">
              {contact.phone}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
