import HeroSection from "../components/HeroSection";
import CTAButton from "../components/CTAButton";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { heroHome } from "../assets/images";
import { featuredDishes } from "../data/featured";
import { hours } from "../data/restaurant";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <HeroSection
        image={heroHome}
        title="La Terraza"
        titleClassName="font-logo font-normal text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-tight drop-shadow-lg"
        subtitle="Sabores del Mediterráneo en el corazón de Gràcia"
        ctaLabel="Reservar Mesa"
        ctaTo="/reservas"
        alt="Terraza del restaurante al atardecer con vistas al barrio de Gràcia"
      />

      {/* Welcome */}
      <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto text-center fade-in">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
          Bienvenidos a nuestra mesa
        </h2>
        <p className="mt-6 text-charcoal/70 leading-relaxed text-lg max-w-2xl mx-auto">
          En La Terraza creemos que la buena cocina nace del respeto por el producto. Cada mañana
          seleccionamos personalmente los mejores ingredientes del Mercat de l'Abaceria para
          ofrecerte una experiencia gastronómica auténtica, donde las recetas de la abuela se
          encuentran con la creatividad contemporánea.
        </p>
      </section>

      {/* Featured dishes */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal text-center fade-in">
            Platos Destacados
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="fade-in bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-charcoal">{dish.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center fade-in">
            <CTAButton to="/carta">Ver Carta Completa</CTAButton>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 md:py-24 px-4 max-w-4xl mx-auto text-center fade-in">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
          Horarios
        </h2>
        <div className="mt-8 space-y-3 text-charcoal/70 text-lg">
          {hours.map((h) => (
            <p key={h.days}>
              <span className="font-semibold text-charcoal">{h.days}:</span> {h.time}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <CTAButton to="/reservas">Reservar Mesa</CTAButton>
        </div>
      </section>
    </>
  );
}
