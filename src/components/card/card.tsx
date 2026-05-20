import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export const Card = ({
  title,
  description,
  imageUrl,
  price,
}: CardProps) => {
  return (
    <article className="flex flex-col justify-between gap-4 p-4 border border-gray-300 rounded-xl w-full max-w-sm min-h-[700px] hover:shadow-md hover:scale-[1.02] transition">

      <Link
        href={`/livros/${encodeURIComponent(title)}`}
        className="flex flex-col gap-4"
      >
        <h4 className="font-extrabold text-lg min-h-[56px]">
          {title}
        </h4>

        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={300}
          className="w-full h-[300px] object-cover rounded-xl"
        />

        <p className="line-clamp-4 min-h-[96px] text-sm text-gray-600">
          {description}
        </p>
      </Link>

      <p className="font-bold text-lg">
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition">
        Adicionar ao carrinho
      </button>
    </article>
  );
};