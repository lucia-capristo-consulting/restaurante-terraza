import { useSearchParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import DishCard from "../components/DishCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { heroMenu } from "../assets/images";
import { menuData, menuCategories } from "../data/menu";

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramCat = searchParams.get("cat");
  const active = paramCat && menuCategories.includes(paramCat) ? paramCat : menuCategories[0];
  useScrollReveal([active]);

  function handleCategory(cat: string) {
    setSearchParams({ cat }, { replace: true });
  }

  return (
    <>
      <HeroSection
        image={heroMenu}
        title="Nuestra Carta"
        subtitle="Producto fresco de mercado, cada día"
        variant="banner"
        alt="Vista cenital de una mesa con platos mediterráneos variados"
      />

      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 fade-in">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === cat
                  ? "bg-terra text-white"
                  : "bg-cream-dark text-charcoal hover:bg-amber-warm/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[active].map((dish) => (
            <div key={dish.name} className="fade-in">
              <DishCard {...dish} />
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-charcoal/50 fade-in">
          IVA incluido. Consulta con nuestro personal sobre alérgenos e intolerancias.
          Precios por persona salvo indicación contraria.
        </p>
      </section>
    </>
  );
}
