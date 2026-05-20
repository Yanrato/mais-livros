"use client"
import { Section } from '@/components/Section/section';
import { useState } from "react";
import books from "@/data/books.json";

export default function PageHome() {
  const [selectedBook, setSelectedBook] = useState(books[0]);
  return (
    
    <main className="bg-background p-6">
      
      <h1 className="text-5xl font-extrabold underline">
        Bem-vindo ao Mais Livros!
      </h1>

      <p className="mt-2 font-bold text-base text-text">
        Aqui você encontrará diversos livros com preços acessíveis e entregas rápidas.
      </p>

  
    <br></br>
    <div className="flex gap-8 mt-8">
    <div className="flex-1 "> 
      <Section 
      variant='grid'
      title='Tendências'
      items={books}
      onHoverBook={setSelectedBook}
    />
    </div>

    
      {selectedBook && (
  <aside className="
    w-[400px]
    h-[90vh]
    sticky
    top-4
    overflow-y-auto
    border
    border-gray-300
    rounded-xl
    p-6
    bg-white
  ">

    <img
      src={selectedBook.imageUrl}
      alt={selectedBook.title}
      className="w-full h-[400px] object-cover rounded-xl"
    />

    <h2 className="text-2xl font-bold mt-4">
      {selectedBook.title}
    </h2>

    <p className="text-gray-600 mt-2">
      {selectedBook.description}
    </p>

    <p className="text-3xl font-bold mt-4">
      R$ {selectedBook.price}
    </p>

    <div className="flex gap-2 mt-6">
      <button className="bg-black text-white px-4 py-2 rounded-lg">
        Comprar
      </button>

      <button className="border px-4 py-2 rounded-lg">
        Carrinho
      </button>
    </div>

  </aside>
  
)}

    </div>
    </main>
  );
}



