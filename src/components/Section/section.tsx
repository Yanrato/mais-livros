import { Card, CardProps } from "../card/card";

interface ISectionProps {
  title: string;
  items: CardProps[];
  variant: "grid" | "h-list";
}

export const Section = ({ title, items, variant }: ISectionProps) => {
  return (
    <section className="mt-8 flex flex-col gap-6">
      <h2 className="font-bold text-2xl text-text">{title}</h2>

      <ul
        data-variant={variant}
        className="
          grid gap-4
          data-[variant=grid]:grid-cols-1
          data-[variant=grid]:sm:grid-cols-2
          data-[variant=grid]:md:grid-cols-3
          
          data-[variant=h-list]:grid-flow-col
          data-[variant=h-list]:auto-cols-max
          data-[variant=h-list]:overflow-x-auto
          data-[variant=h-list]:pb-4
        "
      >
        {items.map((item) => (
          <li
            key={item.title}
            className="w-72 shrink-0"
          >
            <Card
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
