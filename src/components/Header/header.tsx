'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CiShoppingCart } from "react-icons/ci";
import { GiBlackBook } from "react-icons/gi";
import { TbCategoryPlus } from "react-icons/tb";

export const Header = () => {
  const currentPath = usePathname();
  return (
    <nav className="bg-primary py-4 px-6 flex items-center justify-between">
      
      
      <h1 className="text-header font-bold border-2 border-primary-Contrast px-5">
        <Link href="/" className={currentPath === "/" ? "underline" : ""}>Mais Livros </Link>
      </h1>

      
      <ul className="flex gap-6 items-center text-primary-Contrast">
        <li className="underline">
          <Link href="/Livros" className="flex items-center gap-2"><span className="leading-none">Livros</span>
          <GiBlackBook /></Link>
        </li>

        <li className="underline">
          <Link href="/Categorias" className="flex items-center gap-2"><span className="leading-none">Categorias</span>
          <TbCategoryPlus /></Link>
        </li>
      </ul>

      
      <Link
  href="/carrinho"
  className="flex items-center gap-2 text-primary-Contrast font-bold"
>
  
  <span className="leading-none">Carrinho</span>
  <CiShoppingCart className="text-xl" />
</Link>


    </nav>
  );
};
