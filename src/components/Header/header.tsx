'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CiShoppingCart } from "react-icons/ci";
import { GiBlackBook } from "react-icons/gi";
import { TbCategoryPlus } from "react-icons/tb";

export const Header = () => {
  const currentPath = usePathname();

  const linkBase =
    "flex items-center gap-2 text-primary-Contrast font-medium";
  const active = "underline";

  return (
    <nav className="bg-primary py-4 px-6 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-white font-extrabold border-2 border-primary-Contrast px-5">
        <Link
          href="/"
          className={currentPath === "/" ? active : ""}
        >
        MAIS LIVROS
        </Link>
      </h1>

      {/* Menu */}
      <ul className="flex gap-6 items-center">
        <li>
          <Link
            href="/Livros"
            className={`${linkBase} ${
              currentPath === "/Livros" ? active : ""
            }`}
          >
            <GiBlackBook />
            <span className="leading-none">Livros</span>
          </Link>
        </li>

        <li>
          <Link
            href="/Categorias"
            className={`${linkBase} ${
              currentPath === "/Categorias" ? active : ""
            }`}
          >
            <TbCategoryPlus />
            <span className="leading-none">Categorias</span>
          </Link>
        </li>
      </ul>

      {/* Carrinho */}
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
