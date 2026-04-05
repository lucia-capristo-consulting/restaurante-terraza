interface DishCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  allergens?: string[];
}

export default function DishCard({ name, description, price, image, allergens }: DishCardProps) {
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {image && (
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-lg font-semibold text-charcoal">{name}</h3>
          <span className="text-terra font-bold whitespace-nowrap">{price}</span>
        </div>
        <p className="mt-2 text-sm text-charcoal/70 leading-relaxed flex-1">{description}</p>
        {allergens && allergens.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {allergens.map((a) => (
              <span
                key={a}
                className="text-[10px] uppercase tracking-wider bg-cream-dark text-charcoal/60 px-2 py-0.5 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
