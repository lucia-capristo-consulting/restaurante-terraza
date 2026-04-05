import HeroSection from "../components/HeroSection";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  heroAbout,
  galleryInterior,
  galleryTerraza,
  galleryBarra,
  galleryDetalle,
  teamChef,
  teamSommelier,
} from "../assets/images";

const gallery = [galleryInterior, galleryTerraza, galleryBarra, galleryDetalle];

export default function About() {
  useScrollReveal();

  return (
    <>
      <HeroSection
        image={heroAbout}
        title="Nuestra Historia"
        subtitle="Tradición mediterránea desde 2008"
        variant="banner"
      />

      {/* Story */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 text-center fade-in">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
          Desde 2008, cocinando con el alma
        </h2>
        <div className="mt-8 space-y-5 text-charcoal/70 leading-relaxed text-lg text-left md:text-center">
          <p>
            La Terraza nació de un sueño de la familia Martínez: crear un espacio donde la cocina
            mediterránea de siempre se encontrase con la innovación y el buen producto. Ubicados en
            una antigua casa de vecinos del barrio de Gràcia, abrimos nuestras puertas en 2008 con
            una terraza que rápidamente se convirtió en el rincón favorito del barrio.
          </p>
          <p>
            Nuestra filosofía es sencilla: cada mañana, el Chef Carlos Martínez visita el Mercat de
            l'Abaceria para seleccionar personalmente los productos más frescos. La carta cambia con
            las estaciones, respetando el ritmo natural de la tierra y el mar Mediterráneo.
          </p>
          <p>
            Las recetas que servimos son un homenaje a nuestras abuelas, reinterpretadas con técnica
            contemporánea pero sin perder nunca la esencia. Aquí, la cocina es honesta, generosa y
            pensada para compartir.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Producto de Proximidad",
              text: "Trabajamos con proveedores locales y pescadores de la costa catalana. El 90% de nuestros ingredientes recorren menos de 100 km.",
            },
            {
              title: "Mercado Diario",
              text: "Cada mañana empezamos en el mercado. La carta evoluciona con las estaciones y lo que el mar y la tierra nos ofrecen ese día.",
            },
            {
              title: "Recetas con Historia",
              text: "Las recetas de nuestras abuelas son el punto de partida. Las modernizamos con respeto, manteniendo su sabor auténtico.",
            },
          ].map((item) => (
            <div key={item.title} className="fade-in p-6">
              <h3 className="font-serif text-xl font-semibold text-charcoal">{item.title}</h3>
              <p className="mt-4 text-charcoal/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal text-center fade-in">
          Nuestro Espacio
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((src, i) => (
            <div key={i} className="fade-in overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Interior del restaurante ${i + 1}`}
                className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal fade-in">
            Nuestro Equipo
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                name: "Carlos Martínez",
                role: "Chef Ejecutivo",
                image: teamChef,
                bio: "Formado en el Celler de Can Roca y con experiencia en cocinas de Barcelona y Lyon, Carlos dirige nuestra cocina con pasión y rigor desde la apertura.",
              },
              {
                name: "Lucía Vega",
                role: "Sommelier",
                image: teamSommelier,
                bio: "Con certificación WSET Level 3 y un profundo conocimiento de los vinos del Mediterráneo, Lucía cuida cada maridaje para elevar tu experiencia.",
              },
            ].map((member) => (
              <div key={member.name} className="fade-in">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mx-auto object-cover shadow-md"
                />
                <h3 className="mt-4 font-serif text-xl font-semibold text-charcoal">
                  {member.name}
                </h3>
                <p className="text-terra font-semibold text-sm">{member.role}</p>
                <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
