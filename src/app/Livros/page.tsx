import { Section } from "@/components/Section/section";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Livros - Mais Livros',
    description: 'Encontre uma variedade de livros incríveis na seção de Livros do Mais Livros. Descubra novos títulos, autores e gêneros para todos os gostos. Compre agora e mergulhe em histórias fascinantes!',
  }

export default function pageLivros(){
    return(
        <main>
            <Section 
            title="Todos os Livros"
            />
        </main>
    );
}