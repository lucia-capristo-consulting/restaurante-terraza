import { useState } from "react";
import HeroSection from "../components/HeroSection";
import DishCard from "../components/DishCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  heroMenu,
  carpaccioPulpo,
  escalivada,
  gazpacho,
  croquetas,
  paellaMariscos,
  arrozNegro,
  arrozBogavante,
  fideua,
  lubinaMenu,
  doradaPlancha,
  bacalao,
  solomillo,
  secretoIberico,
  carrillera,
  cremaCatalana,
  tartaSantiago,
  coulant,
  sorbeteLimon,
} from "../assets/images";

interface Dish {
  name: string;
  description: string;
  price: string;
  image?: string;
  allergens?: string[];
}

const menuData: Record<string, Dish[]> = {
  Entrantes: [
    {
      name: "Carpaccio de pulpo con vinagreta de limón",
      description: "Finas láminas de pulpo gallego aliñadas con vinagreta cítrica, pimentón de la Vera y aceite de oliva virgen extra.",
      price: "14 €",
      image: carpaccioPulpo,
      allergens: ["moluscos", "sulfitos"],
    },
    {
      name: "Escalivada con anchoas del Cantábrico",
      description: "Verduras asadas al horno de leña con anchoas premium del Cantábrico y un toque de aceite arbequina.",
      price: "12 €",
      image: escalivada,
      allergens: ["pescado"],
    },
    {
      name: "Gazpacho andaluz con crujiente de jamón",
      description: "Gazpacho tradicional con tomates de temporada, servido con virutas crujientes de jamón ibérico.",
      price: "9 €",
      image: gazpacho,
      allergens: [],
    },
    {
      name: "Croquetas de boletus con alioli de trufa",
      description: "Croquetas cremosas de boletus edulis acompañadas de un delicado alioli de trufa negra.",
      price: "11 €",
      image: croquetas,
      allergens: ["gluten", "lácteos", "huevo"],
    },
  ],
  "Arroces y Paellas": [
    {
      name: "Paella de mariscos (mín. 2 personas)",
      description: "Arroz bomba con gambas rojas, cigalas, mejillones, calamares y un sofrito de ñora. Elaboración 25 minutos.",
      price: "18 €/pers.",
      image: paellaMariscos,
      allergens: ["crustáceos", "moluscos"],
    },
    {
      name: "Arroz negro con sepia y alioli",
      description: "Arroz teñido con tinta de calamar, dados de sepia tierna y alioli casero.",
      price: "16 €",
      image: arrozNegro,
      allergens: ["moluscos", "huevo"],
    },
    {
      name: "Arroz meloso de bogavante",
      description: "Arroz caldoso con bogavante entero, fumé de marisco y un toque de azafrán de La Mancha.",
      price: "24 €/pers.",
      image: arrozBogavante,
      allergens: ["crustáceos"],
    },
    {
      name: "Fideuá de pescado del día",
      description: "Fideos tostados con el mejor pescado del día, acompañados de alioli suave.",
      price: "17 €",
      image: fideua,
      allergens: ["gluten", "pescado", "huevo"],
    },
  ],
  Pescados: [
    {
      name: "Lubina salvaje a la sal",
      description: "Lubina de lonja cubierta en costra de sal marina, abierta en mesa y servida con AOVE.",
      price: "22 €",
      image: lubinaMenu,
      allergens: ["pescado"],
    },
    {
      name: "Dorada a la plancha con verduras de temporada",
      description: "Dorada fresca a la plancha con guarnición de verduras salteadas al momento.",
      price: "19 €",
      image: doradaPlancha,
      allergens: ["pescado"],
    },
    {
      name: "Bacalao confitado con pimientos del piquillo",
      description: "Lomo de bacalao confitado a baja temperatura sobre crema de pimientos del piquillo.",
      price: "18 €",
      image: bacalao,
      allergens: ["pescado"],
    },
  ],
  Carnes: [
    {
      name: "Solomillo de ternera con reducción de Pedro Ximénez",
      description: "Solomillo de ternera gallega a la brasa con reducción de Pedro Ximénez y puré de boniato.",
      price: "24 €",
      image: solomillo,
      allergens: ["sulfitos"],
    },
    {
      name: "Secreto ibérico con patatas panaderas",
      description: "Corte secreto de cerdo ibérico de bellota con patatas panaderas y pimientos de padrón.",
      price: "19 €",
      image: secretoIberico,
      allergens: [],
    },
    {
      name: "Carrillera de cerdo estofada al vino tinto",
      description: "Carrillera de cerdo estofada durante 8 horas en vino tinto del Priorat con puré de patata trufado.",
      price: "17 €",
      image: carrillera,
      allergens: ["sulfitos", "lácteos"],
    },
  ],
  Postres: [
    {
      name: "Crema catalana tradicional",
      description: "Nuestra versión de la receta clásica catalana con azúcar caramelizado al momento.",
      price: "7 €",
      image: cremaCatalana,
      allergens: ["lácteos", "huevo"],
    },
    {
      name: "Tarta de Santiago con helado de vainilla",
      description: "Tarta de almendra gallega acompañada de helado artesano de vainilla de Madagascar.",
      price: "8 €",
      image: tartaSantiago,
      allergens: ["frutos secos", "huevo", "lácteos"],
    },
    {
      name: "Coulant de chocolate con frutos rojos",
      description: "Bizcocho fundente de chocolate negro 70% con corazón líquido y coulis de frutos rojos.",
      price: "9 €",
      image: coulant,
      allergens: ["gluten", "lácteos", "huevo"],
    },
    {
      name: "Sorbete de limón con cava",
      description: "Sorbete artesano de limón de Murcia con un chorrito de cava brut nature.",
      price: "6 €",
      image: sorbeteLimon,
      allergens: ["sulfitos"],
    },
  ],
  Vinos: [
    {
      name: "Copa de vino blanco - Albariño Rías Baixas",
      description: "Fresco y afrutado, ideal para acompañar pescados y mariscos.",
      price: "5 €",
      allergens: ["sulfitos"],
    },
    {
      name: "Copa de vino tinto - Crianza Ribera del Duero",
      description: "Elegante y equilibrado, con notas de frutos rojos y roble.",
      price: "6 €",
      allergens: ["sulfitos"],
    },
    {
      name: "Copa de cava brut nature - Penedès",
      description: "Burbujas finas y secas, perfecto como aperitivo o con postres.",
      price: "5 €",
      allergens: ["sulfitos"],
    },
    {
      name: "Sangría de la casa (jarra)",
      description: "Nuestra sangría casera con frutas frescas de temporada y especias.",
      price: "14 €",
      allergens: ["sulfitos"],
    },
  ],
};

const categories = Object.keys(menuData);

export default function Menu() {
  const [active, setActive] = useState(categories[0]);
  useScrollReveal([active]);

  return (
    <>
      <HeroSection
        image={heroMenu}
        title="Nuestra Carta"
        subtitle="Producto fresco de mercado, cada día"
        variant="banner"
      />

      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 fade-in">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
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
        <div className="flex flex-wrap justify-center gap-6">
          {menuData[active].map((dish) => (
            <div key={dish.name} className="fade-in w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
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
